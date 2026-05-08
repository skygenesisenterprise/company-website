import Link from "next/link"
import Image from "next/image"

interface ArticleCardProps {
  title: string
  excerpt?: string
  category?: string
  categoryColor?: string
  image?: string
  author?: string
  date: string
  href: string
  variant?: "featured" | "horizontal" | "vertical" | "compact"
}

export function ArticleCard({
  title,
  excerpt,
  category,
  categoryColor = "bg-primary",
  image,
  author,
  date,
  href,
  variant = "vertical",
}: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <Link href={href} className="group block">
        <article className="relative overflow-hidden rounded-sm">
          {image && (
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            {category && (
              <span className={`inline-block px-2 py-1 text-xs font-semibold text-white ${categoryColor} mb-2`}>
                {category}
              </span>
            )}
            <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2 text-balance">
              {title}
            </h2>
            {excerpt && (
              <p className="text-sm text-white/80 line-clamp-2 hidden md:block">
                {excerpt}
              </p>
            )}
          </div>
        </article>
      </Link>
    )
  }

  if (variant === "horizontal") {
    return (
      <Link href={href} className="group block">
        <article className="flex gap-4">
          {image && (
            <div className="relative w-32 h-20 md:w-40 md:h-24 shrink-0 overflow-hidden rounded-sm">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            {category && (
              <span className="text-xs font-semibold text-primary mb-1 block">
                {category}
              </span>
            )}
            <h3 className="font-serif text-base md:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-3">
              {title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{date}</p>
          </div>
        </article>
      </Link>
    )
  }

  if (variant === "compact") {
    return (
      <Link href={href} className="group block">
        <article>
          {category && (
            <span className="text-xs font-semibold text-primary mb-1 block">
              {category}
            </span>
          )}
          <h3 className="font-serif text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
            {author && <span>{author}</span>}
            {author && <span>•</span>}
            <span>{date}</span>
          </div>
        </article>
      </Link>
    )
  }

  // Default vertical variant
  return (
    <Link href={href} className="group block">
      <article>
        {image && (
          <div className="relative aspect-16/10 overflow-hidden rounded-sm mb-3">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        {category && (
          <span className="text-xs font-semibold text-primary mb-1 block">
            {category}
          </span>
        )}
        <h3 className="font-serif text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors mb-2 text-balance">
          {title}
        </h3>
        {excerpt && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {excerpt}
          </p>
        )}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          {author && <span>{author}</span>}
          {author && <span>•</span>}
          <span>{date}</span>
        </div>
      </article>
    </Link>
  )
}
