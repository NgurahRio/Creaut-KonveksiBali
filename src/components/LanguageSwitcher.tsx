"use client";

import { type Language } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";

const languages: Array<{ value: Language; label: string; title: string }> = [
  { value: "id", label: "ID", title: "Bahasa Indonesia" },
  { value: "en", label: "EN", title: "English" },
];

function FlagIcon({ language }: { language: Language }) {
  if (language === "id") {
    return (
      <span className="block h-7 w-10 overflow-hidden rounded-md border border-black/10 shadow-sm">
        <span className="block h-1/2 bg-[#e31d1c]" />
        <span className="block h-1/2 bg-white" />
      </span>
    );
  }

  return (
    <span className="relative block h-7 w-10 overflow-hidden rounded-md bg-[#012169] shadow-sm ring-1 ring-black/10">
      <span className="absolute left-0 top-1/2 h-2 w-full -translate-y-1/2 bg-white" />
      <span className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-white" />
      <span className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-[#c8102e]" />
      <span className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[#c8102e]" />
      <span className="absolute left-[-8px] top-1/2 h-1.5 w-14 -translate-y-1/2 rotate-[35deg] bg-white" />
      <span className="absolute left-[-8px] top-1/2 h-1.5 w-14 -translate-y-1/2 -rotate-[35deg] bg-white" />
    </span>
  );
}

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      aria-label="Pilih bahasa"
      className="flex items-center gap-2 rounded-xl bg-[#f3eee8] p-1"
      data-no-translate
      role="group"
    >
      {languages.map((item) => {
        const active = language === item.value;

        return (
          <button
            aria-pressed={active}
            className={`flex h-12 items-center gap-2 rounded-lg px-2 text-sm font-black transition ${
              active ? "bg-white text-[#a17140] shadow-sm" : "text-black hover:bg-white/60"
            }`}
            key={item.value}
            onClick={() => setLanguage(item.value)}
            title={item.title}
            type="button"
          >
            <FlagIcon language={item.value} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
