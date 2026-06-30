import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  href?: string;
  className?: string;
  isScrolled?: boolean; // 1. Tambahkan properti ini di interface
}

export default function Logo({ href = "/", className = "", isScrolled = false }: LogoProps) {
  return (
    <Link
      aria-label="Advish Konveksi"
      className={`flex items-center transition-opacity duration-300 hover:opacity-80 ${className}`}
      href={href}
    >
        <Image
          src="/assets/logo.png"
          alt="Advish Konveksi Logo"
          width={144}
          height={48}
          className={`w-24 h-auto object-contain sm:w-28 lg:w-36 transition-all duration-300 ${
            isScrolled ? "brightness-0" : ""
          }`}
        />
    </Link>
  );
}