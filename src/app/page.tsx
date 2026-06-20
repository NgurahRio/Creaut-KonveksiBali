"use client"
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import StatsStrip from "@/components/StatsStrip";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/Icons";
import {
  clientLogos,
  galleryImages,
  products,
  testimonials,
  workSteps,
  advantages,
  portfolioItems,
} from "@/data/site";
import HeroTitle from "@/components/TextHero";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function TestimonialCard({ t, index, bgColor, onReadMore }: { t: any; index: number; bgColor: string; onReadMore: () => void }) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      setIsTruncated(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, [t.text]);

  return (
    <motion.div
      variants={staggerItem}
      className="group relative flex-none w-[320px] snap-center flex flex-col justify-between overflow-hidden rounded-2xl bg-[#1a1a1a] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[#2d2d2d] transition-transform duration-300"
    >
      <div>
        {/* Header: Avatar, Name, Time, Google Logo */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex gap-3 items-center">
            {t.image ? (
              <img 
                src={t.image} 
                alt={t.name}
                className="h-10 w-10 shrink-0 rounded-full object-cover border border-white/10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  e.currentTarget.nextElementSibling?.classList.add('flex');
                }}
              />
            ) : null}
            <div className={`h-10 w-10 shrink-0 items-center justify-center rounded-full ${bgColor} text-[15px] font-black text-white ${t.image ? 'hidden' : 'flex'}`}>
              {t.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[14px] font-bold text-white line-clamp-1 tracking-wide">{t.name.replace(/^\d+_/, '')}</p>
              <p className="text-[12px] text-gray-400 mt-0.5">{t.role}</p>
            </div>
          </div>
          {/* Multi-color Google Logo */}
          <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        
        {/* Stars & Verified */}
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
        
        {/* Text */}
        <p 
          ref={textRef}
          className="mb-4 text-[14.5px] leading-relaxed text-gray-100 line-clamp-4"
        >
          {t.text}
        </p>
      </div>
      
      {/* Footer of Card */}
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

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedReview, setSelectedReview] = useState<any>(null);
  const [selectedBg, setSelectedBg] = useState<string>("");

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

  const scrollLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -344, behavior: "smooth" });
  };
  
  const scrollRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 344, behavior: "smooth" });
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const categoryProducts = [
    { label: "Kaos", product: products[0] },
    { label: "Jersey", product: products[1] },
    { label: "Jaket Sporty", product: products[2] },
    { label: "Jaket Formal", product: products[3] },
    { label: "PDH", product: products[4] },
    { label: "Workshop Wear", product: products[6] },
  ];

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════════════ */}
      <Container className="pt-6 lg:pt-10">
        <section className="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="motion"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-5 py-2 text-sm font-black uppercase tracking-wider text-primary-dark ring-1 ring-cyan-500/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
              </span>
              Konveksi Apparel Custom
            </span>

            <div className="mt-4 max-w-3xl text-4xl font-black leading-tight text-black sm:text-3xl lg:text-5xl">
              <HeroTitle
                before="Wujudkan "
                highlight="Ide"
                after=",Kita Produksi!"
              />
            </div>

            <p className="mt-7 max-w-2xl text-md lg:text-lg font-semibold leading-7 text-[#4a4a4a]">
              Kami membantu brand, komunitas dan bisnis mewujudkan apparel
              berkualitas dengan desain bebas dan hasil maksimal.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                className="flex h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 text-base font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30"
                href="https://wa.me/6281345677890"
                rel="noreferrer"
                target="_blank"
              >
                <Icon className="h-5 w-5" name="whatsapp" />
                Konsultasi Sekarang
              </a>
              <Link
                className="flex h-12 items-center justify-center gap-3 rounded-xl border-2 border-gray-200 bg-white px-6 text-base font-bold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-primary-dark hover:shadow-lg"
                href="/produk"
              >
                <Icon className="h-5 w-5" name="shirt" />
                Lihat Katalog
              </Link>
            </div>

            {/* Mini trust badges */}
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-green-500" name="check" />
                <span className="font-semibold">Gratis Desain</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-green-500" name="check" />
                <span className="font-semibold">MOQ 12 Pcs</span>
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-green-500" name="check" />
                <span className="font-semibold">Kirim Se-Indonesia</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="mt-0"
          >
            <div className="relative flex items-center justify-center min-h-[360px] lg:min-h-[420px]">
              {/* Decorative background blobs */}
              <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-200/40 to-blue-200/40 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-gradient-to-tr from-primary-lightest/50 to-cyan-200/30 blur-2xl" />

              {/* Hero image */}
              <div className="animate-float relative z-10">
                <Image
                  src="/assets/hero-products.png"
                  alt="Koleksi produk konveksi Bali - kaos, jersey, jaket"
                  width={520}
                  height={400}
                  className="drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════
            STATS STRIP
        ══════════════════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          custom={0}
        >
          <StatsStrip className="mt-12 lg:mt-16" />
        </motion.div>

        {/* ══════════════════════════════════════════════════════
            KENAPA PILIH KAMI (ADVANTAGES)
        ══════════════════════════════════════════════════════ */}
        <motion.section
          className="mt-16 lg:mt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <div className="text-center mb-12">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Keunggulan Kami</p>
            <h2 className="text-3xl font-black text-black sm:text-4xl">Kenapa Pilih Kami?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-semibold text-gray-500">
              Kami berkomitmen memberikan layanan terbaik dari awal konsultasi hingga produk sampai di tangan Anda.
            </p>
          </div>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {advantages.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(8,145,178,0.12)] hover:border-cyan-200"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-lightest to-cyan-100 text-primary-dark transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-200/50">
                  <Icon className="h-7 w-7" name={item.icon} />
                </div>
                <h3 className="text-lg font-black text-black mb-2">{item.title}</h3>
                <p className="text-sm font-semibold leading-6 text-gray-500">{item.description}</p>
                <div className="absolute -bottom-1 -right-1 h-20 w-20 rounded-full bg-gradient-to-br from-cyan-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════
            KATEGORI PRODUK
        ══════════════════════════════════════════════════════ */}
        <motion.section
          className="mt-16 rounded-2xl bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.06)] ring-1 ring-gray-100 lg:mt-20 lg:p-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wider text-primary">Koleksi Kami</p>
              <h2 className="text-2xl font-black uppercase text-black">Kategori Produk</h2>
            </div>
            <Link
              className="group flex items-center gap-2 text-base font-bold text-gray-500 transition-colors hover:text-primary-dark"
              href="/produk"
            >
              Lihat Semua Katalog
              <Icon className="h-5 w-5 transition-transform group-hover:translate-x-1" name="arrowRight" />
            </Link>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {categoryProducts.map(({ label, product }) => (
              <motion.div key={product.slug} variants={staggerItem}>
                <Link
                  className="group relative block overflow-hidden rounded-xl bg-white p-4 text-center shadow-[0_4px_14px_rgba(0,0,0,0.06)] ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(8,145,178,0.15)] hover:ring-cyan-200"
                  href={`/produk/${product.slug}`}
                >
                  <div className="relative aspect-square">
                    <Image
                      alt={product.imageAlt}
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                      fill
                      sizes="(min-width: 1280px) 16vw, 50vw"
                      src={product.image}
                    />
                  </div>
                  <h3 className="mt-3 text-lg font-black text-black transition-colors group-hover:text-primary-dark">{label}</h3>
                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════
            CARA KERJA (WORK STEPS)
        ══════════════════════════════════════════════════════ */}
        <motion.section
          className="mt-16 lg:mt-20"
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
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {workSteps.map((ws, index) => (
              <motion.div
                key={ws.step}
                variants={staggerItem}
                className="group relative rounded-2xl bg-gradient-to-b from-white to-gray-50/50 p-7 text-center ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(8,145,178,0.12)] hover:ring-cyan-200"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-sm font-black text-white shadow-md shadow-cyan-500/30">
                    {ws.step}
                  </span>
                </div>
                {/* Connector line (not on last) */}
                {index < workSteps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-[2px] w-6 bg-gradient-to-r from-cyan-300 to-transparent lg:block" />
                )}
                <div className="mt-4 mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-lightest to-cyan-50 text-primary-dark transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-200/40">
                    <Icon className="h-8 w-8" name={ws.icon} />
                  </div>
                </div>
                <h3 className="text-lg font-black text-black mb-2">{ws.title}</h3>
                <p className="text-sm font-semibold leading-6 text-gray-500">{ws.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════
            TRACKING CTA
        ══════════════════════════════════════════════════════ */}
        <motion.section
          className="relative mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-dark via-primary to-accent p-8 text-center shadow-[0_8px_32px_rgba(8,145,178,0.25)] lg:mt-20 lg:p-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          {/* Decorative elements */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-primary-lightest/15 blur-3xl" />
            <div className="absolute right-1/4 top-1/3 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Icon className="h-8 w-8 text-white" name="package" />
            </div>
            <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">
              Sudah Punya Pesanan?
            </h2>
            <p className="mt-6 text-lg font-semibold leading-8 text-white/85 lg:text-xl">
              Jangan biarkan rasa penasaran mengganggumu! Pantau setiap tahap produksi pesananmu secara real-time, mulai dari verifikasi bahan hingga siap dikirim.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-white px-10 text-lg font-black uppercase text-primary-dark shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95"
                href="/tracking-order"
              >
                Cek Status Pesanan
                <Icon className="h-5 w-5 transition-transform group-hover:translate-x-1" name="arrowRight" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════
            TENTANG KAMI
        ══════════════════════════════════════════════════════ */}
        <section className="mt-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-primary">Tentang Kami</p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Lebih dari Sekadar Konveksi
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-gray-600">
              Kami adalah partner terpercaya untuk kebutuhan apparel custom Anda.
              Kreativitas, kualitas, dan ketepatan waktu adalah komitmen kami.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-primary-lightest/40 p-4">
                <p className="text-2xl font-black text-primary-dark">100+</p>
                <p className="text-sm font-bold text-gray-600">Project Selesai</p>
              </div>
              <div className="rounded-xl bg-primary-lightest/40 p-4">
                <p className="text-2xl font-black text-primary-dark">50+</p>
                <p className="text-sm font-bold text-gray-600">Klien Puas</p>
              </div>
            </div>
            <Link
              className="group mt-8 inline-flex h-14 items-center gap-3 rounded-xl bg-gradient-to-r from-primary-dark to-primary px-9 text-base font-black uppercase text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
              href="/tentang-kami"
            >
              Selengkapnya
              <Icon className="h-5 w-5 transition-transform group-hover:translate-x-1" name="arrowRight" />
            </Link>
          </motion.div>
          <motion.div
            className="grid gap-4"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="relative aspect-[810/365] overflow-hidden rounded-2xl">
              <Image
                alt="Toko Konveksi Bali"
                className="object-cover transition-transform duration-700 hover:scale-105"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="/assets/about-storefront.png"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.slice(4, 8).map((image) => (
                <div className="group relative aspect-[4/3] overflow-hidden rounded-xl" key={image.src}>
                  <Image
                    alt={image.alt}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                    sizes="25vw"
                    src={image.src}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════
            PORTFOLIO
        ══════════════════════════════════════════════════════ */}
        <motion.section
          className="mt-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <div className="mb-10 text-center">
            <span className="mb-3 inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-5 py-1.5 text-xs font-black uppercase tracking-wider text-primary-dark ring-1 ring-cyan-500/20">
              Portfolio Kami
            </span>
            <h2 className="mt-4 text-3xl font-black text-black sm:text-4xl">
              Karya <span className="text-gradient-cyan">Terbaik</span> Kami
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-semibold text-gray-500">
              Hasil produksi terbaru dari berbagai klien yang sudah mempercayakan kebutuhan apparel mereka kepada kami.
            </p>
          </div>
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {portfolioItems.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(8,145,178,0.12)] hover:border-cyan-200"
              >
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    alt={item.imageAlt}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src={item.image}
                  />
                </div>
                {/* Card Content */}
                <div className="p-5">
                  <h3 className="text-lg font-black text-black transition-colors group-hover:text-primary-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Button */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/produk"
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 text-sm font-black uppercase text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30"
            >
              Lihat Semua Portfolio
              <Icon className="h-4 w-4 transition-transform group-hover:translate-x-1" name="arrowRight" />
            </Link>
          </div>
        </motion.section>

        {/* ══════════════════════════════════════════════════════
            TESTIMONI
        ══════════════════════════════════════════════════════ */}
        <motion.section
          className="mt-20 relative"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-[#1d2939] sm:text-4xl">Apa Kata <span className="text-[#2081E2]">Klien Kami</span></h2>
            <div className="mx-auto mt-2 h-1 w-12 rounded bg-[#2081E2]"></div>
            <p className="mx-auto mt-4 max-w-2xl text-base font-semibold text-gray-500">
              Kepercayaan dan kepuasan klien adalah prioritas utama kami dalam setiap proyek
            </p>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Navigation Arrows */}
            <button 
              onClick={scrollLeft} 
              disabled={!canScrollLeft}
              className={`absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-all sm:-left-5 ${canScrollLeft ? 'bg-[#1E1E1E] text-white hover:scale-110' : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </button>
            <button 
              onClick={scrollRight} 
              disabled={!canScrollRight}
              className={`absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-all sm:-right-5 ${canScrollRight ? 'bg-[#1E1E1E] text-white hover:scale-110' : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </button>

            <motion.div
              ref={sliderRef}
              onScroll={checkScroll}
              className="flex gap-4 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory hide-scrollbar"
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
                    t={t} 
                    index={index} 
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

      {/* Google Maps Style Modal */}
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
              {/* Close Button */}
              <button 
                onClick={() => setSelectedReview(null)} 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-1.5 transition-colors z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3 items-center">
                    {selectedReview.image ? (
                      <img src={selectedReview.image} alt={selectedReview.name} className="h-12 w-12 rounded-full object-cover border border-gray-200" />
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
                  {/* Google Logo */}
                  <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-10 mt-1">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                
                {/* Stars */}
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

                {/* Text */}
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

          {/* Write Review Button */}
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

        {/* ══════════════════════════════════════════════════════
            CLIENT & PARTNER
        ══════════════════════════════════════════════════════ */}
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

          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-100% - 1.5rem)); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}} />

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

        {/* ══════════════════════════════════════════════════════
            CTA SECTION
        ══════════════════════════════════════════════════════ */}
        <CTASection className="mt-20" />
      </Container>
    </>
  );
}
