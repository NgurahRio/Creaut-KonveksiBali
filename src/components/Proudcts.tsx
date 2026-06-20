import Image from "next/image"
import { products } from "@/data/site"
import { CubeCarousel } from "@/components/CubeCarousel"

export function Products() {
  return (
    <div className="w-full flex justify-center py-10">
      <CubeCarousel width={260} height={320}>
        {products.map((product) => {
          const image = product.detailImages[0]

          return (
            <div key={product.slug} className="p-6 flex flex-col items-center justify-center h-full w-full">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>
          )
        })}
      </CubeCarousel>
    </div>
  )
}