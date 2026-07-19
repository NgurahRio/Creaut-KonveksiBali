import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import CTASection from "@/components/sections/CTASection";
import { productCategories } from "@/data/site";
import { Icon } from "@/components/common/Icons";
import { SEO_KEYWORDS, SITE_NAME, SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: "Produk Konveksi Bali | Kaos, Seragam, Jaket, Polo & Jersey",
  description:
    "Katalog produk Advish Konveksi Bali untuk kaos custom, jersey, jaket, kemeja, polo shirt, topi, celana, seragam, bordir, sablon, dan apparel custom di Denpasar.",
  keywords: [...SEO_KEYWORDS],
  alternates: {
    canonical: "/produk",
  },
  openGraph: {
    title: "Produk Konveksi Bali | Advish Konveksi",
    description:
      "Pilih kategori produk konveksi custom di Bali dan Denpasar: kaos, jersey, jaket, kemeja, polo shirt, topi, celana, dan seragam.",
    siteName: SITE_NAME,
    url: `${SITE_URL}/produk`,
    images: [
      {
        url: `${SITE_URL}/assets/advish-konveksi-kaos1.png`,
        width: 1200,
        height: 630,
        alt: "Produk apparel custom Advish Konveksi Bali",
      },
    ],
  },
};

const hoverTextColors: Record<string, string> = {
  kemeja: "group-hover:text-[#00c5eb]",
  jaket: "group-hover:text-[#f5b041]",
  kaos: "group-hover:text-[#5856d6]",
  polo: "group-hover:text-[#a020f0]",
  jersey: "group-hover:text-[#2e7d32]",
  topi: "group-hover:text-[#c62828]",
  celana: "group-hover:text-[#1565c0]",
};

const hoverBgColors: Record<string, string> = {
  kemeja: "from-[#00c5eb] to-[#00b0d6]",
  jaket: "from-[#f5b041] to-[#e09e30]",
  kaos: "from-[#5856d6] to-[#4745c4]",
  polo: "from-[#a020f0] to-[#8c1cd1]",
  jersey: "from-[#2e7d32] to-[#246327]",
  topi: "from-[#c62828] to-[#ab2020]",
  celana: "from-[#1565c0] to-[#115099]",
};

export default function ProdukPage() {
  return (
    <Container className="pt-28 lg:pt-36">
      {/* Centered page header matching "Tracking Order" style, but with Teal-to-Emerald gradient */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">
          Kategori <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">Produk</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-gray-500 sm:text-xl">
          Pilih kategori apparel berkualitas tinggi di bawah ini untuk melihat detail pilihan produk yang tersedia.
        </p>
      </section>

      {/* Categories Bento Grid - Downward Wrap on Mobile */}
      <section className="mt-12 mb-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {productCategories.map((category) => {
            const count = category.count;
            const hoverTextColor = hoverTextColors[category.id] || "group-hover:text-cyan-600";
            const hoverBgColor = hoverBgColors[category.id] || "from-cyan-500 to-blue-500";

            return (
              <Link
                href={`/produk/${category.id}`}
                key={category.id}
                className={`group relative flex flex-col items-center justify-between p-6 rounded-2xl text-center border shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 aspect-square ${category.borderColor} ${category.bgColor}`}
              >
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-white shadow-sm ${category.iconColor}`}
                >
                  <Icon className="w-8 h-8" name={category.icon} />
                </div>

                {/* Category Name */}
                <h3 className={`mt-3 text-lg font-black text-gray-900 text-center leading-tight transition-colors ${hoverTextColor}`}>
                  {category.name}
                </h3>

                {/* Badge Count */}
                <div
                  className="mt-4 px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-white text-gray-500 shadow-sm"
                >
                  {count} PILIHAN
                </div>

                <div className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${hoverBgColor} transition-transform duration-300 group-hover:scale-x-100`} />
              </Link>
            );
          })}
        </div>
      </section>

      <CTASection
        className="mt-20"
        primaryLabel="Konsultasi Sekarang"
        secondaryLabel=""
        subtitle="Konsultasikan kebutuhan apparel Anda sekarang!"
        title="Punya kebutuhan khusus?"
      />
    </Container>
  );
}
