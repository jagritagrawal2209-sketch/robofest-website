'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Clock, Trophy } from 'lucide-react'
import { EVENTS, FEST } from '@/lib/robofest-data'
import { SectionHeading } from './section-heading'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: '1', label: 'Day 01' },
  { id: '2', label: 'Day 02' },
] as const

type FilterId = (typeof FILTERS)[number]['id']

export function Events() {
  const [filter, setFilter] = useState<FilterId>('all')
  const [activeId, setActiveId] = useState(EVENTS[0].id)

  const visible = EVENTS.filter((e) => filter === 'all' || String(e.day) === filter)
  const active = visible.find((e) => e.id === activeId) ?? visible[0]

  return (
    <section id="events" aria-labelledby="events-title" className="border-b border-border bg-blueprint">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="events-title"
            index="02"
            eyebrow="Events"
            title={
              <>
                Pick your <span className="text-primary">battleground.</span>
              </>
            }
          />
          <div role="group" aria-label="Filter events by day" className="flex border border-border bg-background">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
                className="px-4 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors aria-pressed:bg-foreground aria-pressed:text-background"
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <ul className="flex flex-col border border-border bg-background lg:col-span-5 lg:self-start">
            {visible.map((event) => {
              const isActive = event.id === active.id
              return (
                <li key={event.id} className="border-b border-border last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setActiveId(event.id)}
                    aria-controls="event-detail"
                    aria-current={isActive ? 'true' : undefined}
                    className={`group flex w-full items-center gap-4 px-5 py-4 text-left transition-colors ${
                      isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
                    }`}
                  >
                    <span className={`font-mono text-xs ${isActive ? '' : 'text-muted-foreground'}`}>
                      {event.code}
                    </span>
                    <span className="flex-1 text-xl font-bold tracking-tight">{event.name}</span>
                    <span
                      className={`hidden font-mono text-[10px] uppercase tracking-widest sm:inline ${
                        isActive ? '' : 'text-muted-foreground'
                      }`}
                    >
                      {event.category}
                    </span>
                    <ArrowUpRight
                      className={`size-4 transition-transform ${isActive ? 'rotate-45' : 'group-hover:rotate-45'}`}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              )
            })}
          </ul>

          <article
            id="event-detail"
            aria-live="polite"
            key={active.id}
            className="flex flex-col border border-border bg-background duration-300 animate-in fade-in slide-in-from-bottom-2 lg:col-span-7"
          >
            <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-card">
              {active.image ? (
                <Image
                  src={active.image}
                  alt={`${active.name} event at ROBOFEST`}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-blueprint" aria-hidden="true">
                  <span className="font-mono text-7xl font-bold tracking-tighter text-primary/80 md:text-9xl">
                    {active.code}
                  </span>
                </div>
              )}
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-widest">
                  Day 0{active.day}
                </span>
                {active.flagship && (
                  <span className="bg-primary px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    Flagship
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">{active.tagline}</p>
                <h3 className="mt-2 text-4xl font-bold tracking-tight">{active.name}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{active.description}</p>
              </div>

              <dl className="grid grid-cols-3 gap-px border border-border bg-border">
                {active.specs.map((s) => (
                  <div key={s.label} className="bg-background p-3">
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</dt>
                    <dd className="mt-1 font-bold">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
                  <span className="flex items-center gap-2">
                    <Trophy className="size-4 text-primary" aria-hidden="true" />
                    {active.prize}
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="size-4" aria-hidden="true" />
                    {active.time}
                  </span>
                </div>
                <a
                  href={FEST.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Register for {active.name}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
