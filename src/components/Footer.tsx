import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { Icon } from "./Icons";
import Logo from "./Logo";

const productLinks = ["Kaos", "Jersey", "Jaket Sporty", "Jaket Formal", "PDH", "Workshop Wear"];
const infoLinks = ["Cara Order", "Size Chart", "Pengiriman", "Ketentuan", "FAQ"];

export default function Footer() {
  return (
    <>
<<<<<<< HEAD
      <footer className="mt-20  bg-linear-to-r from-cyan-500 from-10% via-cyan-600 via-30% to-cyan-700 to-90% py-0 text-white lg:mt-28 lg:py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.7fr_0.8fr_0.8fr_1.2fr_1.5fr]">
            <div>
              <img src="/assets/logo.png" alt="" width={200} height={200} />
              {/* <p className="max-w-md text-sm font-medium leading-10">
                Konveksi profesional di Bali menyediakan kebutuhan apparel custom Anda.
                Kreativitas, kualitas, dan ketepatan waktu adalah komitmen kami.
              </p> */}
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-black text-white">PRODUK</h2>
              <ul className="grid gap-4 text-sm font-medium">
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
              <h2 className="mb-6 text-2xl font-white text-white"><i>RINCIAN</i></h2>
              <ul className="grid gap-4 text-sm font-medium">
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
              <h2 className="mb-6 text-2xl font-white text-white"><i>KONTAK</i></h2>
              <ul className="grid gap-4 text-sm font-medium">
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

            <div className="flex justify-center flex-col w-full ">
              <h2 className="mb-6 text-2xl font-white text-white"><i>LOKASI KAMI</i></h2>
              <div className="relative mb-4 overflow-hidden rounded-lg bg-white">
                {/* <Image
=======
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
>>>>>>> 43d64230efb2783a109a75ac4627895e6501f006
                alt="Peta lokasi Konveksi Bali"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                src="/assets/map.png"
<<<<<<< HEAD
              /> */}

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31555.0768408631!2d115.22809073476563!3d-8.654922499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2419d065b4ca9%3A0xb64a7f5077eb3476!2sAdvish%20Konveksi!5e0!3m2!1sid!2sid!4v1781751214859!5m2!1sid!2sid" width="100%" height="250" loading="lazy" ></iframe>
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
=======
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
>>>>>>> 43d64230efb2783a109a75ac4627895e6501f006

      {/* Tombol WhatsApp Mengambang (Floating) */}
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
