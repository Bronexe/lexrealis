# Lex Realis - Sitio Web Legal

Sitio web profesional para Lex Realis, estudio jurídico especializado en derecho inmobiliario, administración de edificios y servicios a corredores de propiedades.

## Características

- **Next.js 15** con App Router
- **TypeScript** para type safety
- **Tailwind CSS v4** para estilos
- **shadcn/ui** para componentes
- **Framer Motion** para animaciones
- **React Hook Form** con validación Zod
- **Responsive Design** optimizado para móviles

## Instalación

1. Clona el repositorio
2. Instala las dependencias:

\`\`\`bash
npm install
\`\`\`

3. Ejecuta el servidor de desarrollo:

\`\`\`bash
npm run dev
\`\`\`

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## Estructura del Proyecto

\`\`\`
lex-realis/
├── app/                    # App Router de Next.js
│   ├── administradores/    # Página de servicios para administradores
│   ├── corredores-agentes/ # Página de servicios para corredores
│   ├── casos/             # Casos de éxito
│   ├── recursos/          # Recursos legales
│   ├── nosotros/          # Página sobre la empresa
│   ├── contacto/          # Formulario de contacto
│   └── legal/             # Páginas legales (privacidad, términos)
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de shadcn/ui
│   └── ...               # Componentes específicos del proyecto
├── hooks/                # Custom hooks
├── lib/                  # Utilidades
└── public/              # Archivos estáticos
\`\`\`

## Páginas Principales

- **Inicio**: Hero section con navegación a servicios
- **Administradores**: Servicios para administración de edificios
- **Corredores**: Servicios para corredores e inmobiliarias
- **Casos de Éxito**: Testimonios y resultados
- **Recursos**: Guías y plantillas legales
- **Nosotros**: Información sobre el equipo
- **Contacto**: Formulario de consulta

## Componentes Destacados

- **Hero Section**: Sección principal con animaciones
- **Apple Cards Carousel**: Carrusel interactivo
- **Navbar Menu**: Navegación con efectos hover
- **Lead Banner**: Formulario de descarga de recursos
- **Audience Switcher**: Cards interactivas para selección de perfil

## Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linter de código

## Configuración

El proyecto está configurado con:
- Color primario: #BF7F11 (dorado legal)
- Fuente: Inter
- Responsive breakpoints estándar de Tailwind
- Modo oscuro habilitado

## Despliegue

El proyecto está optimizado para despliegue en Vercel:

1. Conecta tu repositorio a Vercel
2. Las variables de entorno se configuran automáticamente
3. El build se ejecuta automáticamente en cada push

## Contacto

Para consultas sobre el desarrollo: contacto@lexrealis.com
