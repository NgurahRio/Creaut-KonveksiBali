"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export default function TypewriterHeadline() {
  const [charsShown, setCharsShown] = useState(0);
  const { language } = useLanguage();

  const text1 = language === "en" ? "Bring " : "Wujudkan ";
  const text2 = language === "en" ? "Ideas" : "Ide";
  const text3 = language === "en" ? ", We " : ", Kita ";
  const text4 = language === "en" ? "Produce!" : "Produksi!";
  const totalChars = text1.length + text2.length + text3.length + text4.length;

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;

    const startTyping = () => {
      setCharsShown(0);
      clearInterval(typingInterval);
      typingInterval = setInterval(() => {
        setCharsShown((prev) => {
          if (prev >= totalChars) {
            clearInterval(typingInterval);
            return prev;
          }
          return prev + 1;
        });
      }, 70);
    };

    startTyping();
    const loopInterval = setInterval(startTyping, 7000); // Mengulang ketikan setiap 7 detik

    return () => {
      clearInterval(typingInterval);
      clearInterval(loopInterval);
    };
  }, [totalChars]);

  return (
    <h1 className="mt-2 text-4xl font-black leading-[1.2] sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 tracking-tight min-h-[2.4em] sm:min-h-0">
      <span className="whitespace-pre-wrap text-center">
        {text1.substring(0, charsShown)}
        {charsShown > text1.length && (
          <span className="bg-[length:200%_auto] animate-[gradient-slide_3s_linear_infinite] bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            {text2.substring(0, charsShown - text1.length)}
          </span>
        )}
        {charsShown > text1.length + text2.length && (
          <span>{text3.substring(0, charsShown - text1.length - text2.length)}</span>
        )}
        {charsShown > text1.length + text2.length + text3.length && (
          <span className="bg-[length:200%_auto] animate-[gradient-slide_3s_linear_infinite] bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            {text4.substring(0, charsShown - text1.length - text2.length - text3.length)}
          </span>
        )}
        {/* Kursor Ketik Kedip-Kedip */}
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-[4px] h-[0.9em] bg-gray-900 align-middle ml-[2px] translate-y-[-2px]"
        />
      </span>
    </h1>
  );
}
