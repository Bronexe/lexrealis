"use client"

import React, { useEffect, useRef, useState, createContext, useContext } from "react"
import { ArrowLeft, ArrowRight, X } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ImageProps } from "next/image"
import { useOutsideClick } from "@/hooks/use-outside-click"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}

type Card = {
  src: string
  title: string
  category: string
  content: React.ReactNode
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void
  currentIndex: number
}>({
  onCardClose: () => {},
  currentIndex: 0,
})

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384 // (md:w-96)
      const gap = isMobile() ? 4 : 8
      const scrollPosition = (cardWidth + gap) * (index + 1)
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
      setCurrentIndex(index)
    }
  }

  const isMobile = () => {
    return window && window.innerWidth < 768
  }

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <div
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%] animate-fade-in-up"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#BF7F11]/10 hover:bg-[#BF7F11]/20 disabled:opacity-50 transition-colors"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ArrowLeft className="h-6 w-6 text-[#BF7F11]" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#BF7F11]/10 hover:bg-[#BF7F11]/20 disabled:opacity-50 transition-colors"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ArrowRight className="h-6 w-6 text-[#BF7F11]" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card
  index: number
  layout?: boolean
}) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { onCardClose, currentIndex } = useContext(CarouselContext)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose()
      }
    }

    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  useOutsideClick(containerRef, () => handleClose())

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    onCardClose(index)
  }

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 h-screen overflow-auto">
          <div className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg animate-fade-in" />
          <div
            ref={containerRef}
            className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900 animate-fade-in-up"
          >
            <button
              className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white hover:scale-110 transition-transform"
              onClick={handleClose}
            >
              <X className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
            </button>
            <p className="text-base font-medium text-[#BF7F11]">{card.category}</p>
            <p className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white">{card.title}</p>
            <div className="py-10">{card.content}</div>
          </div>
        </div>
      )}
      <button
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900 hover:scale-105 transition-transform duration-300 group"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent group-hover:from-[#BF7F11]/60 transition-colors duration-300" />
        <div className="relative z-40 p-8">
          <p className="text-left font-sans text-sm font-medium text-white md:text-base">{card.category}</p>
          <p className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl">
            {card.title}
          </p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          className="absolute inset-0 z-10 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </button>
    </>
  )
}

export const BlurImage = ({ height, width, src, className, alt, fill, ...rest }: ImageProps & { fill?: boolean }) => {
  const [isLoading, setLoading] = useState(true)

  // If fill is true, use absolute positioning to fill the container
  const fillClasses = fill ? "absolute inset-0 w-full h-full object-cover" : ""

  return (
    <img
      className={cn("transition duration-300", isLoading ? "blur-sm" : "blur-0", fillClasses, className)}
      onLoad={() => setLoading(false)}
      src={(src as string) || "/placeholder.svg"}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  )
}
