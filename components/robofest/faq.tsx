import { Plus } from 'lucide-react'
import { FAQS } from '@/lib/robofest-data'
import { SectionHeading } from './section-heading'

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-b border-border bg-blueprint">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-8 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-4">
          <SectionHeading id="faq-title" index="05" eyebrow="FAQ" title="Debug log." />
        </div>
        <div className="border border-border bg-background lg:col-span-8">
          {FAQS.map((f) => (
            <details key={f.q} className="group border-b border-border last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-lg font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
