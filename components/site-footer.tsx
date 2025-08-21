import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img 
                src="/Logo-Lex-Realis.png" 
                alt="LexRealis Abogados" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Tu respaldo legal en administración de edificios y negocios inmobiliarios.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/administradores" className="text-muted-foreground hover:text-primary">
                  Administradores
                </Link>
              </li>
              <li>
                <Link href="/corredores-inmobiliarias" className="text-muted-foreground hover:text-primary">
                  Corredores e Inmobiliarias
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nosotros" className="text-muted-foreground hover:text-primary">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-primary">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/legal/privacidad" className="text-muted-foreground hover:text-primary">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/terminos" className="text-muted-foreground hover:text-primary">
                  Términos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+56 9 6618 8788</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contacto@lexrealis.cl</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Reñaca Norte 25, Oficina 812, Viña del Mar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Lex Realis. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
