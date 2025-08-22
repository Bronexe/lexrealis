"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  author: {
    name: string;
    image: string;
  };
  readTime: string;
  slug: string;
  category: string;
  bgColor: string;
}

function BlogCard({ title, description, author, readTime, slug, category, bgColor }: BlogCardProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <Link href={`/blog/${slug}`}>
        <div
          className={cn(
            "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4 transition-all duration-300 hover:scale-105",
            bgColor
          )}
        >
          {/* Category Badge */}
          <div className="relative z-10 flex justify-end">
            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
              {category}
            </span>
          </div>

          {/* Author Info */}
          <div className="flex flex-row items-center space-x-4 z-10">
            <img
              height="100"
              width="100"
              alt={`Avatar de ${author.name}`}
              src={author.image}
              className="h-10 w-10 rounded-full border-2 border-white/50 object-cover"
            />
            <div className="flex flex-col">
              <p className="font-normal text-base text-white relative z-10">
                {author.name}
              </p>
              <p className="text-sm text-gray-200">{readTime}</p>
            </div>
          </div>

          {/* Content */}
          <div className="text content">
            <h1 className="font-bold text-xl md:text-2xl text-white relative z-10">
              {title}
            </h1>
            <p className="font-normal text-sm text-gray-100 relative z-10 my-4 line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function BlogCards() {
  // Abogados del equipo Lex Realis
  const abogados = [
    {
      name: "Cristóbal Zaror Faggioni",
      image: "/cristobal-zaror-faggioni.png"
    },
    {
      name: "Matías Sánchez Strange",
      image: "/matias-sanchez-strange.png"
    },
    {
      name: "Juan Ferrer Williams",
      image: "/juan-ferrer-williams.png"
    },
    {
      name: "Sebastián León Sánchez",
      image: "/sebastian-leon-sanchez.png"
    },
    {
      name: "Melanie Moraga Villanueva",
      image: "/melanie-moraga-villanueva.png"
    }
  ];

  // Posts de ejemplo con autores alternados y colores corporativos
  const posts = [
    {
      title: "Guía Completa: Cómo ser Administrador de Condominios en Chile",
      description: "Todo lo que necesitas saber para convertirte en administrador de condominios en Chile. Requisitos legales, proceso de inscripción, obligaciones y marco normativo vigente.",
      readTime: "12 min",
      slug: "guia-administrador-condominios-chile",
      category: "Administradores",
      bgColor: "bg-gradient-to-br from-[#BF7F11] to-[#A66B0F]"
    },
    {
      title: "Asambleas de Copropietarios: Quórums y Ley 21.442",
      description: "Análisis completo de los nuevos quórums establecidos en la Ley 21.442 para asambleas de copropietarios y su impacto en la administración de condominios.",
      readTime: "8 min",
      slug: "asambleas-copropietarios-quorums-ley-21442",
      category: "Copropiedad",
      bgColor: "bg-gradient-to-br from-[#BF7F11]/90 to-[#A66B0F]/90"
    },
    {
      title: "Cobro de Gastos Comunes en Chile 2025",
      description: "Actualización completa sobre los procedimientos de cobro de gastos comunes, incluyendo las nuevas normativas y mejores prácticas para administradores.",
      readTime: "10 min",
      slug: "cobro-gastos-comunes-chile-2025",
      category: "Administradores",
      bgColor: "bg-gradient-to-br from-[#BF7F11]/80 to-[#A66B0F]/80"
    },

  ];

  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((post, index) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          description={post.description}
          author={abogados[index % abogados.length]}
          readTime={post.readTime}
          slug={post.slug}
          category={post.category}
          bgColor={post.bgColor}
        />
      ))}
    </div>
  );
}
