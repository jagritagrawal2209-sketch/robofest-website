export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path d="M16 2v4M8 4l2 3M24 4l-2 3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      <rect x="5" y="9" width="22" height="16" stroke="currentColor" strokeWidth="2" />
      <rect x="10" y="14" width="4" height="4" fill="currentColor" />
      <rect x="18" y="14" width="4" height="4" fill="currentColor" />
      <path d="M2 15v4M30 15v4M11 29h10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  )
}
