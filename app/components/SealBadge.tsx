// Rotating audit-stamp seal: circular legend around the AS monogram.
export function SealBadge({ size = 132, className = "" }: { size?: number; className?: string }) {
  const legend = "CPA · CIA · FINANCE EXECUTIVE · EST. 2006 · ";
  return (
    <div className={`seal ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="seal-ring">
        <defs>
          <path id="seal-circle" d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0" />
        </defs>
        <text className="seal-text">
          <textPath href="#seal-circle" textLength="295">
            {legend}
          </textPath>
        </text>
      </svg>
      <svg viewBox="0 0 120 120" className="seal-core">
        <circle cx="60" cy="60" r="58.5" fill="none" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="60" cy="60" r="36" fill="none" stroke="currentColor" strokeWidth="0.75" />
        <text
          x="60"
          y="62"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="currentColor"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 28 }}
        >
          AS
        </text>
      </svg>
    </div>
  );
}
