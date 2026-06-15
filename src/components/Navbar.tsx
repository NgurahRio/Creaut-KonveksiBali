"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "./LanguageProvider"; // Import useLanguage
import Logo from "./Logo";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}

function getMenuIcon(href: string) {
  switch (href) {
    case "/":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      );
    case "/tentang-kami":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="8.5" r="0.5" fill="currentColor" />
          <line x1="12" y1="11.5" x2="12" y2="16" strokeLinecap="round" />
        </svg>
      );
    case "/produk":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 4 4 6l-2 5 4 2 1-2v10h10V11l1 2 4-2-2-5-4-2a4 4 0 0 1-8 0z" />
        </svg>
      );
    case "/tracking-order":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <circle cx="7.5" cy="7.5" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 5.5v2h1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 8.5h4.5a1 1 0 0 1 1 1v2.5h3.5a1 1 0 0 1 .8.4l1.4 1.85a1 1 0 0 1 .3.65V16.5a1 1 0 0 1-1 1h-1.5M16.5 12h5.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 13.5v3a1 1 0 0 0 1 1h1.5m3 0h6" />
          <circle cx="7.5" cy="17.5" r="1.5" />
          <circle cx="16.5" cy="17.5" r="1.5" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm0 5.25h.007v.008H3.75V12zm0 5.25h.007v.008H3.75v-.008z" />
        </svg>
      );
  }
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage(); // Dapatkan bahasa aktif
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  // Objek terjemahan untuk label mode gelap/terang
  const themeLabels = {
    id: {
      darkMode: "Mode Gelap",
      lightMode: "Mode Terang",
    },
    en: { // Asumsi Anda juga memiliki terjemahan bahasa Inggris
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
    },
    // Tambahkan bahasa lain jika ada
  };

  // Fungsi helper untuk mendapatkan label yang benar berdasarkan bahasa aktif
  const getThemeLabel = (isDark: boolean) => {
    const currentLangLabels = themeLabels[language as keyof typeof themeLabels] || themeLabels.id; // Fallback ke ID jika bahasa tidak ditemukan
    return isDark ? currentLangLabels.lightMode : currentLangLabels.darkMode;
  };
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch((e) => console.log("Autoplay diblokir:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* HEADER: Memperbaiki space 'border-b ' dan warna conditional */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/95 text-black border-gray-100 shadow-sm backdrop-blur"
            : "bg-[#0b0f19] text-white border-transparent"
        }`}
      >
        <audio ref={audioRef} src="/assets/lagukonveksi.mp3" loop preload="auto" />

        <Container>
          <nav className="flex h-20 items-center justify-between gap-6 lg:h-24">
            <Logo className="min-w-0" isScrolled={isScrolled} />

            {/* Menu Desktop */}
            <div className="hidden items-center gap-10 text-[15px] font-medium tracking-wide lg:flex">
              {navLinks.map((link) => {
                const active = isActiveRoute(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors duration-300 ${
                      active
                        ? isScrolled ? "text-black font-semibold" : "text-white font-semibold"
                        : isScrolled ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Kontrol Kanan Desktop */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher isScrolled={isScrolled} />

              {/* Musik */}
              <button
                onClick={toggleMusic}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition duration-300 active:scale-95 ${
                  isScrolled 
                    ? "text-gray-600 hover:bg-gray-50 hover:text-black" 
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
                aria-label="Toggle Background Music"
                title={isPlaying ? "Matikan Musik" : "Putar Musik"}
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.465a5.25 5.25 0 010 7.07M10.5 19.5L5.811 15H3.75a.75.75 0 01-.75-.75V9.75a.75.75 0 01.75-.75h2.061L10.5 4.5v15z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25M10.5 19.5L5.811 15H3.75a.75.75 0 01-.75-.75V9.75a.75.75 0 01.75-.75h2.061L10.5 4.5v15z" />
                  </svg>
                )}
              </button>

              {/* Tema (Hanya Desktop) */}
              <button
                onClick={toggleTheme}
                className={`hidden lg:flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition duration-300 active:scale-95 ${
                  isScrolled 
                    ? "text-gray-600 hover:bg-gray-50 hover:text-black" 
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
                aria-label="Toggle Theme"
                title={getThemeLabel(isDarkMode)}
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-2.659l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>
                )}
              </button>

              {/* Hamburger Button Mobile */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className={`p-2 transition duration-300 lg:hidden ${
                  isScrolled ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white"
                }`}
                aria-label="Open Menu"
              >
                <svg xmlns="http://www.w3.org/2000/xl" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Sidebar Mobile */}
      <div className={`fixed inset-0 lg:hidden ${isOpen ? "z-[100] block" : "pointer-events-none hidden"}`}>
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        />

        <div className={`absolute bottom-0 right-0 top-0 flex h-full w-[72%] flex-col bg-[#0b131f] text-white shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between border-b border-gray-800/60 px-6 py-5">
            <h2 className="text-xl font-semibold tracking-wide">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-gray-400 hover:bg-gray-800 hover:text-white"
              aria-label="Close Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = isActiveRoute(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 transition-all duration-200 ${
                      active ? "bg-gray-800/70 text-white font-medium" : "text-gray-300 hover:bg-gray-800/30 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${active ? "bg-[#1e293b] text-blue-400" : "bg-gray-800/60 text-gray-400"}`}>
                        {getMenuIcon(link.href)}
                      </div>
                      <span className="text-[16px] tracking-wide">{link.label}</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                );
              })}

              <hr className="my-2 border-gray-800/60" />

              <button
                type="button"
                onClick={toggleTheme}
                className="mt-2 w-full flex items-center justify-between rounded-2xl bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700/30 px-5 py-4 text-gray-200 shadow-inner transition-colors duration-200 active:scale-[0.98]"
                aria-label="Ubah Tema"
              >
                <span className="text-[16px] tracking-wide font-medium select-none">
                  {getThemeLabel(isDarkMode)} {/* Gunakan fungsi getThemeLabel */}
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-300">
                  {isDarkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-2.659l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}