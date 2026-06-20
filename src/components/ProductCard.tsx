import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/site";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      className="group block overflow-hidden rounded-2xl bg-white border border-gray-100 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-light/30 hover:border-primary-light"
      href={`/produk/${product.slug}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50 rounded-xl">
        <Image
          alt={product.imageAlt}
          className="object-contain transition duration-300 group-hover:scale-105"
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          src={product.image}
        />
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-black leading-7 text-gray-900 group-hover:text-primary-dark transition-colors duration-200">{product.name}</h3>
        <p className="mt-1 text-lg font-bold text-primary-dark">{product.price}</p>
      </div>
    </Link>
  );
}
