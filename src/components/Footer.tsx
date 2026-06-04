import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { Icon } from "./Icons";
import Logo from "./Logo";

const productLinks = ["Kaos", "Jersey", "Jaket Sporty", "Jaket Formal", "PDH", "Workshop Wear"];
const infoLinks = ["Cara Order", "Size Chart", "Pengiriman", "Ketentuan", "FAQ"];

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#f1f2f3] py-12 text-[#4d4d4d] lg:mt-28 lg:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.7fr_0.8fr_0.8fr_1.2fr_1.5fr]">
          <div>
            <Logo className="mb-8" />
            <p className="max-w-md text-lg font-medium leading-10">
              Konveksi profesional di Bali menyediakan kebutuhan apparel custom Anda.
              Kreativitas, kualitas, dan ketepatan waktu adalah komitmen kami.
            </p>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-black text-black">PRODUK</h2>
            <ul className="grid gap-4 text-lg font-medium">
              {productLinks.map((item) => (
                <li key={item}>
                  <Link className="hover:text-[#a17140]" href="/produk">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-black text-black">PRODUK</h2>
            <ul className="grid gap-4 text-lg font-medium">
              {infoLinks.map((item) => (
                <li key={item}>
                  <Link className="hover:text-[#a17140]" href="/produk">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-black text-black">KONTAK</h2>
            <ul className="grid gap-4 text-lg font-medium">
              <li className="flex items-start gap-4">
                <Icon className="mt-1 h-7 w-7 shrink-0 text-[#a17140]" name="mapPin" />
                <span>
                  Jl. Mahendradatta No. 123
                  <br />
                  Denpasar, Bali
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Icon className="h-7 w-7 shrink-0 text-[#a17140]" name="phone" />
                <span>+62 813 4567 7890</span>
              </li>
              <li className="flex items-center gap-4">
                <Icon className="h-7 w-7 shrink-0 text-[#a17140]" name="mail" />
                <span>konveksibali@gmail.com</span>
              </li>
              <li className="flex items-start gap-4">
                <Icon className="mt-1 h-7 w-7 shrink-0 text-[#a17140]" name="calendar" />
                <span>
                  Senin - Sabtu
                  <br />
                  09.00 - 17.00 WITA
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-black text-black">LOKASI KAMI</h2>
            <div className="relative mb-4 aspect-[355/150] overflow-hidden rounded-lg bg-white">
              <Image
                alt="Peta lokasi Konveksi Bali"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                src="/assets/map.png"
              />
            </div>
            <a
              className="flex h-16 items-center justify-center rounded-lg border border-black bg-white px-6 text-lg font-bold text-black transition hover:bg-black hover:text-white"
              href="https://maps.google.com"
              rel="noreferrer"
              target="_blank"
            >
              Lihat di Google Maps
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 text-base font-bold sm:flex-row sm:items-center sm:justify-between lg:mt-24">
          <p>(C) 2026 Konveksi Bali, All rights reserved.</p>
          <p className="flex items-center gap-2">
            Designed with <Icon className="h-5 w-5 text-red-600" name="heart" /> in Bali
          </p>
        </div>
      </Container>
    </footer>
  );
}
