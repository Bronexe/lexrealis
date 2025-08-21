"use client"
import React from "react"
import { TableOfContents } from "./table-of-contents"

interface BlogTOCProps {
  content: string
}

export function BlogTOC({ content }: BlogTOCProps) {
  const [headings, setHeadings] = React.useState<Array<{
    id: string
    text: string
    level: number
  }>>([])

  React.useEffect(() => {
    // Extraer encabezados del contenido MDX
    const headingRegex = /^(#{1,6})\s+(.+)$/gm
    const extractedHeadings: Array<{
      id: string
      text: string
      level: number
    }> = []

    let match
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2].trim()
      
      // Crear ID basado en el texto del encabezado (mismo algoritmo que en MDX components)
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim()

      // Solo agregar encabezados h2, h3, h4 (excluir h1 que es el título principal)
      if (level >= 2 && level <= 4) {
        extractedHeadings.push({
          id,
          text,
          level,
        })
      }
    }

    setHeadings(extractedHeadings)
  }, [content])

  if (headings.length === 0) return null

  return <TableOfContents headings={headings} />
}
