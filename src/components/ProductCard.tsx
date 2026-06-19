import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/site";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      className="group block overflow-hidden rounded-lg bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]"
      href={`/produk/${product.slug}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
        <Image
          alt={product.imageAlt}
          className="object-contain transition duration-300 group-hover:scale-105"
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          src={product.image}
        />
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-black leading-7 text-[#4a4a4a]">{product.name}</h3>
        <p className="mt-1 text-lg font-bold text-[#555]">{product.price}</p>
      </div>
    </Link>
  );
}
