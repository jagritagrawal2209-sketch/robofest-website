import { ArrowUpRight } from 'lucide-react'
import { FEST } from '@/lib/robofest-data'

const STEPS = [
  { n: '01', title: 'Assemble your crew', text: 'Form a team of 1 — 4 builders. Cross-college teams welcome.' },
  { n: '02', title: 'Pick your events', text: 'Register for one or many — just avoid schedule clashes.' },
  { n: '03', title: 'Build & show up', text: 'Bring your bot, your laptop and your best ideas to NIT Raipur.' },
]

export function Register() {
  return (
    <section id="register" aria-labelledby="register-title" className="border-b border-border">
      <div className="h-3 bg-hazard" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-7">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              <span>04</span>
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              <span>Registration open</span>
            </p>
            <h2 id="register-title" className="text-balance text-5xl font-bold leading-[0.9] tracking-tighter md:text-7xl">
              Your bot is waiting. <span className="text-primary">Are you?</span>
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              Slots in combat and racing events are limited by arena time. Lock in your team early and
              get rulebooks, updates and accommodation details straight to your inbox.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={FEST.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-primary px-8 py-5 font-mono text-sm font-bold uppercase tracking-widest text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Register now
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" aria-hidden="true" />
              </a>
              <a
                href="#events"
                className="inline-flex items-center border border-border px-8 py-5 font-mono text-sm font-bold uppercase tracking-widest transition-colors hover:border-foreground"
              >
                View rulebooks
              </a>
            </div>
          </div>

          <ol className="flex flex-col border border-border lg:col-span-5">
            {STEPS.map((s) => (
              <li key={s.n} className="flex gap-5 border-b border-border p-6 last:border-b-0">
                <span className="font-mono text-3xl font-bold text-primary">{s.n}</span>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
