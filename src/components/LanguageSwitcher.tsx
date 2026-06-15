"use client";

import { useState } from "react";
import { type Language } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";

interface LanguageSwitcherProps {
  isScrolled: boolean;
}

const languages: Array<{ value: Language; code: string; label: string; title: string }> = [
  { value: "id", code: "ID", label: "Indonesia", title: "Bahasa Indonesia" },
  { value: "en", code: "US", label: "English", title: "English" },
];

export default function LanguageSwitcher({ isScrolled }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      {/* Tombol Utama: Ikon Globe Minimalis */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`flex h-10 w-10 items-center justify-center rounded-full transition duration-300 active:scale-95 ${
          isScrolled
            ? "text-gray-600 hover:bg-gray-50 hover:text-black"
            : "text-gray-300 hover:bg-white/10 hover:text-white"
        }`}
        aria-label="Pilih bahasa"
        type="button"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="h-5 w-5"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253"
          />
        </svg>
      </button>

      {/* Dropdown Menu Melayang */}
      <div
        className={`absolute right-0 top-full z-50 mt-2 w-44 rounded-xl bg-white py-1.5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-gray-100/50 transition-all duration-200 ${
          isDropdownOpen
            ? "visible translate-y-0 opacity-100" 
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {languages.map((item) => {
            const active = language === item.value;

            return (
              <li key={item.value}>
                <button
                  onClick={() => {
                    setLanguage(item.value);
                    setIsDropdownOpen(false);
                  }}
                  className="flex w-full items-center px-4 py-2.5 text-left text-[14px] transition-colors duration-150 hover:bg-gray-50 text-gray-800"
                  title={item.title}
                  type="button"
                >
                  {/* Kode Negara (US / ID) */}
                  <span className="w-7 text-[11px] font-bold text-gray-400 tracking-wider">
                    {item.code}
                  </span>
                  
                  {/* Label Nama Bahasa */}
                  <span className={`flex-1 ${active ? "font-medium text-black" : "font-normal"}`}>
                    {item.label}
                  </span>

                  {/* Centang Biru untuk Bahasa Aktif */}
                  {active && (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={3} 
                      stroke="currentColor" 
                      className="h-4 w-4 text-[#0052cc]"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}