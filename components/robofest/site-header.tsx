'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { FEST } from '@/lib/robofest-data'
import { Logo } from './logo'

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#events', label: 'Events' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="ROBOTiX Club home">
          <Logo className="size-8 text-primary" />
          <span className="font-mono text-sm font-bold tracking-widest">
            ROBOT<span className="text-primary">i</span>X
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#register"
            className="hidden bg-primary px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Register
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid size-10 place-items-center border border-border md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {[...NAV, { href: '#register', label: 'Register' }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 font-mono text-sm uppercase tracking-widest last:border-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="px-4 pb-4 font-mono text-xs text-muted-foreground">
            {FEST.dateLabel} · {FEST.venue}
          </p>
        </nav>
      )}
    </header>
  )
}
