import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, User, Search, Filter } from "lucide-react"
import { getBlogPosts, getAllCategories, getAllTags } from "@/lib/mdx"
import BlogCards from "@/components/ui/blog-cards"

export const metadata: Metadata = {
  title: "Blog Legal | Lex Realis",
  description:
    "Artículos, guías y novedades legales para administradores de edificios, corredores e inmobiliarias.",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  openGraph: {
    title: "Blog Legal | Lex Realis",
    description: "Artículos especializados y novedades legales para el sector inmobiliario.",
  },
}

export default function BlogPage() {
  const posts = getBlogPosts()
  const categories = getAllCategories()
  const tags = getAllTags()
  const featuredPosts = posts.filter(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#BF7F11]/5 to-transparent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="w-fit mx-auto">
              Blog Legal
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Blog Legal <span className="text-[#BF7F11]">Lex Realis</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Artículos especializados, guías y novedades legales para administradores, corredores e inmobiliarias.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar artículos..." className="pl-10" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              {categories.slice(0, 5).map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-[#BF7F11]/10">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Artículos destacados</h2>
              <p className="text-xl text-muted-foreground">
                Los artículos más populares y actualizados de nuestro blog legal.
              </p>
            </div>

            <BlogCards posts={featuredPosts} />
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16">
        <div className="container">
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Todos los artículos</h3>
            <p className="text-muted-foreground mb-8">
              Artículos ordenados por fecha de publicación, del más reciente al más antiguo.
            </p>
            <BlogCards posts={regularPosts} />
          </div>
        </div>
      </section>

    </div>
  )
}
