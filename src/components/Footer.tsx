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
    href: "https://www.instagram.com/konveksi.advish",
    icon: "instagram" as const,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6285738814898",
    icon: "whatsapp" as const,
  },
  {
    name: "Email",
    href: "mailto:advishkonveksi@gmail.com",
    icon: "mail" as const,
  },
];

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="relative mt-12 overflow-hidden bg-[#0c1929] pb-0 text-white lg:mt-16">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
          <div className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-cyan-600/5 blur-3xl" />
          <div className="absolute right-1/4 top-1/2 h-48 w-48 rounded-full bg-teal-500/3 blur-2xl" />
        </div>

        <Container className="relative z-10 pt-10 lg:pt-14">
          {/* The CTA Banner has been moved to page.tsx */}

          {/* Footer Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.2fr_1.5fr] lg:gap-10">
            {/* Brand Column */}
            <div className="flex flex-col gap-4">
              <img
                src="/assets/logo.png"
                alt="Advish Konveksi Logo"
                width={180}
                height={180}
                className="brightness-110"
              />
              <p className="max-w-xs text-sm leading-relaxed text-gray-400">
                Advish Konveksi hadir untuk bantu menciptakan apparel dan
                merchandise custom berkualitas. Masalah baju? Advish siap
                bantu!
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
                    Jl. Sedap Malam, Gg. Alamanda, No.23
                    <br />
                    Denpasar Timur, Bali
                  </span>
                </li>
                <li className="group flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                    <Icon className="h-4 w-4" name="phone" />
                  </div>
                  <span className="text-sm text-gray-400 transition-colors duration-200 group-hover:text-gray-200">
                    +62 857 3881 4898
                  </span>
                </li>
                <li className="group flex items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                    <Icon className="h-4 w-4" name="mail" />
                  </div>
                  <span className="text-sm text-gray-400 transition-colors duration-200 group-hover:text-gray-200">
                    advishkonveksi@gmail.com
                  </span>
                </li>
                <li className="group flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-cyan-400 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10">
                    <Icon className="h-4 w-4" name="calendar" />
                  </div>
                  <span className="text-sm leading-relaxed text-gray-400 transition-colors duration-200 group-hover:text-gray-200">
                    Senin - Sabtu
                    <br />
                    10.00 - 18.00 WITA
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
                  title="Lokasi Advish Konveksi"
                />
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 border-t border-white/10 pt-6 lg:mt-12">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-sm text-gray-500">
                © 2025 Advish Konveksi. All rights reserved.
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-500">
                Designed with{" "}
                <Icon className="h-4 w-4 text-red-500" name="heart" /> Creaut.Bali
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
        href="https://wa.me/6285738814898"
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
