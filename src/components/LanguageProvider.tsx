"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import {
  enToIdTranslations,
  idToEnTranslations,
  type Language,
} from "@/data/translations";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "konveksi-bali-language";

function isIgnoredNode(node: Node): boolean {
  const parent = node.parentElement;

  if (!parent) {
    return true;
  }

  return Boolean(parent.closest("script, style, noscript, svg, [data-no-translate]"));
}

function translateValue(value: string, language: Language): string {
  const trimmed = value.trim();

  if (!trimmed) {
    return value;
  }

  const dictionary = language === "en" ? idToEnTranslations : enToIdTranslations;
  const translated = dictionary[trimmed];

  if (!translated || translated === trimmed) {
    return value;
  }

  const prefix = value.match(/^\s*/)?.[0] ?? "";
  const suffix = value.match(/\s*$/)?.[0] ?? "";

  return `${prefix}${translated}${suffix}`;
}

function translateDocument(language: Language): void {
  if (!document.body) {
    return;
  }

  document.documentElement.lang = language;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (isIgnoredNode(node) || !node.textContent?.trim()) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes: Text[] = [];
  let currentNode = walker.nextNode();

  while (currentNode) {
    textNodes.push(currentNode as Text);
    currentNode = walker.nextNode();
  }

  textNodes.forEach((node) => {
    const current = node.textContent ?? "";
    const translated = translateValue(current, language);

    if (translated !== current) {
      node.textContent = translated;
    }
  });

  document
    .querySelectorAll<HTMLElement>("[placeholder], [aria-label], [title], [alt]")
    .forEach((element) => {
      if (element.closest("[data-no-translate]")) {
        return;
      }

      ["placeholder", "aria-label", "title", "alt"].forEach((attribute) => {
        const current = element.getAttribute(attribute);

        if (!current) {
          return;
        }

        const translated = translateValue(current, language);

        if (translated !== current) {
          element.setAttribute(attribute, translated);
        }
      });
    });
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

export default function LanguageProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [language, setLanguageState] = useState<Language>("id");

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage(nextLanguage) {
        setLanguageState(nextLanguage);
        window.localStorage.setItem(storageKey, nextLanguage);
      },
    }),
    [language],
  );

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(storageKey);

    if (savedLanguage === "id" || savedLanguage === "en") {
      const timer = window.setTimeout(() => {
        setLanguageState(savedLanguage);
      }, 0);

      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const run = () => translateDocument(language);
    const timer = window.setTimeout(run, 0);
    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(run);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [language, pathname]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
