import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/site";

export default function ProdukPage() {
  return (
    <Container className="pt-28 lg:pt-36">
      <section>
        <h1 className="text-5xl font-black leading-tight text-gray-900 sm:text-7xl">Produk Kami</h1>
        <p className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-gray-600 sm:text-2xl sm:leading-9">
          Berbagai pilihan apparel custom berkualitas tinggi untuk kebutuhan Anda.
        </p>
      </section>

      <section className="mt-12">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              className={`h-16 shrink-0 rounded-full border px-10 text-xl font-black transition-all duration-300 ${
                index === 0
                  ? "border-primary-dark bg-primary-dark text-white shadow-lg shadow-primary-light/20"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:border-primary-light hover:text-primary-dark hover:bg-white"
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
