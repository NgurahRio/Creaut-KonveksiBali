"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/site";
import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <Container>
        <nav className="flex h-20 items-center justify-between gap-6 lg:h-32">
          <Logo className="min-w-0" />

          <div className="hidden items-center gap-14 text-lg font-semibold lg:flex">
            {navLinks.map((link) => {
              const active = isActiveRoute(pathname, link.href);

              return (
                <Link
                  className={`border-b-2 pb-2 transition ${
                    active
                      ? "border-[#a17140] text-black"
                      : "border-transparent text-black hover:border-[#a17140] hover:text-[#a17140]"
                  }`}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <LanguageSwitcher />
        </nav>

        <div className="flex gap-2 overflow-x-auto pb-4 lg:hidden">
          {navLinks.map((link) => {
            const active = isActiveRoute(pathname, link.href);

            return (
              <Link
                className={`flex h-11 shrink-0 items-center rounded-lg px-4 text-sm font-bold ${
                  active ? "bg-[#a17140] text-white" : "bg-[#f3eee8] text-black"
                }`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </Container>
    </header>
  );
}
