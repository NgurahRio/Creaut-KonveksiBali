import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

export default function Logo({ href = "/", className = "" }: LogoProps) {
  return (
    <Link
      aria-label="Konveksi Bali"
      className={`flex items-center gap-3 text-black ${className}`}
      href={href}
    >
      <span className="text-5xl font-black leading-none sm:text-6xl lg:text-7xl">K</span>
      <span className="text-lg font-black leading-[0.9] sm:text-2xl lg:text-[32px]">
        KONVEKSI
        <br />
        BALI
      </span>
    </Link>
  );
}
