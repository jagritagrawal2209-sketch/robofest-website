import Image from 'next/image'
import { Cpu, Swords, Users } from 'lucide-react'
import { FEST, STATS } from '@/lib/robofest-data'
import { SectionHeading } from './section-heading'

const PILLARS = [
  { icon: Swords, title: 'Compete', text: 'Combat, racing and soccer arenas built for self-made machines.' },
  { icon: Cpu, title: 'Create', text: 'Hackathons and coding sprints on drones, rovers and embedded systems.' },
  { icon: Users, title: 'Connect', text: 'Meet builders, mentors and teams from colleges across India.' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-8 lg:grid-cols-12 lg:py-28">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <SectionHeading
            id="about-title"
            index="01"
            eyebrow="About"
            title={
              <>
                {"Central India's"} <span className="text-primary">loudest</span> robotics festival.
              </>
            }
          />
          <div className="flex max-w-2xl flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              ROBOFEST is the flagship robotics festival of ROBOTiX Club, NIT Raipur — held as part of{' '}
              {FEST.parentFest}, the institute&apos;s annual tech fest. It brings together student
              engineers who would rather build something than talk about it.
            </p>
            <p>
              From 24-hour drone hackathons to sparks-flying combat arenas, every event is designed to
              test what you can design, wire, code and drive under pressure.
            </p>
          </div>

          <ul className="grid gap-px border border-border bg-border sm:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex flex-col gap-3 bg-background p-5">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="font-mono text-sm font-bold uppercase tracking-widest">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden border border-border">
            <Image
              src="/images/workshop.png"
              alt="Students soldering a robot circuit board in the ROBOTiX workshop"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover grayscale transition duration-500 hover:grayscale-0"
            />
          </div>
          <dl className="grid grid-cols-2 gap-px border border-border bg-border">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-1 bg-background p-5">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</dt>
                <dd className="text-4xl font-bold tracking-tight">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
