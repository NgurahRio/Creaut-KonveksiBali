import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { products } from "@/data/site"

export function Products() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {products.map((product) => {
          const image = product.detailImages[0]

          return (
            <CarouselItem key={product.slug}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          )
        })}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}