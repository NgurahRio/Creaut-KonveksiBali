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
      className={`rounded- bg-linear-to-r from-cyan-500 from-10% via-cyan-600 via-30% to-cyan-700 to-90% px-6 py-9 text-white shadow-[0_8px_22px_rgba(0,0,0,0.12)] sm:px-12 lg:px-20 ${className}`}
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-black leading-tight sm:text-3xl md:text-5xl">{title}</h2>
          <p className="mt-3 text-2xl font-black leading-tight sm:text-3xl md:text-5xl">{subtitle}</p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            className="flex h-16 items-center justify-center gap-3 rounded-lg bg-black px-8 text-lg font-black uppercase text-white transition hover:bg-[#1f1f1f]"
            href="https://wa.me/6281345677890"
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="h-7 w-7" name="whatsapp" />
            {primaryLabel}
          </a>
          {secondaryLabel ? (
            <a
              className="flex h-16 items-center justify-center gap-3 rounded-lg bg-white px-8 text-lg font-black uppercase text-[#a17140] transition hover:bg-[#f5efe8]"
              href="https://instagram.com"
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
