import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/site";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      className="group block overflow-hidden rounded-2xl bg-white border border-gray-100 p-3 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/20 hover:border-teal-200"
      href={`/produk/${product.slug}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 rounded-xl">
        <Image
          alt={product.imageAlt}
          className="object-contain transition duration-300 group-hover:scale-105 mix-blend-multiply"
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          src={product.image}
        />
      </div>
    </Link>
  );
}
