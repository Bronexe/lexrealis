"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { List } from "lucide-react"

interface TableOfContentsProps {
  headings: {
    id: string
    text: string
    level: number
  }[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>("")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -35% 0px" }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Scroll suave con offset para el header
      const headerHeight = 80 // altura aproximada del header
      const elementPosition = element.offsetTop - headerHeight - 20
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
  }

  if (headings.length === 0) return null

  return (
    <Card className="sticky top-24 border-[#BF7F11]/20 bg-[#BF7F11]/5 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <List className="h-5 w-5 text-[#BF7F11]" />
          Índice de Contenido
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <nav className="space-y-2">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`block w-full text-left text-sm transition-colors hover:text-[#BF7F11] ${
                activeId === heading.id
                  ? "text-[#BF7F11] font-medium"
                  : "text-muted-foreground"
              }`}
              style={{
                paddingLeft: `${(heading.level - 1) * 16}px`,
              }}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  )
}
