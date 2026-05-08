import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SectionTitleProps {
  title: string
  href?: string
  className?: string
}

export function SectionTitle({ title, href, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex items-center justify-between border-b-2 border-primary pb-2 mb-4 ${className}`}>
      <h2 className="font-serif text-xl font-bold text-foreground">{title}</h2>
      {href && (
        <Link 
          href={href}
          className="text-sm text-primary font-medium flex items-center gap-1 hover:underline"
        >
          Voir tout
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}
