import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { productCategories } from "@/data/site";
import { Icon } from "@/components/Icons";


interface CategoryStyle {
  hoverBorder: string;
  hoverShadow: string;
  iconBg: string;
  iconColor: string;
}

const categoryStyles: Record<string, CategoryStyle> = {
  kemeja: {
    hoverBorder: "hover:border-[#00c5eb]/50",
    hoverShadow: "hover:shadow-[0_12px_25px_rgba(0,197,235,0.12)]",
    iconBg: "bg-[#ecfafd]",
    iconColor: "text-[#00c5eb]",
  },
  jaket: {
    hoverBorder: "hover:border-[#f5b041]/50",
    hoverShadow: "hover:shadow-[0_12px_25px_rgba(245,176,65,0.12)]",
    iconBg: "bg-[#fffbf0]",
    iconColor: "text-[#f5b041]",
  },
  kaos: {
    hoverBorder: "hover:border-[#5856d6]/50",
    hoverShadow: "hover:shadow-[0_12px_25px_rgba(88,86,214,0.12)]",
    iconBg: "bg-[#f4f5fd]",
    iconColor: "text-[#5856d6]",
  },
  polo: {
    hoverBorder: "hover:border-[#a020f0]/50",
    hoverShadow: "hover:shadow-[0_12px_25px_rgba(160,32,240,0.12)]",
    iconBg: "bg-[#fdf0fd]",
    iconColor: "text-[#a020f0]",
  },
  jersey: {
    hoverBorder: "hover:border-[#2e7d32]/50",
    hoverShadow: "hover:shadow-[0_12px_25px_rgba(46,125,50,0.12)]",
    iconBg: "bg-[#f2fdf2]",
    iconColor: "text-[#2e7d32]",
  },
  topi: {
    hoverBorder: "hover:border-[#c62828]/50",
    hoverShadow: "hover:shadow-[0_12px_25px_rgba(198,40,40,0.12)]",
    iconBg: "bg-[#fef2f2]",
    iconColor: "text-[#c62828]",
  },
  celana: {
    hoverBorder: "hover:border-[#1565c0]/50",
    hoverShadow: "hover:shadow-[0_12px_25px_rgba(21,101,192,0.12)]",
    iconBg: "bg-[#f2f7fc]",
    iconColor: "text-[#1565c0]",
  },
};

export default function ProdukPage() {
  return (
    <Container className="pt-28 lg:pt-36">
      <section>
        <h1 className="text-5xl font-black leading-tight text-gray-900 sm:text-7xl">Kategori Produk</h1>
        <p className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-gray-600 sm:text-2xl sm:leading-9">
          Pilih kategori apparel berkualitas tinggi di bawah ini untuk melihat detail pilihan produk yang tersedia.
        </p>
      </section>

      {/* Categories Bento Row/Grid */}
      <section className="mt-12 mb-20">
        <div className="flex gap-4 overflow-x-auto pb-6 pt-2 px-1 scrollbar-thin md:grid md:grid-cols-4 lg:grid-cols-7 md:overflow-visible">
          {productCategories.map((category) => {
            const count = category.count;

            const style = categoryStyles[category.id] || {
              hoverBorder: "hover:border-primary-dark/50",
              hoverShadow: "hover:shadow-lg",
              iconBg: "bg-gray-100",
              iconColor: "text-gray-600",
            };

            return (
              <Link
                href={`/produk/${category.id}`}
                key={category.id}
                className={`flex flex-col items-center justify-between p-6 rounded-3xl border-2 border-gray-100/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] min-w-[150px] md:min-w-0 aspect-square ${style.hoverBorder} ${style.hoverShadow}`}
              >
                {/* Icon Container */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 ${style.iconBg}`}
                >
                  <Icon className={`w-8 h-8 ${style.iconColor}`} name={category.icon} />
                </div>

                {/* Category Name */}
                <h3 className="mt-3 text-lg font-black text-gray-900 text-center leading-tight">
                  {category.name}
                </h3>

                {/* Badge Count */}
                <div
                  className="mt-4 px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-gray-100/80 text-gray-500"
                >
                  {count} PILIHAN
                </div>
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
