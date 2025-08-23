"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  readTime: string;
  featured?: boolean;
}

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

interface BlogCardsProps {
  posts: BlogPost[];
}

export default function BlogCards({ posts }: BlogCardsProps) {
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

  // Colores corporativos para los posts
  const bgColors = [
    "bg-gradient-to-br from-[#BF7F11] to-[#A66B0F]",
    "bg-gradient-to-br from-[#BF7F11]/90 to-[#A66B0F]/90",
    "bg-gradient-to-br from-[#BF7F11]/80 to-[#A66B0F]/80",
    "bg-gradient-to-br from-[#BF7F11]/70 to-[#A66B0F]/70"
  ];

  // Función para obtener la imagen del autor basada en el nombre
  const getAuthorImage = (authorName: string) => {
    const author = abogados.find(abogado => abogado.name === authorName);
    return author ? author.image : "/placeholder-user.jpg";
  };

  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {posts.map((post, index) => (
        <BlogCard
          key={post.slug}
          title={post.title}
          description={post.description}
          author={{
            name: post.author,
            image: getAuthorImage(post.author)
          }}
          readTime={post.readTime}
          slug={post.slug}
          category={post.category}
          bgColor={bgColors[index % bgColors.length]}
        />
      ))}
    </div>
  );
}
