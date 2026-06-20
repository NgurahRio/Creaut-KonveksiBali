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
  title = "Punya Project Seru?",
  subtitle = "Yuk, ngobrol bareng tim kami!",
  primaryLabel = "Chat WhatsApp",
  secondaryLabel = "Follow Instagram",
}: CTASectionProps) {
  return (
    <section
      className={`overflow-hidden relative rounded-2xl bg-gradient-to-r from-primary-dark via-accent to-primary px-6 py-9 text-white shadow-[0_8px_22px_rgba(8,145,178,0.18)] sm:px-12 lg:px-20 ${className}`}
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-primary-lightest/10 blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-black leading-tight sm:text-3xl md:text-5xl">{title}</h2>
          <p className="mt-3 text-2xl font-black leading-tight sm:text-3xl md:text-5xl">{subtitle}</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            className="flex h-16 items-center justify-center gap-3 rounded-xl bg-black/80 px-8 text-lg font-black uppercase text-white transition-all duration-300 hover:bg-black hover:-translate-y-0.5 hover:shadow-lg"
            href="https://wa.me/6285738814898"
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="h-7 w-7" name="whatsapp" />
            {primaryLabel}
          </a>
          {secondaryLabel ? (
            <a
              className="flex h-16 items-center justify-center gap-3 rounded-xl bg-white px-8 text-lg font-black uppercase text-primary-dark transition-all duration-300 hover:bg-primary-lightest hover:-translate-y-0.5 hover:shadow-lg"
              href="https://www.instagram.com/konveksi.advish"
              rel="noreferrer"
              target="_blank"
            >
              <Icon className="h-7 w-7" name="instagram" />
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
