import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  category: string
  readTime: string
  featured?: boolean
  content: string
  excerpt: string
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        author: data.author || 'Lex Realis',
        tags: data.tags || [],
        category: data.category || 'General',
        readTime: data.readTime || '5 min',
        featured: data.featured || false,
        content,
        excerpt: content.slice(0, 200) + '...',
      }
    })

  // Ordenar por fecha (más reciente primero)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'Lex Realis',
      tags: data.tags || [],
      category: data.category || 'General',
      readTime: data.readTime || '5 min',
      featured: data.featured || false,
      content,
      excerpt: content.slice(0, 200) + '...',
    }
  } catch (error) {
    return null
  }
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return getBlogPosts().filter((post) => post.category === category)
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getBlogPosts().filter((post) => post.tags.includes(tag))
}

export function getFeaturedPosts(): BlogPost[] {
  return getBlogPosts().filter((post) => post.featured)
}

export function getAllTags(): string[] {
  const posts = getBlogPosts()
  const tags = posts.flatMap((post) => post.tags)
  return [...new Set(tags)]
}

export function getAllCategories(): string[] {
  const posts = getBlogPosts()
  const categories = posts.map((post) => post.category)
  return [...new Set(categories)]
}




