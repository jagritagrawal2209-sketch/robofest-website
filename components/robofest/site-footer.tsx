import { FEST } from '@/lib/robofest-data'
import { Logo } from './logo'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#events', label: 'Events' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#register', label: 'Register' },
]

export function SiteFooter() {
  return (
    <footer className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="flex flex-col gap-4 md:col-span-5">
            <div className="flex items-center gap-3">
              <Logo className="size-10 text-primary" />
              <div>
                <p className="font-mono text-lg font-bold tracking-widest">
                  ROBOT<span className="text-primary">i</span>X CLUB
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">NIT Raipur</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              The robotics club of National Institute of Technology Raipur — building, breaking and
              rebuilding machines since day one.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary">Navigate</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-primary">Find us</h2>
            <address className="mt-4 flex flex-col gap-2 text-sm not-italic text-muted-foreground">
              <span>{FEST.venue}</span>
              <span>{FEST.dateLabel}</span>
              <a href={FEST.clubUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                robotix.nitrr.ac.in
              </a>
            </address>
          </div>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="mt-12 select-none text-center text-[22vw] font-bold leading-[0.75] tracking-tighter text-secondary"
      >
        ROBOTiX
      </p>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-4 py-6 font-mono text-xs text-muted-foreground md:flex-row md:px-8">
          <span>© 2027 ROBOTiX Club, NIT Raipur. All rights reserved.</span>
          <span>{"ROBOFEST'27 · Built by the Web & App Dev Domain"}</span>
        </div>
      </div>
    </footer>
  )
}
