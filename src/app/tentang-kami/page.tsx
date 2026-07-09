"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { Icon } from "@/components/common/Icons";
import StatsStrip from "@/components/common/StatsStrip";
import { galleryImages, values, processSteps, teamPhilosophy, missionItems, WHATSAPP_URL } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};


export default function TentangKamiPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-primary-dark pb-20 pt-28 text-white lg:pb-32 lg:pt-36">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-lightest/5 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-primary-dark/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <Container className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              className="mb-5 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-sm font-bold uppercase tracking-widest backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Tentang Advish Konveksi
            </motion.p>

            <motion.h1
              className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Masalah Baju?{" "}
              <span className="relative">
                <span className="relative z-10">Advish</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-white/20 sm:-bottom-2 sm:h-4"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>{" "}
              Siap Bantu
            </motion.h1>

            <motion.p
              className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/80 sm:text-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Advish Konveksi hadir untuk bantu menciptakan apparel dan merchandise custom yang lebih dari sekadar produk. Kami mengubah ide, desain, dan identitas brand menjadi karya yang bisa dipakai, dibagikan, dan dibanggakan.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <a
                className="flex h-14 items-center gap-3 rounded-xl bg-white px-8 text-base font-black uppercase text-primary-dark transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
                href={WHATSAPP_URL}
                rel="noreferrer"
                target="_blank"
              >
                <Icon className="h-6 w-6" name="whatsapp" />
                Mulai Konsultasi
              </a>
              <a
                className="flex h-14 items-center gap-3 rounded-xl border-2 border-white/30 bg-white/10 px-8 text-base font-black uppercase text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                href="#our-story"
              >
                Cerita Kami
                <Icon className="h-5 w-5" name="arrowRight" />
              </a>
            </motion.div>
          </div>
        </Container>

        {/* Bottom wave shape */}
        <div className="absolute -bottom-1 left-0 w-full">
          <svg
            className="h-16 w-full sm:h-24"
            fill="white"
            preserveAspectRatio="none"
            viewBox="0 0 1440 100"
          >
            <path d="M0 30 C 360 90, 720 0, 1080 60 S 1440 30, 1440 30 L 1440 100 L 0 100 Z" />
          </svg>
        </div>
      </section>

      {/* ── Stats Section ── */}
      <Container className="-mt-10 relative z-10 sm:-mt-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <StatsStrip />
        </motion.div>
      </Container>

      {/* ── Our Story ── */}
      <Container className="mt-24 lg:mt-32">
        <section id="our-story" className="scroll-mt-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="mb-4 text-sm font-black uppercase tracking-widest text-primary">
                Cerita Kami
              </p>
              <h2 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Dari Passion Menjadi{" "}
                <span className="text-gradient-cyan">Solusi Apparel</span>
              </h2>
              <div className="mt-8 space-y-5 text-base font-medium leading-7 text-gray-600">
                <p>
                  Berdiri sejak 2022 di Denpasar, Bali, Advish Konveksi lahir dari semangat untuk menghadirkan solusi apparel custom yang berkualitas, tepat waktu, dan inovatif. Kami percaya bahwa setiap detail pada pakaian punya arti, dan setiap produk punya cerita.
                </p>
                <p>
                  Dengan tim yang berpengalaman dan fasilitas produksi modern, kami telah melayani berbagai kebutuhan mulai dari seragam komunitas, merchandise event, hingga apparel brand — semua dengan standar kualitas yang konsisten dan pelayanan profesional.
                </p>
                <p>
                  Advish Konveksi bukan hanya membuat baju — kami menjadi partner Anda dalam mengubah ide dan identitas brand menjadi karya yang bisa <strong className="text-primary-dark">dipakai, dibagikan, dan dibanggakan</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(8,145,178,0.15)]">
                <Image
                  alt="Workshop Advish Konveksi"
                  className="object-cover"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  src="/assets/toko.png"
                />
              </div>

              {/* Decorative dots */}
              <div className="absolute -right-4 -top-4 hidden h-24 w-24 opacity-30 lg:block">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #0891b2 2px, transparent 2px)",
                    backgroundSize: "12px 12px",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </Container>

      {/* ── Visi & Misi ── */}
      <section className="mt-24 bg-gray-50 border-y border-gray-100 py-20 lg:mt-32 lg:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Visi */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="mb-4 text-sm font-black uppercase tracking-widest text-primary">
                Visi
              </p>
              <h2 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
                Tujuan Besar Kami
              </h2>
              <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-lightest">
                  <Icon className="h-6 w-6 text-primary-dark" name="award" />
                </div>
                <p className="text-base font-semibold leading-8 text-gray-600">
                  Menjadi perusahaan konveksi terpercaya yang menghadirkan produk berkualitas, tepat dan inovatif untuk memenuhi kebutuhan sandang pelanggan di Indonesia maupun pasar internasional.
                </p>
              </div>
            </motion.div>

            {/* Misi */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="mb-4 text-sm font-black uppercase tracking-widest text-primary">
                Misi
              </p>
              <h2 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
                Langkah Nyata Kami
              </h2>
              <div className="mt-8 space-y-4">
                {missionItems.map((item, index) => (
                  <motion.div
                    className="group flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-light/40 hover:shadow-md hover:shadow-primary-light/20"
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    custom={index}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-lightest text-sm font-black text-primary-dark transition-colors duration-300 group-hover:bg-primary-dark group-hover:text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold leading-6 text-gray-600">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>



      {/* ── How We Work / Process ── */}
      <section id="cara-order" className="scroll-mt-24 mt-24 bg-gray-50 border-y border-gray-100 py-20 lg:mt-32 lg:py-28 overflow-hidden">
        <Container>
          <motion.div
            className="mb-16 text-left lg:text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-4 text-sm font-black uppercase tracking-widest text-primary">
              Cara Pesan
            </p>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
              Proses Mudah dalam 7 Langkah
            </h2>
            <p className="mt-4 max-w-xl text-base font-medium text-gray-600 lg:mx-auto">
              Proses pemesanan kami dirancang sesederhana mungkin agar Anda mendapatkan pengalaman terbaik dari awal hingga produk sampai di tangan Anda.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                className="group relative flex w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] xl:w-[calc(25%-24px)] flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:border-primary-light hover:shadow-xl hover:shadow-primary-light/20"
                key={item.step}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
              >
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-lightest text-primary-dark transition-all duration-300 group-hover:bg-primary-dark group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(14,116,144,0.3)]">
                    <Icon className="h-7 w-7" name={item.icon as string} />
                  </div>
                  <h3 className="mb-3 text-lg font-black text-gray-900 leading-snug">{item.title}</h3>
                  <p className="text-sm font-medium leading-relaxed text-gray-600 flex-1">
                    {item.description}
                  </p>
                </div>
                
                {/* Connecting Line (Only visible on desktop, except for the last item of a row) */}
                <div className="absolute top-1/2 -right-4 hidden w-8 -translate-y-1/2 items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 xl:group-hover:flex">
                  <div className="h-1 w-full bg-primary-100 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Values ── */}
      <section id="keunggulan" className="scroll-mt-32 mt-24 lg:mt-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <motion.div
              className="lg:sticky lg:top-32 lg:h-fit"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <p className="mb-4 text-sm font-black uppercase tracking-widest text-primary">
                Nilai & Prinsip
              </p>
              <h2 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
                Mengapa <span className="text-gradient-cyan">Klien Kami</span> Mempercayakan pada Advish
              </h2>
              <p className="mt-5 text-base font-medium leading-7 text-gray-600">
                Kepercayaan klien adalah fondasi bisnis kami. Setiap nilai yang kami pegang tercermin dalam setiap produk yang kami hasilkan.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((value, index) => (
                <motion.article
                  className="group rounded-2xl bg-white p-7 shadow-md border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:border-primary-light hover:shadow-lg hover:shadow-primary-light/20"
                  key={value.title}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={index}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-lightest text-primary-dark transition-colors duration-300 group-hover:bg-primary-light">
                    <Icon className="h-6 w-6" name={value.icon} />
                  </div>
                  <h3 className="text-base font-black text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-gray-600">
                    {value.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Team Philosophy ── */}
      <section className="mt-24 bg-gradient-to-br from-gray-950 via-gray-900 to-primary-dark py-20 text-white lg:mt-32 lg:py-28 relative">
        {/* Subtle pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <Container className="relative z-10">
          <motion.div
            className="mb-16 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-4 text-sm font-black uppercase tracking-widest text-primary-light">
              Filosofi Tim
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              Lebih dari Sekadar Produksi
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-medium text-gray-400">
              Di balik setiap jahitan, ada tim yang peduli dan berkomitmen untuk memberikan yang terbaik.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {teamPhilosophy.map((item, index) => (
              <motion.div
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary-light/30 hover:bg-white/10"
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-dark/50 text-primary-light transition-all duration-300 group-hover:bg-primary-dark group-hover:shadow-[0_0_20px_rgba(14,116,144,0.4)]">
                  <Icon className="h-7 w-7" name={item.icon} />
                </div>
                <h3 className="mb-3 text-xl font-black">{item.title}</h3>
                <p className="text-sm font-medium leading-6 text-gray-400 group-hover:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            className="mx-auto mt-16 max-w-2xl text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <blockquote className="relative">
              <span className="absolute -left-6 -top-4 text-6xl font-black text-primary-dark/40 sm:-left-10">
                &ldquo;
              </span>
              <p className="text-lg font-semibold italic leading-relaxed text-gray-300 sm:text-xl">
                Karena setiap detail punya arti, dan setiap produk punya cerita. Kami hadir untuk memastikan cerita brand Anda tersampaikan lewat apparel berkualitas.
              </p>
              <footer className="mt-6">
                <p className="font-black text-primary-light">Tim Advish Konveksi</p>
              </footer>
            </blockquote>
          </motion.div>
        </Container>
      </section>

      {/* ── Gallery ── */}
      <Container className="mt-24 lg:mt-32">
        <section>
          <motion.div
            className="mb-12 text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-4 text-sm font-black uppercase tracking-widest text-primary">
              Galeri Workshop
            </p>
            <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
              Intip Suasana Workshop Kami
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryImages.map((image, index) => (
              <motion.div
                className="group relative aspect-square overflow-hidden rounded-2xl"
                key={image.src}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={index % 4}
              >
                <Image
                  alt={image.alt}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  src={image.src}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary-dark/70 via-primary-dark/20 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-sm font-bold text-white">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </Container>


    </>
  );
}
