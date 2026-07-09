"use client"

import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"

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
  const mainRef = useRef<HTMLDivElement>(null)
  const thumbnailsRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const checkArrows = () => {
    if (!thumbnailsRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = thumbnailsRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
  };

  useEffect(() => {
    checkArrows();
    window.addEventListener("resize", checkArrows);
    return () => window.removeEventListener("resize", checkArrows);
  }, [images]);

  const scrollThumbnails = (direction: "left" | "right") => {
    if (thumbnailsRef.current) {
      const scrollAmount = 200;
      thumbnailsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

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
            <div 
              className="relative w-full h-full flex items-center justify-center cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => setIsLightboxOpen(true)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 400px"
                className={cn(
                  "object-contain pointer-events-none mix-blend-multiply",
                  !image.src.includes('size') && "scale-110 sm:scale-[1.25]"
                )}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="w-full relative px-6 sm:px-8 flex justify-center group">
        {showLeftArrow && (
          <button
            onClick={() => scrollThumbnails("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm text-gray-500 hover:text-cyan-500 hover:border-cyan-300 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        <div
          ref={thumbnailsRef}
          onScroll={checkArrows}
          className="flex gap-3 sm:gap-4 w-fit max-w-full mx-auto overflow-x-auto py-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => scrollToImage(index)}
              className={cn(
                "relative w-16 h-16 sm:w-24 sm:h-24 shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300 snap-center",
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
                className="object-contain p-1 mix-blend-multiply"
              />
            </button>
          ))}
          {/* Spacer to fix WebKit right-padding bug on scroll */}
          <div className="shrink-0 w-1"></div>
        </div>
        {showRightArrow && (
          <button
            onClick={() => scrollThumbnails("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm text-gray-500 hover:text-cyan-500 hover:border-cyan-300 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 z-50 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Image */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (activeIndex > 0) scrollToImage(activeIndex - 1);
              }}
              disabled={activeIndex === 0}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-transparent rounded-full text-white transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Image */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (activeIndex < images.length - 1) scrollToImage(activeIndex + 1);
              }}
              disabled={activeIndex === images.length - 1}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-transparent rounded-full text-white transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
