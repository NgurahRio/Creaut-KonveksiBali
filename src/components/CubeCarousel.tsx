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
  transparentBg?: boolean
}

export function CubeCarousel({ children, className, width = 250, height = 320, transparentBg = false }: CubeCarouselProps) {
  const [currentRotation, setCurrentRotation] = useState(0)

  // We need children as an array to count and map them properly
  // We need children as an array to count and map them properly
  let items = React.Children.toArray(children)
  const originalLength = items.length

  if (originalLength === 0) return null;

  if (originalLength === 1) {
    return (
      <div className={cn("relative flex flex-col items-center justify-center w-full max-w-sm mx-auto overflow-visible py-10", className)}>
        <div
          className={cn(
            "relative flex flex-col items-center justify-center",
            transparentBg ? "overflow-visible" : "overflow-hidden bg-white rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-gray-100"
          )}
          style={{
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          {items[0]}
        </div>
      </div>
    );
  }

  if (originalLength === 2) {
    items = [...items, ...items];
  }

  const totalCards = items.length
  const anglePerCard = 360 / totalCards

  // Calculate Z translation to form a perfect polygon, and add padding/gap to avoid overlap
  const radius = Math.round((width / 2) / Math.tan(Math.PI / totalCards)) + 85

  const next = () => setCurrentRotation(prev => prev - anglePerCard)
  const prev = () => setCurrentRotation(prev => prev + anglePerCard)

  // Normalize rotation to range [0, 360)
  const normalizedRotation = ((currentRotation % 360) + 360) % 360;

  return (
    <div className={cn("relative flex flex-col items-center justify-center w-full max-w-md mx-auto overflow-visible py-8", className)}>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md w-12 h-12 bg-white hover:bg-gray-50 border-gray-200 text-gray-700 cursor-pointer"
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
            const cardAngle = angle % 360;
            const isActive = (cardAngle + normalizedRotation) % 360 === 0;

            return (
              <div
                key={index}
                className={cn(
                  "absolute top-0 left-0 w-full h-full transition-all duration-500",
                  transparentBg ? "overflow-visible" : "overflow-hidden bg-white rounded-3xl border border-slate-100/80",
                  isActive ? "opacity-100 grayscale-0" : "opacity-30 grayscale"
                )}
                style={{
                  backfaceVisibility: "hidden",
                  transition: "transform 0.6s cubic-bezier(0.77, 0, 0.175, 1), opacity 0.6s ease, filter 0.6s ease, box-shadow 0.6s ease",
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)${isActive ? "" : " scale(0.88)"}`,
                  boxShadow: transparentBg ? undefined : (isActive ? "0 20px 45px rgba(0,0,0,0.1)" : "0 6px 15px rgba(0,0,0,0.02)"),
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                {child}

                {/* Gray wash overlay for unselected side cards */}
                {!isActive && (
                  <div className={cn(
                    "absolute inset-0 pointer-events-none z-10 transition-opacity duration-500",
                    transparentBg ? "bg-transparent" : "bg-slate-100/50 backdrop-blur-[0.5px]"
                  )} />
                )}
              </div>
            )
          })}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md w-12 h-12 bg-white hover:bg-gray-50 border-gray-200 text-gray-700 cursor-pointer"
        onClick={next}
      >
        <ChevronRight className="w-6 h-6" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  )
}
