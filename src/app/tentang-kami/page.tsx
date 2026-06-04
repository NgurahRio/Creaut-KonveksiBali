import Image from "next/image";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { Icon } from "@/components/Icons";
import StatsStrip from "@/components/StatsStrip";
import { galleryImages, journey, values } from "@/data/site";

export default function TentangKamiPage() {
  return (
    <Container className="pt-8 lg:pt-14">
      <section className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="mb-6 text-base font-black uppercase text-[#a17140]">Konveksi Ampuh!</p>
          <h1 className="text-5xl font-black leading-tight text-black sm:text-7xl">
            Lebih dari Sekadar Konveksi
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-semibold leading-9 text-[#4f4f4f] sm:text-2xl">
            Kami bukan hanya membuat pakaian, kami membantu menghidupkan identitas brand
            dan komunitas Anda.
          </p>
        </div>
        <div className="relative aspect-[960/525] overflow-hidden rounded-lg">
          <Image
            alt="Workshop Konveksi Bali"
            className="object-cover"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            src="/assets/about-hero-workshop.png"
          />
        </div>
      </section>

      <section className="mt-20 rounded-lg bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] lg:p-10">
        <h2 className="mb-10 text-3xl font-black text-black">Perjalanan Kami</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {journey.map((item) => (
            <div className="relative border-l border-[#d5c5b4] pl-6 lg:border-l-0 lg:border-t lg:pt-8" key={item.year}>
              <span className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-[#a17140] lg:-top-2 lg:left-0" />
              <h3 className="text-base font-black text-[#a17140]">{item.year}</h3>
              <p className="mt-5 text-base font-semibold leading-6 text-[#4d4d4d]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-black text-black">Nilai Kami</h2>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => (
            <article
              className="rounded-lg bg-white p-8 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              key={value.title}
            >
              <Icon className="mb-6 h-12 w-12 text-[#a17140]" name={value.icon} />
              <h3 className="text-lg font-black text-black">{value.title}</h3>
              <p className="mt-2 text-base font-semibold leading-6 text-black">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-8 text-3xl font-black text-black">Galeri Workshop</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <div className="relative aspect-[435/205] overflow-hidden rounded-lg" key={image.src}>
              <Image
                alt={image.alt}
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                src={image.src}
              />
            </div>
          ))}
        </div>
      </section>

      <StatsStrip className="mt-24" />

      <CTASection
        className="mt-24"
        primaryLabel="Chat WhatsApp"
        secondaryLabel=""
        subtitle="Konsultasi gratis sekarang!"
        title="Siap wujudkan ide terbaikmu?"
      />
    </Container>
  );
}
