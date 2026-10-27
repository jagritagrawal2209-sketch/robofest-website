import { EVENTS } from '@/lib/robofest-data'

export function Ticker() {
  const items = EVENTS.map((e) => e.name)
  return (
    <div className="overflow-hidden border-b border-border bg-primary py-3 text-primary-foreground" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0">
            {[...items, ...items].map((name, i) => (
              <li key={`${copy}-${i}`} className="flex items-center gap-6 px-6 font-mono text-sm font-bold uppercase tracking-widest">
                {name}
                <span className="size-1.5 rotate-45 bg-primary-foreground" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
