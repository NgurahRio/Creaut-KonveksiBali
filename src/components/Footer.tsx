import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { Icon } from "./Icons";

const productLinks = [
  { label: "Kaos", href: "/produk" },
  { label: "Jersey", href: "/produk" },
  { label: "Jaket Sporty", href: "/produk" },
  { label: "Jaket Formal", href: "/produk" },
  { label: "PDH", href: "/produk" },
  { label: "Workshop Wear", href: "/produk" },
];

const infoLinks = [
  { label: "Cara Order", href: "/produk" },
  { label: "Size Chart", href: "/produk" },
  { label: "Pengiriman", href: "/produk" },
  { label: "Ketentuan", href: "/produk" },
  { label: "FAQ", href: "/produk" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com/konveksibali",
    icon: "instagram" as const,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6281345677890",
    icon: "whatsapp" as const,
  },
  {
    name: "Email",
    href: "mailto:konveksibali@gmail.com",
    icon: "mail" as const,
  },
];

export default function Footer() {
  return (
    <>
      {/* Wave Separator */}
      <div className="relative mt-20 lg:mt-28">
        <svg
          className="block w-full"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ height: "60px" }}
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V100H0V40Z"
            fill="#0c1929"
          />
          <path
            d="M0 60C200 30 400 80 600 50C800 20 1000 70 1200 45C1300 35 1380 55 1440 50V100H0V60Z"
            fill="#0f2035"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <footer className="relative overflow-hidden bg-[#0c1929] pb-0 text-white">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-cyan-600/5 blur-3xl" />
          <div className="absolute right-1/4 top-1/2 h-48 w-48 rounded-full bg-teal-500/3 blur-2xl" />
        </div>

        <Container className="relative z-10">
          {/* CTA Banner */}
          <div className="mb-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-600/20 via-cyan-500/10 to-teal-600/20 p-8 backdrop-blur-sm lg:p-12">
            <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
              <div>
                <h3 className="text-2xl font-bold tracking-tight lg:text-3xl">
                  Siap Buat Apparel Custom?
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-300 lg:text-base">
                  Konsultasikan desain Anda bersama tim kami. Gratis estimasi
                  harga dan mockup desain!
                </p>
              </div>
              <a
                href="https://wa.me/6281345677890"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <Icon
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  name="whatsapp"
                />
                Hubungi Kami
                <Icon
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  name="arrowRight"
                />
              </a>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.2fr_1.5fr]">
            {/* Brand Column */}
            <div className="flex flex-col gap-6">
              <img
                src="/assets/logo.png"
                alt="Konveksi Bali Logo"
                width={180}
                height={180}
                className="brightness-110"
              />
              <p className="max-w-xs text-sm leading-relaxed text-gray-400">
                Konveksi profesional di Bali menyediakan kebutuhan apparel
                custom Anda. Kreativitas, kualitas, dan ketepatan waktu adalah
                komitmen kami.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <Icon
                      className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110"
                      name={social.icon}
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Produk
              </h2>
              <ul className="flex flex-col gap-3">
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                      href={item.href}
                    >
                      <span className="inline-block h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-3" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info Column */}
            <div>
              <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Informasi
              </h2>
              <ul className="flex flex-col gap-3">
                {infoLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                      href={item.href}
                    >
                      <span className="inline-block h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-3" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Kontak
              </h2>
              <ul className="flex flex-col gap-5">
                <li className="group flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                    <Icon className="h-4 w-4" name="mapPin" />
                  </div>
                  <span className="text-sm leading-relaxed text-gray-400 transition-colors duration-200 group-hover:text-gray-200">
                    Jl. Mahendradatta No. 123
                    <br />
                    Denpasar, Bali
                  </span>
                </li>
                <li className="group flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                    <Icon className="h-4 w-4" name="phone" />
                  </div>
                  <span className="text-sm text-gray-400 transition-colors duration-200 group-hover:text-gray-200">
                    +62 813 4567 7890
                  </span>
                </li>
                <li className="group flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                    <Icon className="h-4 w-4" name="mail" />
                  </div>
                  <span className="text-sm text-gray-400 transition-colors duration-200 group-hover:text-gray-200">
                    konveksibali@gmail.com
                  </span>
                </li>
                <li className="group flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                    <Icon className="h-4 w-4" name="calendar" />
                  </div>
                  <span className="text-sm leading-relaxed text-gray-400 transition-colors duration-200 group-hover:text-gray-200">
                    Senin - Sabtu
                    <br />
                    09.00 - 17.00 WITA
                  </span>
                </li>
              </ul>
            </div>

            {/* Map Column */}
            <div className="flex w-full flex-col">
              <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Lokasi Kami
              </h2>
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31555.0768408631!2d115.22809073476563!3d-8.654922499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2419d065b4ca9%3A0xb64a7f5077eb3476!2sAdvish%20Konveksi!5e0!3m2!1sid!2sid!4v1781751214859!5m2!1sid!2sid"
                  width="100%"
                  height="220"
                  loading="lazy"
                  className="rounded-xl"
                  title="Lokasi Konveksi Bali"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 border-t border-white/10 pt-8 lg:mt-20">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-sm text-gray-500">
                © 2026 Konveksi Bali. All rights reserved.
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-500">
                Designed with{" "}
                <Icon className="h-4 w-4 text-red-500" name="heart" /> in Bali
              </p>
            </div>
          </div>

          {/* Gradient accent line at the very bottom */}
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <div className="h-8" />
        </Container>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281345677890"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:drop-shadow-lg lg:bottom-10 lg:right-10"
        aria-label="Chat WhatsApp"
      >
        <Image
          src="/assets/whatsapp.png"
          alt="Chat WhatsApp"
          width={60}
          height={60}
          className="h-14 w-14 object-contain drop-shadow-md sm:h-16 sm:w-16"
        />
      </a>
    </>
  );
}
