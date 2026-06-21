import { Icon } from "./Icons";

interface CTASectionProps {
  className?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export default function CTASection({
  className = "",
  title = "Siap Buat Apparel Custom?",
  subtitle = "Konsultasikan desain Anda bersama tim kami. Gratis estimasi harga dan mockup desain!",
  primaryLabel = "Hubungi Kami",
  secondaryLabel = "Follow Instagram",
}: CTASectionProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl bg-[#0c1929] p-8 lg:p-12 ${className}`}
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-cyan-600/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-48 w-48 rounded-full bg-teal-500/5 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white lg:text-3xl">
            {title}
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-gray-300 lg:text-base">
            {subtitle}
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
          <a
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-8 py-4 font-semibold text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            href="https://wa.me/6285738814898"
            rel="noreferrer"
            target="_blank"
          >
            <Icon
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
              name="whatsapp"
            />
            {primaryLabel}
            <Icon
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              name="arrowRight"
            />
          </a>
          {secondaryLabel ? (
            <a
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-cyan-600 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              href="https://www.instagram.com/konveksi.advish"
              rel="noreferrer"
              target="_blank"
            >
              <Icon
                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                name="instagram"
              />
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
