"use client"

import React, { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ImageObj {
  src: string;
  alt: string;
}

interface ProductGalleryProps {
  images: ImageObj[];
  className?: string;
}



export function ProductGallery({ images, className }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const mainRef = React.useRef<HTMLDivElement>(null)

  if (!images || images.length === 0) return null

  const handleScroll = () => {
    if (!mainRef.current) return;
    const scrollLeft = mainRef.current.scrollLeft;
    const width = mainRef.current.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < images.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToImage = (index: number) => {
    setActiveIndex(index);
    if (mainRef.current) {
      const width = mainRef.current.clientWidth;
      mainRef.current.scrollTo({
        left: width * index,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 w-full max-w-md mx-auto", className)}>
      {/* Main Image Swipeable Container */}
      <div
        ref={mainRef}
        onScroll={handleScroll}
        className="flex w-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {images.map((image, index) => (
          <div key={index} className="relative shrink-0 w-full aspect-[4/5] flex items-center justify-center p-0 snap-center overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain scale-110 sm:scale-[1.25] pointer-events-none"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="w-full flex justify-center">
        <div className="flex gap-3 sm:gap-4 max-w-full overflow-x-auto px-4 py-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => scrollToImage(index)}
              className={cn(
                "relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300 snap-center",
                activeIndex === index
                  ? "border-cyan-500 shadow-md ring-4 ring-cyan-500/20 scale-105"
                  : "border-transparent hover:border-cyan-300 opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="96px"
                className="object-contain p-1"
              />
            </button>
          ))}
          {/* Spacer to fix WebKit right-padding bug on scroll */}
          <div className="shrink-0 w-1"></div>
        </div>
      </div>
    </div>
  )
}
