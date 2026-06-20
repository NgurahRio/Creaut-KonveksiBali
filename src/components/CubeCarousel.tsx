"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CubeCarouselProps {
  children: React.ReactNode[]
  className?: string
  width?: number
  height?: number
}

export function CubeCarousel({ children, className, width = 250, height = 320 }: CubeCarouselProps) {
  const [currentRotation, setCurrentRotation] = useState(0)

  // We need children as an array to count and map them properly
  const items = React.Children.toArray(children)
  const totalCards = items.length
  const anglePerCard = 360 / totalCards

  // Calculate Z translation to form a perfect polygon
  const radius = Math.round((width / 2) / Math.tan(Math.PI / totalCards))

  const next = () => setCurrentRotation(prev => prev - anglePerCard)
  const prev = () => setCurrentRotation(prev => prev + anglePerCard)

  if (totalCards === 0) return null;

  return (
    <div className={cn("relative flex flex-col items-center justify-center w-full max-w-sm mx-auto overflow-visible py-10", className)}>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md w-12 h-12 bg-white hover:bg-gray-50 border-gray-200 text-gray-700"
        onClick={prev}
      >
        <ChevronLeft className="w-6 h-6" />
        <span className="sr-only">Previous</span>
      </Button>

      <div
        className="relative"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          perspective: "1500px"
        }}
      >
        <div
          className="w-full h-full relative"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)",
            transform: `translateZ(-${radius}px) rotateY(${currentRotation}deg)`
          }}
        >
          {items.map((child, index) => {
            const angle = anglePerCard * index
            return (
              <div
                key={index}
                className="absolute top-0 left-0 w-full h-full bg-white rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transition: "background-color 0.6s ease, box-shadow 0.6s ease",
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`
                }}
              >
                {child}
              </div>
            )
          })}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md w-12 h-12 bg-white hover:bg-gray-50 border-gray-200 text-gray-700"
        onClick={next}
      >
        <ChevronRight className="w-6 h-6" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  )
}
