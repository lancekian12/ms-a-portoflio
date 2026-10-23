type Props = {
  size?: number;
  className?: string;
  title?: string;
};

// "MS.A" seal: thin double ring like an audit stamp.
export function Monogram({ size = 40, className, title }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <circle cx="32" cy="32" r="31" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle
        cx="32"
        cy="32"
        r="27"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.55"
      />
      <text
        x="32"
        y="33"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontSize: 18,
          fontWeight: 400,
          letterSpacing: "0.2px",
        }}
      >
        MS<tspan fill="var(--sage)">.</tspan>A
      </text>
    </svg>
  );
}
