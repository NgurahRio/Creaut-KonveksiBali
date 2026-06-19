import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
  isScrolled?: boolean; // 1. Tambahkan properti ini di interface
}

export default function Logo({ href = "/", className = "", isScrolled = false }: LogoProps) {
  return (
    <Link
      aria-label="Konveksi Bali"
      // 2. Ganti 'text-black' dengan kondisi dinamis berdasarkan isScrolled
      className={`flex items-center gap-3 transition-colors duration-300 ${
        isScrolled ? "text-black" : "text-white"
      } ${className}`}
      href={href}
    >
      <span className="text-4xl font-black leading-none sm:text-3xl lg:text-5xl">K</span>
      <span className="text-md font-black leading-[0.9] sm:text-sm lg:text-lg">
        KONVEKSI
        <br />
        BALI
      </span>
    </Link>
  );
}