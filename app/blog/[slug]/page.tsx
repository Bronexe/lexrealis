import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Clock, User, Calendar, Share2, Download, BookOpen, FileText, ArrowRight } from "lucide-react"
import { getBlogPost, getBlogPosts } from "@/lib/mdx"
import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '@/components/mdx-components'
import { BlogTOC } from "@/components/ui/blog-toc"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado | Lex Realis",
    }
  }

  return {
    title: `${post.title} | Blog Lex Realis`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getBlogPosts()
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#BF7F11]/5 to-transparent">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver al blog
              </Link>
            </Button>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{post.category}</Badge>
                <Badge variant="outline">{post.readTime}</Badge>
                {post.featured && (
                  <Badge variant="default" className="bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                    Destacado
                  </Badge>
                )}
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl">
                {post.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                    {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('es-CL', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartir
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with TOC */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="hidden lg:block">
                <BlogTOC content={post.content} />
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <MDXRemote source={post.content} components={useMDXComponents({})} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Artículos relacionados</h2>
                <p className="text-xl text-muted-foreground">
                  Más contenido sobre {post.category.toLowerCase()} que te puede interesar.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">
                            {relatedPost.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                            {relatedPost.readTime}
                    </Badge>
                  </div>
                      </div>
                      
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                          {relatedPost.title}
                    </Link>
                  </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {relatedPost.description}
                  </p>

                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {relatedPost.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                          {relatedPost.author}
                    </div>
                  </div>

                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          Leer más
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                </CardContent>
              </Card>
                ))}
                    </div>
                    </div>
                  </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                ¿Necesitas asesoría legal especializada?
              </h2>
              <p className="text-xl text-muted-foreground">
                Nuestro equipo de expertos en derecho inmobiliario está listo para ayudarte con cualquier consulta legal.
              </p>
            </div>

            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-[#BF7F11] hover:bg-[#BF7F11]/90">
                <Link href="/contacto">
                  Cotiza Aquí
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
