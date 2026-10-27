export function SectionHeading({
  index,
  eyebrow,
  title,
  id,
}: {
  index: string
  eyebrow: string
  title: React.ReactNode
  id?: string
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
        <span>{index}</span>
        <span className="h-px w-10 bg-primary" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2 id={id} className="text-balance text-4xl font-bold leading-none tracking-tight md:text-6xl">
        {title}
      </h2>
    </div>
  )
}
