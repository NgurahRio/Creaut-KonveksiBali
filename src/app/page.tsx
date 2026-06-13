import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { Icon } from "@/components/Icons";
import {
  clientLogos,
  galleryImages,
  products,
} from "@/data/site";

export default function Home() {
  const categoryProducts = [
    { label: "Kaos", product: products[0] },
    { label: "Jersey", product: products[1] },
    { label: "Jaket Sporty", product: products[2] },
    { label: "Jaket Formal", product: products[3] },
    { label: "PDH", product: products[4] },
    { label: "Workshop Wear", product: products[6] },
  ];

  return (
    <>
      <Container className="pt-6 lg:pt-10">
        <section className="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-6 text-base font-black uppercase text-[#6f6f6f]">
              Konveksi Apparel Custom
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight text-black sm:text-7xl lg:text-8xl">
              Wujudkan <span className="text-[#a17140]">Ide</span>, Kita Produksi!
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-9 text-[#4f4f4f] sm:text-2xl">
              Kami membantu brand, komunitas dan bisnis mewujudkan apparel berkualitas
              dengan desain bebas dan hasil maksimal.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                className="flex h-16 items-center justify-center gap-3 rounded-lg bg-[#a17140] px-8 text-base font-black uppercase text-white transition hover:bg-[#875d33]"
                href="https://wa.me/6281345677890"
                rel="noreferrer"
                target="_blank"
              >
                <Icon className="h-6 w-6" name="whatsapp" />
                Konsultasi Sekarang
              </a>
              <Link
                className="flex h-16 items-center justify-center rounded-lg border border-[#a17140] px-8 text-base font-black uppercase text-[#a17140] transition hover:bg-[#f4ede6]"
                href="/produk"
              >
                Lihat Katalog
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                ["briefcase", "8+", "Tahun Pengalaman"],
                ["shirt", "500+", "Project Selesai"],
                ["user", "200+", "Klien Puas"],
                ["clock", "99%", "On Time Pengiriman"],
              ].map(([icon, value, label]) => (
                <div className="flex items-start gap-3" key={label}>
                  <Icon className="mt-1 h-7 w-7 shrink-0 text-[#a17140]" name={icon} />
                  <div>
                    <p className="text-2xl font-black">{value}</p>
                    <p className="text-sm font-black leading-5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] lg:min-h-[720px]">
            <Image
              alt="Produk apparel custom Konveksi Bali"
              className="object-contain"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              src="/assets/hero-products.png"
            />
          </div>
        </section>

        <section className="mt-16 rounded-lg bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.08)] lg:mt-20 lg:p-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-black uppercase text-black">Kategori Produk</h2>
            <Link
              className="flex items-center gap-2 text-base font-bold text-[#4d4d4d] hover:text-[#a17140]"
              href="/produk"
            >
              Lihat Semua Katalog
              <Icon className="h-5 w-5" name="arrowRight" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {categoryProducts.map(({ label, product }) => (
              <Link
                className="group rounded-lg bg-white p-4 text-center shadow-[0_6px_18px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
                href={`/produk/${product.slug}`}
                key={product.slug}
              >
                <div className="relative aspect-square">
                  <Image
                    alt={product.imageAlt}
                    className="object-contain"
                    fill
                    sizes="(min-width: 1280px) 16vw, 50vw"
                    src={product.image}
                  />
                </div>
                <h3 className="mt-3 text-lg font-black text-black">{label}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-lg bg-[#dac8b6] p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.10)] lg:mt-20 lg:p-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-black uppercase text-[#a17140] sm:text-4xl">
              Sudah Punya Pesanan?
            </h2>
            <p className="mt-6 text-xl font-bold leading-9 text-black">
              Jangan biarkan rasa penasaran mengganggumu! Pantau setiap tahap produksi pesananmu secara real-time, mulai dari verifikasi bahan hingga siap dikirim.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                className="inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[#a17140] px-10 text-lg font-black uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#875d33] hover:shadow-lg active:scale-95"
                href="/tracking-order"
              >
                Cek Status Pesanan
                <Icon className="h-6 w-6" name="arrowRight" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-base font-black uppercase text-[#a17140]">Tentang Kami</p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Lebih dari Sekadar Konveksi
            </h2>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-9 text-[#333]">
              Kami adalah partner terpercaya untuk kebutuhan apparel custom Anda.
              Kreativitas, kualitas, dan ketepatan waktu adalah komitmen kami.
            </p>
            <Link
              className="mt-8 inline-flex h-16 items-center gap-3 rounded-lg bg-[#a17140] px-9 text-base font-black uppercase text-white transition hover:bg-[#875d33]"
              href="/tentang-kami"
            >
              Selengkapnya
              <Icon className="h-6 w-6" name="arrowRight" />
            </Link>
          </div>
          <div className="grid gap-4">
            <div className="relative aspect-[810/365] overflow-hidden rounded-lg">
              <Image
                alt="Toko Konveksi Bali"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src="/assets/about-storefront.png"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.slice(4, 8).map((image) => (
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg" key={image.src}>
                  <Image alt={image.alt} className="object-cover" fill sizes="25vw" src={image.src} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20">
          <p className="mb-8 text-base font-black uppercase text-[#a17140]">
            Client & Partner Kami
          </p>
          
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-100% - 1.5rem)); }
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}} />

          <div className="group flex gap-6 overflow-hidden py-2">
            {[0, 1].map((i) => (
              <div className="animate-marquee flex shrink-0 gap-6" key={i}>
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <div
                    className="flex h-16 w-48 shrink-0 items-center justify-center text-2xl font-black text-[#00539f] opacity-60 transition-all hover:scale-110 hover:opacity-100"
                    key={`${client}-${index}`}
                  >
                    {client}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <CTASection className="mt-20" />
      </Container>
    </>
  );
}
