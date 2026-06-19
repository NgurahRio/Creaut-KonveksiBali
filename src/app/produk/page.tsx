import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";
import StatsStrip from "@/components/StatsStrip";
import { categories, products } from "@/data/site";

export default function ProdukPage() {
  return (
    <Container className="pt-10 lg:pt-20">
      <section>
        <h1 className="text-5xl font-black leading-tight text-black sm:text-7xl">Produk Kami</h1>
        <p className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-[#4f4f4f] sm:text-2xl sm:leading-9">
          Berbagai pilihan apparel custom berkualitas tinggi untuk kebutuhan Anda.
        </p>
      </section>

      <section className="mt-12">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              className={`h-16 shrink-0 rounded-full border px-10 text-xl font-black transition ${
                index === 0
                  ? "border-[#a17140] bg-[#a17140] text-white"
                  : "border-[#777] bg-white text-black hover:border-[#a17140] hover:text-[#a17140]"
              }`}
              key={category}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>

      <StatsStrip className="mt-20" />

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
