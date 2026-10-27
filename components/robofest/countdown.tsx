'use client'

import { useEffect, useState } from 'react'

function getParts(target: number, now: number) {
  const diff = Math.max(0, target - now)
  return [
    { label: 'Days', value: Math.floor(diff / 86_400_000) },
    { label: 'Hrs', value: Math.floor((diff / 3_600_000) % 24) },
    { label: 'Min', value: Math.floor((diff / 60_000) % 60) },
    { label: 'Sec', value: Math.floor((diff / 1000) % 60) },
  ]
}

export function Countdown({ target }: { target: string }) {
  const targetMs = new Date(target).getTime()
  const [now, setNow] = useState<number | null>(null)

  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const parts = getParts(targetMs, now ?? targetMs)

  return (
    <div role="timer" aria-label="Time until ROBOFEST begins" className="grid grid-cols-4 border border-border">
      {parts.map((part, i) => (
        <div
          key={part.label}
          className={`flex flex-col gap-1 px-3 py-3 md:px-5 ${i > 0 ? 'border-l border-border' : ''}`}
        >
          <span className="font-mono text-2xl font-bold tabular-nums md:text-4xl" suppressHydrationWarning>
            {now === null ? '--' : String(part.value).padStart(2, '0')}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {part.label}
          </span>
        </div>
      ))}
    </div>
  )
}
