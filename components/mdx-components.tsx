import type { MDXComponents } from 'mdx/types'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Info, AlertTriangle, CheckCircle } from 'lucide-react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Permite pasar componentes personalizados
    ...components,
    
    // Headings con estilos SEO-friendly y IDs automáticos
    h1: ({ className, children, ...props }) => {
      const id = typeof children === 'string' 
        ? children.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()
        : ''
      
      return (
        <h1
          id={id}
          className={cn(
            "mt-2 scroll-m-20 text-4xl font-bold tracking-tight text-foreground",
            className
          )}
          {...props}
        >
          {children}
        </h1>
      )
    },
    h2: ({ className, children, ...props }) => {
      const id = typeof children === 'string' 
        ? children.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()
        : ''
      
      return (
        <h2
          id={id}
          className={cn(
            "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-foreground",
            className
          )}
          {...props}
        >
          {children}
        </h2>
      )
    },
    h3: ({ className, children, ...props }) => {
      const id = typeof children === 'string' 
        ? children.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()
        : ''
      
      return (
        <h3
          id={id}
          className={cn(
            "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-foreground",
            className
          )}
          {...props}
        >
          {children}
        </h3>
      )
    },
    h4: ({ className, children, ...props }) => {
      const id = typeof children === 'string' 
        ? children.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()
        : ''
      
      return (
        <h4
          id={id}
          className={cn(
            "mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-foreground",
            className
          )}
          {...props}
        >
          {children}
        </h4>
      )
    },
    
    // Párrafos con espaciado optimizado
    p: ({ className, ...props }) => (
      <p
        className={cn("leading-7 [&:not(:first-child)]:mt-6 text-foreground/90", className)}
        {...props}
      />
    ),
    
    // Listas con estilos modernos
    ul: ({ className, ...props }) => (
      <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("leading-7", className)} {...props} />
    ),
    
    // Enlaces con estilos consistentes
    a: ({ className, ...props }) => (
      <a
        className={cn("font-medium text-[#BF7F11] underline underline-offset-4 hover:text-[#BF7F11]/80", className)}
        {...props}
      />
    ),
    
    // Código inline y bloques
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4",
          className
        )}
        {...props}
      />
    ),
    
    // Blockquotes con estilo moderno
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "mt-6 border-l-4 border-[#BF7F11] pl-6 italic text-foreground/80",
          className
        )}
        {...props}
      />
    ),
    
    // Tablas responsivas
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn("w-full", className)} {...props} />
      </div>
    ),
    tr: ({ className, ...props }) => (
      <tr
        className={cn(
          "m-0 border-t p-0 even:bg-muted",
          className
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
          className
        )}
        {...props}
      />
    ),
    
    // Componentes personalizados para SEO y UX
    Alert: ({ children, type = "info", ...props }) => {
      const icons = {
        info: Info,
        warning: AlertTriangle,
        success: CheckCircle,
      }
      const Icon = icons[type as keyof typeof icons]
      
      return (
        <Alert className="my-6" {...props}>
          <Icon className="h-4 w-4" />
          <AlertDescription>{children}</AlertDescription>
        </Alert>
      )
    },
    
    Card: ({ children, className, ...props }) => (
      <Card className={cn("my-6", className)} {...props}>
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    ),
    
    Badge: ({ children, variant = "default", className, ...props }) => (
      <Badge variant={variant as any} className={cn("mr-2 mb-2", className)} {...props}>
        {children}
      </Badge>
    ),
    
    // Componente para destacar información importante
    Callout: ({ children, type = "info", ...props }) => {
      const styles = {
        info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200",
        warning: "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200",
        error: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-200",
      }
      
      return (
        <div
          className={cn(
            "my-6 rounded-lg border p-4",
            styles[type as keyof typeof styles]
          )}
          {...props}
        >
          {children}
        </div>
      )
    },
  }
}
