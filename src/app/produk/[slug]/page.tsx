import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import CTASection from "@/components/sections/CTASection";
import { Icon } from "@/components/common/Icons";
import ProductCard from "@/components/product/ProductCard";
import { Products } from "@/components/product/Products";
import { products, categoryToProductSlug, categorySpecs, WHATSAPP_URL } from "@/data/site";
import { productSeoContent, SITE_NAME, SITE_URL } from "@/data/seo";

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function generateStaticParams() {
  const routeSlugs = new Set([
    ...products.map((product) => product.slug.toLowerCase()),
    ...Object.keys(categoryToProductSlug),
  ]);

  return Array.from(routeSlugs).map((cat) => ({
    slug: cat,
  }));
}

function findProductBySlug(slug: string) {
  const targetSlug = categoryToProductSlug[slug.toLowerCase()] || slug;

  return products.find((item) => item.slug.toLowerCase() === targetSlug.toLowerCase());
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | Advish Konveksi",
    };
  }

  const seoContent = productSeoContent[product.category];
  const title = seoContent?.title || `Konveksi ${product.category} Bali | Advish Konveksi`;
  const description =
    seoContent?.description ||
    `Produksi ${product.category.toLowerCase()} custom di Bali dan Denpasar bersama Advish Konveksi.`;
  const canonicalPath = `/produk/${product.category.toLowerCase()}`;

  return {
    title,
    description,
    keywords: seoContent?.keywords || [`Konveksi ${product.category} Bali`, `Konveksi ${product.category} Denpasar`],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      url: `${SITE_URL}${canonicalPath}`,
      images: [
        {
          url: `${SITE_URL}${product.image}`,
          width: 1200,
          height: 630,
          alt: product.imageAlt,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;

  const product = findProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const otherProducts = products.filter(
    (item) => item.slug !== product.slug
  );

  const recommendations = [...otherProducts]
    .slice(0, 4);

  const specsToDisplay = categorySpecs[product.category] || product.specs;
  const seoContent = productSeoContent[product.category];
  const canonicalPath = `/produk/${product.category.toLowerCase()}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seoContent?.h1 || `Konveksi ${product.category} Custom Bali`,
    description:
      seoContent?.description ||
      `Produksi ${product.category.toLowerCase()} custom di Bali dan Denpasar bersama Advish Konveksi.`,
    serviceType: seoContent?.h1 || `Konveksi ${product.category}`,
    areaServed: ["Bali", "Denpasar", "Indonesia"],
    provider: {
      "@type": "LocalBusiness",
      name: "Advish Konveksi",
      url: SITE_URL,
    },
    url: `${SITE_URL}${canonicalPath}`,
  };

  return (
    <Container className="pt-24 lg:pt-28 overflow-hidden">
      <JsonLd data={serviceJsonLd} />
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
          <div className="min-w-0 w-full">
            <div className="-mx-4 w-[calc(100%+2rem)] sm:mx-0 sm:w-full flex items-center justify-center">
              <Products currentProductSlug={product.slug} />
            </div>
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
                <dl className="grid grid-cols-[auto_auto_auto_1fr] items-start gap-x-1.5 sm:gap-x-2 gap-y-2.5">
                  {specsToDisplay.map((spec) => (
                    <div key={spec.label} className="contents">
                      <div className="flex items-center h-[22px]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                      </div>
                      <dt className="text-sm font-bold text-gray-700 whitespace-nowrap pt-[1px]">{spec.label}</dt>
                      <span className="text-sm font-bold text-gray-700 pt-[1px]">:</span>
                      <dd className="text-sm font-medium text-gray-500 leading-relaxed pt-[1px]">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* ── CTA Button ── */}
            <a
              className="mt-8 w-full sm:w-auto mx-auto lg:mx-0 inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 text-base font-black uppercase tracking-wide text-white shadow-lg shadow-teal-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/30 active:scale-95"
              href={WHATSAPP_URL}
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
