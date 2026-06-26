
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { Icon } from "@/components/Icons";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/site";
import { Products } from "@/components/Proudcts";

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const productSlugs = products.map((product) => ({
    slug: product.slug,
  }));
  const categorySlugs = ["kemeja", "jaket", "kaos", "jersey", "topi"].map((cat) => ({
    slug: cat,
  }));
  return [...productSlugs, ...categorySlugs];
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;

  const categoryToProductSlug: Record<string, string> = {
    kemeja: "pdh-american-drill",
    jaket: "jaket-sporty",
    kaos: "kaos-cotton-combed-30s",
    jersey: "jersey-dryfit-premium",
    topi: "topi-custom",
  };

  const targetSlug = categoryToProductSlug[slug.toLowerCase()] || slug;
  const product = products.find((item) => item.slug === targetSlug);

  if (!product) {
    notFound();
  }

  const otherProducts = products.filter(
    (item) => item.slug !== product.slug
  );

  const recommendations = [...otherProducts]
    .slice(0, 4);

  const categorySpecs: Record<string, { label: string; value: string }[]> = {
    "Kemeja": [
      { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
      { label: "Pilihan Warna", value: "Custom" },
      { label: "Size Chart", value: "Custom" },
      { label: "Bahan", value: "American Drill, Japan Drill, Nagata Drill, Twill, Poplin, Katun, dll" }
    ],
    "Jaket": [
      { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
      { label: "Pilihan Warna", value: "Custom" },
      { label: "Size Chart", value: "Banyak Pilihan" },
      { label: "Bahan", value: "American Drill, Japan Drill, Nagata Drill, Twill, Cotton Fleece, Canvas, Microfiber, Corduroy, Scuba, Diadora, dll" }
    ],
    "Kaos": [
      { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
      { label: "Pilihan Warna", value: "Custom" },
      { label: "Size Chart", value: "Banyak Pilihan" },
      { label: "Bahan", value: "Cotton Combed, Cotton Korean, Cotton Danball, Cotton Bamboo, Carded, dll" }
    ],
    "Polo": [
      { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
      { label: "Pilihan Warna", value: "Custom" },
      { label: "Size Chart", value: "Banyak Pilihan" },
      { label: "Bahan", value: "Lacoste Cotton, Lacoste CVC, Lacoste PE, Cotton Combed, dll" }
    ],
    "Jersey": [
      { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
      { label: "Pilihan Warna", value: "Custom" },
      { label: "Size Chart", value: "Banyak Pilihan" },
      { label: "Bahan", value: "Lacoste Cotton, Lacoste CVC, Lacoste PE, Cotton Combed, dll" }
    ],
    "Topi": [
      { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
      { label: "Pilihan Warna", value: "Custom" },
      { label: "Size Chart", value: "Banyak Pilihan" },
      { label: "Bahan", value: "Drill, Corduroy, Canvas, Rafel, Jaring, dll" }
    ],
    "Celana": [
      { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
      { label: "Pilihan Warna", value: "Custom" },
      { label: "Size Chart", value: "Banyak Pilihan" },
      { label: "Bahan", value: "Drill, Corduroy, Canvas, Rafel, Jaring, dll" }
    ]
  };

  const specsToDisplay = categorySpecs[product.category] || product.specs;

  return (
    <Container className="pt-24 lg:pt-28 overflow-hidden">
      {/* ── Back Button (Icon Only) ── */}
      <Link
        href="/produk"
        className="mb-8 flex lg:hidden h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all hover:-translate-x-1 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-600 hover:shadow-md"
        aria-label="Kembali ke Kategori"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </Link>

      {/* ── Product Hero Section ── */}
      <section className="relative">
        <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left — Gallery (centered on mobile) */}
          <div className="flex w-full items-center justify-center">
            <Products currentProductSlug={product.slug} />
          </div>

          {/* Right — Product Info */}
          <div className="flex w-full flex-col items-center text-center lg:items-start lg:text-left">
            {/* Category pill */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                {product.category}
              </span>
            </div>


            {/* ── Specs ── */}
            <div className="mt-8 w-full max-w-xl mx-auto lg:mx-0">
              <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm text-left">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-black text-gray-900">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Icon className="h-4 w-4" name="ruler" />
                  </div>
                  Spesifikasi
                </h2>
                <dl className="grid gap-2.5">
                  {specsToDisplay.map((spec) => (
                    <div key={spec.label} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                      <div>
                        <dt className="inline text-sm font-bold text-gray-700">{spec.label}: </dt>
                        <dd className="inline text-sm font-medium text-gray-500">{spec.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* ── CTA Button ── */}
            <a
              className="mt-8 w-full sm:w-auto mx-auto lg:mx-0 inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 text-base font-black uppercase tracking-wide text-white shadow-lg shadow-teal-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/30 active:scale-95"
              href="https://wa.me/6281345677890"
              rel="noreferrer"
              target="_blank"
            >
              <Icon className="h-6 w-6" name="whatsapp" />
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* ── Rekomendasi Lainnya ── */}
      <section className="mt-20 lg:mt-28">
        <div className="mb-8 flex items-center gap-4">
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">Rekomendasi Lainnya</h2>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent sm:block" />
        </div>
        <div className="grid gap-5 grid-cols-2 xl:grid-cols-4">
          {recommendations.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>

      <CTASection className="mt-20 lg:mt-28" />
    </Container>
  );
}
