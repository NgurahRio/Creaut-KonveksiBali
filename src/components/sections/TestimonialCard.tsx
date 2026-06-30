"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerItem } from "@/lib/animations";
import type { Testimonial } from "@/types/site";

interface TestimonialCardProps {
  t: Testimonial;
  bgColor: string;
  onReadMore: () => void;
}

export default function TestimonialCard({
  t,
  bgColor,
  onReadMore
}: TestimonialCardProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  // Mengecek apakah ulasan terlalu panjang sehingga perlu dipotong (truncation)
  useEffect(() => {
    if (textRef.current) {
      setIsTruncated(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, [t.text]);

  return (
    <motion.div
      variants={staggerItem}
      className="group relative flex-none w-[300px] sm:w-[340px] max-w-[85vw] snap-center flex flex-col justify-between overflow-hidden rounded-[20px] bg-[#1a1a1a] p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[#2d2d2d] transition-transform duration-300"
    >
      <div>
        {/* Header: Avatar, Nama, Waktu, & Logo Google */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex gap-3 items-center">
            {t.image ? (
              <Image
                src={t.image}
                alt={t.name}
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-full object-cover border border-white/10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  e.currentTarget.nextElementSibling?.classList.add('flex');
                }}
              />
            ) : null}
            {/* Inisial nama jika tidak ada foto profil */}
            <div className={`h-10 w-10 shrink-0 items-center justify-center rounded-full ${bgColor} text-[15px] font-black text-white ${t.image ? 'hidden' : 'flex'}`}>
              {t.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[14px] font-bold text-white line-clamp-1 tracking-wide">{t.name.replace(/^\d+_/, '')}</p>
              <p className="text-[12px] text-gray-400 mt-0.5">{t.role}</p>
            </div>
          </div>
          {/* Logo Google */}
          <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
        </div>

        {/* Rating Bintang & Badge Terverifikasi */}
        <div className="mb-3 flex items-center gap-[2px]">
          {Array.from({ length: t.rating }).map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBBC04" className="w-[16px] h-[16px]">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
          ))}
          <div className="ml-1.5 flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#1877F2]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[10px] w-[10px] text-white">
              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Isi Review */}
        <p
          ref={textRef}
          className="mb-4 text-[14.5px] leading-relaxed text-gray-100 line-clamp-4"
        >
          {t.text}
        </p>
      </div>

      {/* Tombol Read More */}
      <div className="mt-auto flex items-end justify-between pt-2">
        {isTruncated ? (
          <span
            onClick={onReadMore}
            className="text-[13px] font-medium text-gray-500 hover:text-gray-300 cursor-pointer transition-colors"
          >
            Read more
          </span>
        ) : (
          <span className="text-[13px] opacity-0 pointer-events-none">Read more</span>
        )}
      </div>
    </motion.div>
  );
}
