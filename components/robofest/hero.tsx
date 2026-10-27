import Image from 'next/image'
import { ArrowDownRight, ArrowRight, Calendar, MapPin } from 'lucide-react'
import { FEST } from '@/lib/robofest-data'
import { Countdown } from './countdown'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-blueprint pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-8 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="flex flex-col justify-center gap-8 lg:col-span-7">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="size-2 animate-blink bg-primary" aria-hidden="true" />
            ROBOTiX Club · NIT Raipur presents
          </p>

          <div>
            <h1 className="text-balance text-6xl font-bold leading-[0.85] tracking-tighter sm:text-8xl xl:text-[9rem]">
              ROBO
              <br />
              FEST<span className="text-primary">{"'27"}</span>
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Two days. Seven events. One arena where metal meets mind. Build it, code it, race it —
              and watch it fight back.
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            <li className="flex items-center gap-2">
              <Calendar className="size-4 text-primary" aria-hidden="true" />
              {FEST.dateLabel}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {FEST.venue}
            </li>
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="#register"
              className="group inline-flex items-center gap-3 bg-primary px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Register your team
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#events"
              className="inline-flex items-center gap-3 border border-border px-6 py-4 font-mono text-sm font-bold uppercase tracking-widest transition-colors hover:border-foreground"
            >
              Explore events
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card">
            <Image
              src="/images/hero-robot.png"
              alt="Industrial humanoid robot with a glowing orange sensor eye"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
              <div className="h-1/3 w-full animate-scan bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
            </div>
            <span className="absolute left-3 top-3 bg-background/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest">
              Unit RF-27 · Online
            </span>
            {['left-0 top-0 border-l-2 border-t-2', 'right-0 top-0 border-r-2 border-t-2', 'bottom-0 left-0 border-b-2 border-l-2', 'bottom-0 right-0 border-b-2 border-r-2'].map(
              (pos) => (
                <span key={pos} className={`absolute size-5 border-primary ${pos}`} aria-hidden="true" />
              ),
            )}
          </div>
          <div className="mt-4">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-primary">
              {'// Systems boot in'}
            </p>
            <Countdown target={FEST.startsAt} />
          </div>
        </div>
      </div>
    </section>
  )
}
