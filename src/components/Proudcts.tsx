import { products } from "@/data/site"
import { ProductGallery } from "@/components/ProductGallery"

interface ProductsProps {
  currentProductSlug?: string
}

export function Products({ currentProductSlug }: ProductsProps) {
  // Find the current product by slug
  const product = products.find((p) => p.slug === currentProductSlug)

  if (!product || !product.detailImages || product.detailImages.length === 0) {
    return null
  }

  return (
    <div className="w-full flex justify-center py-10">
      <ProductGallery images={product.detailImages} />
    </div>
  )
}