"use client"

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import CTASection from "@/components/sections/CTASection";
import TypewriterHeadline from "@/components/sections/TypewriterHeadline";
import TrackingWidget from "@/components/sections/TrackingWidget";
import TestimonialCard from "@/components/sections/TestimonialCard";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/common/Icons";
import {
  clientLogos,
  testimonials,
  workSteps,
  BerandaProducts,
  WHATSAPP_URL
} from "@/data/site";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedReview, setSelectedReview] = useState<{ name: string; role: string; text: string; rating: number; image?: string } | null>(null);
  const [selectedBg, setSelectedBg] = useState<string>("");

  // Cek posisi scroll slider review/testimoni untuk mengaktifkan tombol panah kiri-kanan
  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollLeftFn = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -344, behavior: "smooth" });
  };

  const scrollRightFn = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 344, behavior: "smooth" });
  };

  return (
    <>
      {/* ──────────────────────────────────────────────────────
          1. HERO SECTION (Bagian Utama Atas)
          ────────────────────────────────────────────────────── */}
      <section className="bg-white pt-32 pb-12 md:pt-36 md:pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
        {/* Dekorasi Grid Halus di Latar Belakang */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge kecil diatas judul */}
              <motion.span
                className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-cyan-50 px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-primary-dark ring-1 ring-cyan-500/20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                Konveksi Apparel Custom
              </motion.span>

              {/* Judul dengan Animasi Ketik */}
              <TypewriterHeadline />

              {/* Deskripsi sub-judul */}
              <motion.p
                className="mx-auto mt-7 max-w-2xl text-base font-medium leading-7 text-gray-500 lg:text-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Kami membantu brand, komunitas dan bisnis mewujudkan apparel
                berkualitas dengan desain bebas dan hasil maksimal.
              </motion.p>

              {/* Tombol Utama (Call to Action) */}
              <motion.div
                className="mt-10 flex flex-col gap-4 sm:flex-row justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
              >
                <a
                  className="hero-btn-primary flex h-14 items-center justify-center gap-3 rounded-xl px-8 text-base font-bold text-white shadow-lg shadow-cyan-500/30 bg-cyan-500 hover:bg-cyan-600"
                  href={WHATSAPP_URL}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Icon className="h-5 w-5" name="whatsapp" />
                  Konsultasi Sekarang
                </a>
                <Link
                  className="flex h-14 items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-8 text-base font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-primary-dark"
                  href="/produk"
                >
                  <Icon className="h-5 w-5" name="shirt" />
                  Lihat Produk
                </Link>
              </motion.div>

              {/* Badge Jaminan Advish */}
              <motion.div
                className="mt-10 flex flex-wrap items-center justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                {[
                  { label: "Gratis Desain", icon: "ruler" as const },
                  { label: "MOQ 12 Pcs", icon: "package" as const },
                  { label: "Se-Indonesia", icon: "truck" as const },
                ].map((badge) => (
                  <span
                    key={badge.label}
                    className="flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-600 ring-1 ring-gray-200"
                  >
                    <Icon className="h-4 w-4 text-cyan-500" name={badge.icon as any} />
                    {badge.label}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      <Container>
        {/* ──────────────────────────────────────────────────────
            2. TENTANG KAMI (HOOK)
            ────────────────────────────────────────────────────── */}
        <motion.section
          className="mt-12 lg:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-gray-100 rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200 shadow-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          {/* Gambar Toko / Konveksi */}
          <div className="w-full lg:w-[400px] xl:w-[500px] shrink-0 relative aspect-video lg:aspect-square max-h-[300px] lg:max-h-[400px] rounded-2xl overflow-hidden shadow-md ring-1 ring-gray-100/50">
            <Image
              src="/assets/toko.png"
              alt="Advish Konveksi Store"
              fill
              sizes="(min-width: 1280px) 500px, (min-width: 1024px) 400px, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none" />
          </div>
          {/* Informasi & Penjelasan Singkat */}
          <div className="flex-1 space-y-5 sm:space-y-6">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-cyan-600">Tentang Kami</p>
              <h2 className="text-3xl font-black sm:text-4xl leading-tight bg-gradient-to-r from-gray-900 to-cyan-800 bg-clip-text text-transparent">Mitra Terpercaya untuk Seragam & Apparel Anda</h2>
            </div>
            <p className="text-base font-medium leading-relaxed text-gray-600">
              Berpengalaman menangani berbagai pesanan dari instansi, perusahaan, hingga komunitas di seluruh Indonesia. Kami sangat mengutamakan kualitas bahan, kerapian jahitan, dan ketepatan waktu produksi.
            </p>
            <div className="pt-2">
              <Link
                href="/tentang-kami"
                className="group flex sm:inline-flex w-full sm:w-auto h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 text-sm font-bold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-0.5"
              >
                <span>Selengkapnya Tentang Kami</span>
                <Icon className="h-4 w-4 transition-transform group-hover:translate-x-1 shrink-0" name="arrowRight" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* ──────────────────────────────────────────────────────
            3. CARA KERJA (WORK STEPS)
            ────────────────────────────────────────────────────── */}
        <motion.section
          className="mt-12 lg:mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <div className="text-center mb-12">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Mudah & Cepat</p>
            <h2 className="text-3xl font-black text-black sm:text-4xl">Cara Kerja Kami</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-semibold text-gray-500">
              Proses pemesanan yang simple, dari konsultasi sampai produk dikirim ke tangan Anda.
            </p>
          </div>
          {/* Kolom Tahapan Kerja */}
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {workSteps.map((ws, index) => (
              <motion.div
                key={ws.step}
                variants={staggerItem}
                className="group relative rounded-2xl bg-gradient-to-b from-white to-gray-50/50 p-5 sm:p-6 flex flex-col items-center justify-center text-center border-2 border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(8,145,178,0.12)] hover:border-cyan-300 min-h-[160px]"
              >
                {/* Nomor Urut Tahapan */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-black text-white shadow-md shadow-cyan-500/30">
                    {ws.step}
                  </span>
                </div>
                {/* Penghubung Alur Estetik */}
                {index < workSteps.length - 1 && (
                  <div className="absolute -right-6 top-1/2 hidden w-6 -translate-y-1/2 items-center justify-center lg:flex z-[20]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 shadow-[0_4px_12px_rgba(8,145,178,0.15)] ring-4 ring-white text-cyan-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-45">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </div>
                  </div>
                )}
                {/* Icon Tahapan */}
                <div className="mt-2 mb-3 flex justify-center">
                  <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-lightest to-cyan-50 text-primary-dark transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-200/40">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" name={ws.icon as any} />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-black text-black leading-snug">{ws.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ──────────────────────────────────────────────────────
            4. KATEGORI PRODUK
            ────────────────────────────────────────────────────── */}
        <motion.section
          className="mt-16 rounded-3xl bg-gradient-to-r from-[#0a5264] to-[#0e7490] p-6 border border-white/10 sm:p-8 lg:mt-24 lg:p-12 text-white shadow-[0_12px_40px_rgba(0,0,0,0.2)] relative overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          {/* Subtle background grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 text-center mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 ring-1 ring-white/10">
              Koleksi Kami
            </span>
            <h2 className="text-3xl font-black text-white sm:text-4xl mt-3">
              Kategori Produk
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-cyan-100/80 leading-relaxed">
              Temukan berbagai macam pilihan apparel berkualitas tinggi untuk instansi, perusahaan, komunitas, dan kebutuhan event Anda.
            </p>
          </div>
          {/* Grid Kategori */}

          <motion.div
            className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {BerandaProducts.map((product) => (
              <motion.div
                key={product.label}
                variants={staggerItem}
                className="w-full mx-auto max-w-[240px]"
              >
                <Link
                  className="group relative block overflow-hidden rounded-2xl bg-white p-5 text-center border border-[#0c5c70]/20 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(6,182,212,0.25)] hover:border-cyan-300"
                  href={product.href}
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-transparent mb-4">
                    <Image
                      alt={product.imageAlt}
                      className="object-contain scale-[1.4] transition-transform duration-500 group-hover:scale-[1.5]"
                      fill
                      sizes="(min-width: 1024px) 20vw, 50vw"
                      src={product.image}
                    />
                  </div>
                  <h3 className="mt-4 text-base sm:text-lg font-black text-gray-900 transition-colors group-hover:text-cyan-600">
                    {product.label}
                  </h3>
                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="relative z-10 mt-12 flex justify-center">
            <Link
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-gray-900 transition-all hover:bg-cyan-400 hover:text-gray-900 hover:shadow-lg hover:shadow-cyan-400/30"
              href="/produk"
            >
              <span>Lihat Semua Katalog</span>
              <Icon className="h-4 w-4 transition-transform group-hover:translate-x-1" name="arrowRight" />
            </Link>
          </div>
        </motion.section>
      </Container>

      {/* ──────────────────────────────────────────────────────
          5. TRACKING WIDGET (Lacak Pesanan)
          ────────────────────────────────────────────────────── */}
      <TrackingWidget />

      <Container>
        {/* ──────────────────────────────────────────────────────
            6. TESTIMONI (Kata Mereka)
            ────────────────────────────────────────────────────── */}
        <motion.section
          className="mt-20 relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-[#1d2939] sm:text-4xl">
              Kata Mereka <span className="text-[#2081E2]">Tentang Kami</span>
            </h2>
            <div className="mx-auto mt-2 h-1 w-12 rounded bg-[#2081E2]"></div>
            <p className="mx-auto mt-4 max-w-2xl text-base font-semibold text-gray-500">
              Kepercayaan dan kepuasan Anda adalah komitmen utama kami dalam setiap jahitan. Kami selalu memastikan pemilihan bahan terbaik, kerapian produksi, dan ketepatan waktu demi hasil yang memuaskan.
            </p>
          </div>

          <div className="relative mx-auto max-w-7xl">
            {/* Tombol Panah Navigasi Review */}
            <button
              onClick={scrollLeftFn}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-all sm:-left-5 sm:flex ${canScrollLeft ? 'bg-[#1E1E1E] text-white hover:scale-110' : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={scrollRightFn}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-all sm:-right-5 sm:flex ${canScrollRight ? 'bg-[#1E1E1E] text-white hover:scale-110' : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* List Review / Slider Testimoni */}
            <motion.div
              ref={sliderRef}
              onScroll={checkScroll}
              className="flex gap-5 sm:gap-6 overflow-x-auto px-5 sm:px-6 lg:px-8 pb-8 pt-4 snap-x snap-mandatory hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {testimonials.map((t, index) => {
                const colors = ["bg-pink-600", "bg-blue-600", "bg-green-600", "bg-amber-600", "bg-purple-600"];
                const bgColor = colors[index % colors.length];
                return (
                  <TestimonialCard
                    key={index}
                    t={t as any}
                    bgColor={bgColor}
                    onReadMore={() => {
                      setSelectedReview(t);
                      setSelectedBg(bgColor);
                    }}
                  />
                );
              })}
            </motion.div>
          </div>

          {/* Modal Pop-up Google Maps Detail Review */}
          <AnimatePresence>
            {selectedReview && (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedReview(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-[500px] bg-white rounded-2xl overflow-hidden shadow-2xl relative"
                >
                  {/* Tombol Close Modal */}
                  <button
                    onClick={() => setSelectedReview(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="p-6">
                    {/* Header Profil Ulasan */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-3 items-center">
                        {selectedReview.image ? (
                          <Image src={selectedReview.image} alt={selectedReview.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover border border-gray-200" />
                        ) : (
                          <div className={`h-12 w-12 flex items-center justify-center rounded-full ${selectedBg} text-lg font-black text-white`}>
                            {selectedReview.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <div className="flex flex-col justify-center">
                          <p className="text-[16px] font-bold text-gray-900 tracking-wide">{selectedReview.name.replace(/^\d+_/, '')}</p>
                          <p className="text-[13px] text-gray-500 mt-0.5">{selectedReview.role}</p>
                        </div>
                      </div>
                      {/* Logo Google */}
                      <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-10 mt-1">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                    </div>

                    {/* Bintang Penilaian */}
                    <div className="mb-4 flex items-center gap-[2px]">
                      {Array.from({ length: selectedReview.rating }).map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FBBC04" className="w-[18px] h-[18px]">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                      ))}
                      <div className="ml-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-[#1877F2]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[10px] w-[10px] text-white">
                          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

                    {/* Teks Ulasan Lengkap */}
                    <div className="max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                      <p className="text-[15px] leading-relaxed text-gray-800 whitespace-pre-line">
                        {selectedReview.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Tombol Tulis Ulasan */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://maps.app.goo.gl/NtHSVbsRtB9sKVxd9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-[46px] items-center gap-2 rounded-full bg-[#4285F4] px-8 text-[15px] font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-[#4285F4]/30"
            >
              <Icon className="h-[18px] w-[18px] bg-white rounded-full p-[2px]" name="google" />
              Tulis Ulasan di Google
            </a>
          </div>
        </motion.section>

        {/* ──────────────────────────────────────────────────────
            7. CLIENT & PARTNER (Logos Partner)
            ────────────────────────────────────────────────────── */}
        <motion.section
          className="mt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={0}
        >
          <div className="text-center mb-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
              Dipercaya Oleh
            </p>
            <h2 className="text-2xl font-black text-black">
              Client & Partner Kami
            </h2>
          </div>

          {/* Efek Marquee Logo Bergulir */}
          <div className="marquee-fade group flex gap-6 overflow-hidden py-4">
            {[0, 1].map((i) => (
              <div className="animate-marquee flex shrink-0 gap-6" key={i}>
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <div
                    className="flex h-20 w-52 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-lg font-black text-primary-dark/50 ring-1 ring-gray-100 transition-all duration-300 hover:bg-white hover:text-primary-dark hover:shadow-lg hover:ring-cyan-200 hover:scale-105"
                    key={`${client}-${index}`}
                  >
                    {client}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.section>

        {/* ──────────────────────────────────────────────────────
            8. CTA SECTION (Hubungi Kami)
            ────────────────────────────────────────────────────── */}
        <motion.div
          className="mt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <CTASection />
        </motion.div>
      </Container>
    </>
  );
}
