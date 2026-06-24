import Image from "next/image"
import { products } from "@/data/site"
import { CubeCarousel } from "@/components/CubeCarousel"

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
      <CubeCarousel width={300} height={390} transparentBg>
        {product.detailImages.map((image, index) => {
          return (
            <div key={index} className="p-6 flex flex-col items-center justify-center h-full w-full">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority={index === 0}
                  className="object-contain scale-[1.6] transition-transform duration-500 hover:scale-[1.7] mix-blend-multiply"
                />
              </div>
            </div>
          )
        })}
      </CubeCarousel>
    </div>
  )
}