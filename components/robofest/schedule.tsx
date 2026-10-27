import { EVENTS } from '@/lib/robofest-data'
import { SectionHeading } from './section-heading'

const DAYS = [
  { day: 1 as const, date: '20 Mar', title: 'Ignition' },
  { day: 2 as const, date: '21 Mar', title: 'Overdrive' },
]

export function Schedule() {
  return (
    <section id="schedule" aria-labelledby="schedule-title" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-28">
        <SectionHeading
          id="schedule-title"
          index="03"
          eyebrow="Schedule"
          title={
            <>
              48 hours on the <span className="text-primary">assembly line.</span>
            </>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {DAYS.map(({ day, date, title }) => (
            <div key={day} className="border border-border">
              <div className="flex items-baseline justify-between border-b border-border bg-secondary px-5 py-4">
                <h3 className="text-2xl font-bold tracking-tight">
                  Day 0{day} <span className="text-muted-foreground">— {title}</span>
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-primary">{date}</span>
              </div>
              <ol>
                {EVENTS.filter((e) => e.day === day).map((e) => (
                  <li
                    key={e.id}
                    className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-border px-5 py-4 last:border-b-0 sm:grid-cols-[10rem_1fr]"
                  >
                    <span className="font-mono text-xs leading-6 text-muted-foreground">{e.time}</span>
                    <div>
                      <p className="font-bold">{e.name}</p>
                      <p className="text-sm text-muted-foreground">{e.category}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
