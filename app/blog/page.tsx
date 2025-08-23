import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Clock, User, Search, Filter, ArrowRight, Download, BookOpen } from "lucide-react"
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
            <h3 className="text-2xl font-bold mb-8">Todos los artículos</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {post.readTime}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                    </div>

                    <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                      <Link href={`/blog/${post.slug}`}>Leer más</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Mantente actualizado</h2>
              <p className="text-xl text-muted-foreground">
                Recibe los últimos artículos legales y actualizaciones normativas directamente en tu email.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Tu email" className="flex-1" />
              <Button className="bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight">Descarga nuestro kit de artículos</h2>
                  <p className="text-xl text-muted-foreground">
                    Accede a todas nuestras plantillas, checklists y guías en un solo paquete descargable.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                      <FileText className="h-5 w-5 text-[#BF7F11]" />
                    </div>
                    <span className="text-sm">Plantillas legales actualizadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                      <BookOpen className="h-5 w-5 text-[#BF7F11]" />
                    </div>
                    <span className="text-sm">Guías especializadas por sector</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#BF7F11]/10 rounded-lg">
                      <Download className="h-5 w-5 text-[#BF7F11]" />
                    </div>
                    <span className="text-sm">Acceso inmediato y gratuito</span>
                  </div>
                </div>

                <Button size="lg" className="bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar Kit Completo
                </Button>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#BF7F11]/10 to-[#BF7F11]/5 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="p-4 bg-white rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-lg">
                      <Download className="h-8 w-8 text-[#BF7F11]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Kit Legal Completo</h3>
                      <p className="text-sm text-muted-foreground">PDF • 2.3 MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
