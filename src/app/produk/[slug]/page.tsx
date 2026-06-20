
import Image from "next/image";
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
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  console.log()
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const mainImage = product.detailImages[0] ?? {
    src: product.image,
    alt: product.imageAlt,
  };
  const recommendations = products
    .filter((item) => item.slug !== product.slug)
    .slice(4, 8);



  return (
    <Container className="pt-10 lg:pt-20">
      <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-[0.85fr_1fr] lg:items-center">
        <div className=" flex justify-center items-center gap-5">
          <div className="flex justify-center items-center">
            {/* {product.detailImages.slice(1).map((image) => (
              <div
                className="overflow-hidden rounded-lg bg-white shadow-[0_8px_22px_rgba(0,0,0,0.08)]"
                key={image.src}
              >
                <Image width={300} height={300} alt={image.alt} className="object-contain" src={image.src} />
              </div>
            ))} */}
          </div>
          {/* <div className="relative aspect-square overflow-hidden rounded-lg bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <Image
              alt={mainImage.alt}
              className="object-contain p-6"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              src={mainImage.src}
            />
          </div> */}
          <Products/>
        </div>

        <div className="">
          <nav className="mb-5 flex flex-wrap items-center gap-4 text-2xl font-bold text-[#9a9a9a]">
            <Link className="hover:text-[#a17140]" href="/produk">
              {product.category}
            </Link>
            <Icon className="h-6 w-6 text-black" name="arrowRight" />
            <span className="text-black">{product.name}</span>
          </nav>
          <h1 className="text-5xl font-black leading-tight text-black sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-8 max-w-5xl text-xl font-semibold leading-8 text-[#4d4d4d] sm:text-xl">
            {product.description}
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-black text-black">Spesifikasi Kain</h2>
              <dl className="grid gap-3 text-lg font-semibold text-[#4d4d4d]">
                {product.specs.map((spec) => (
                  <div key={spec.label}>
                    <dt className="inline">{spec.label}: </dt>
                    <dd className="inline">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-black text-black">Pilihan Sablon</h2>
              <div className="flex flex-wrap gap-8">
                {product.printOptions.map((option, index) => (
                  <div className="text-center" key={option}>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-cyan-600 text-[#ffffff]">
                      <Icon className="h-8 w-8" name={index === 0 ? "shirt" : index === 1 ? "printer" : "package"} />
                    </div>
                    <p className="mt-3 text-lg font-semibold text-[#4d4d4d]">{option}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            className="mt-10 inline-flex h-16 items-center gap-3 rounded-lg bg-linear-to-r from-cyan-500 to-cyan-600 px-9 text-base font-black uppercase text-white transition hover:bg-cyan-100"
            href="https://wa.me/6281345677890"
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="h-7 w-7" name="whatsapp" />
            Konsultasi Sekarang
          </a>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="mb-8 text-3xl font-black text-black">Rekomendasi Lainnya</h2>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {recommendations.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>

      <CTASection className="mt-24" />
    </Container>
  );
}
