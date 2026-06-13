"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
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
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      className="h-5 w-5"
    >
      {/* Menggambar lingkaran luar luar */}
      <circle cx="12" cy="12" r="9" />
      
      {/* Menggambar titik huruf i (sedikit diturunkan ke koordinat Y=8.5) */}
      <circle cx="12" cy="8.5" r="0.5" fill="currentColor" />
      
      {/* Menggambar garis batang huruf i (pas di tengah dari Y=11.5 sampai Y=16) */}
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
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      className="h-5 w-5"
    >
      {/* 1. Lingkaran Jam di bagian atas kiri */}
      <circle cx="7.5" cy="7.5" r="4" />
      {/* Jarum jam L di dalam lingkaran */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 5.5v2h1.5" />

      {/* 2. Badan Utama Truk & Kepala Depan */}
      {/* Garis atap kargo (mulai dari sebelah jam), turun, ke kaca depan, lalu bumper */}
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M11.5 8.5h4.5a1 1 0 0 1 1 1v2.5h3.5a1 1 0 0 1 .8.4l1.4 1.85a1 1 0 0 1 .3.65V16.5a1 1 0 0 1-1 1h-1.5M16.5 12h5.5" 
      />
      
      {/* 3. Bagian Bawah Kargo & Penghubung antar Roda */}
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 13.5v3a1 1 0 0 0 1 1h1.5m3 0h6" />

      {/* 4. Dua Roda Truk (Bulat Kosong) */}
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch((e) => console.log("Autoplay diblokir browser:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
        <audio ref={audioRef} src="/assets/lagukonveksi.mp3" loop preload="auto" />

        <Container>
          <nav className="flex h-20 items-center justify-between gap-6 lg:h-24">
            <Logo className="min-w-0" />

            {/* Menu Desktop */}
            <div className="hidden items-center gap-10 text-[15px] font-medium tracking-wide lg:flex">
              {navLinks.map((link) => {
                const active = isActiveRoute(pathname, link.href);
                return (
                  <Link
                    className={`transition-colors duration-200 ${
                      active ? "text-black font-semibold" : "text-gray-600 hover:text-black"
                    }`}
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Kontrol Desktop */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              <button
                onClick={toggleMusic}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-50 hover:text-black active:scale-95"
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

              {/* Tombol Hamburger Menu */}
              <button
                className="p-2 text-gray-600 transition hover:text-black lg:hidden"
                onClick={() => setIsOpen(true)}
                aria-label="Open Menu"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* ========================================================================= */}
      {/* FIX BUGS: LAYER SIDEBAR MOBILE DIKASI OUTSIDE HEADER BIAR TIDAK OVERFLOW */}
      {/* ========================================================================= */}
      <div className={`fixed inset-0 lg:hidden ${isOpen ? "z-[100] block" : "pointer-events-none hidden"}`}>
        {/* Backdrop Gelap */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Panel Menu Konten Kanan */}
        <div
          className={`absolute bottom-0 right-0 top-0 flex h-full w-[72%] flex-col bg-[#0b131f] text-white shadow-2xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header Sidebar */}
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

          {/* List Item Nav Links */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = isActiveRoute(pathname, link.href);
                return (
                  <Link
                    href={link.href}
                    key={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 transition-all duration-200 ${
                      active 
                        ? "bg-gray-800/70 text-white font-medium" 
                        : "text-gray-300 hover:bg-gray-800/30 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                        active ? "bg-[#1e293b] text-blue-400" : "bg-gray-800/60 text-gray-400"
                      }`}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}