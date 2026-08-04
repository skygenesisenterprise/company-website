"use client"

import Link from "next/link"
import { Circle } from "lucide-react"

interface LiveTickerItem {
  id: string
  title: string
  time: string
  href: string
  isBreaking?: boolean
}

interface LiveTickerProps {
  items: LiveTickerItem[]
}

export function LiveTicker({ items }: LiveTickerProps) {
  return (
    <div className="bg-muted border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <Circle className="h-2 w-2 fill-primary text-primary animate-pulse" />
            <span className="text-xs font-bold text-primary uppercase tracking-wide">En continu</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="overflow-hidden flex-1">
            <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
              {items.slice(0, 5).map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center gap-2 shrink-0 group"
                >
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
