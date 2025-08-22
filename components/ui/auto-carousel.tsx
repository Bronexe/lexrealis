"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel"

export function AutoCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 4000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {/* Imagen 1 - Viña del Mar */}
          <CarouselItem>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl transform rotate-3"></div>
              <Image
                src="/Abogados inmobiliarios viña del mar.jpg"
                alt="Abogados inmobiliarios en Viña del Mar - Lex Realis"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </div>
          </CarouselItem>
          
          {/* Imagen 2 - Tribunales Civiles */}
          <CarouselItem>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl transform -rotate-2"></div>
              <Image
                src="/tribunales civiles chile.jpg"
                alt="Tribunales Civiles de Chile - Lex Realis"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </div>
          </CarouselItem>
          
          {/* Imagen 3 - Abogados Administración */}
          <CarouselItem>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl transform rotate-2"></div>
              <Image
                src="/abogados administración legal.jpg"
                alt="Abogados especializados en administración legal - Lex Realis"
                width={600}
                height={400}
                className="relative rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}
