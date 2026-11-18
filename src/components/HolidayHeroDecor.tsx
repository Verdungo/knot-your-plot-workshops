import type { CSSProperties } from "react";
import { Sparkles } from "lucide-react";

const SNOWFLAKES = Array.from({ length: 16 }, (_, index) => ({
  left: (index * 37 + 7) % 100,
  size: 2 + ((index * 5) % 4),
  duration: 11 + ((index * 7) % 8),
  delay: -((index * 1.7) % 15),
  drift: -30 + ((index * 17) % 61),
  diamond: index % 3 === 0,
  red: index % 5 === 0,
}));

export const Snowfall = () => (
  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
    {SNOWFLAKES.map((flake, index) => (
      <span
        key={index}
        className={`hero-sparkle${flake.diamond ? " hero-sparkle--diamond" : ""}${flake.red ? " hero-sparkle--red" : ""}`}
        style={{
          left: `${flake.left}%`,
          width: `${flake.size}px`,
          height: `${flake.size}px`,
          animationDuration: `${flake.duration}s`,
          animationDelay: `${flake.delay}s`,
          "--sparkle-drift": `${flake.drift}px`,
        } as CSSProperties}
      />
    ))}
  </div>
);

export const DecemberBadge = () => (
  <div
    className="absolute -right-2 -top-8 z-20 h-20 w-20 rounded-full border border-accent/25 bg-card/90 shadow-soft sm:-right-6 sm:h-24 sm:w-24 lg:-right-8 lg:-top-6"
    role="img"
    aria-label="Limited December dates"
  >
    <svg className="hero-badge-rotate h-full w-full" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <path id="december-badge-circle" d="M 60,60 m -43,0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0" />
      </defs>
      <text fill="hsl(var(--accent))" fontSize="10" fontWeight="600" letterSpacing="1.4">
        <textPath href="#december-badge-circle" startOffset="2%">LIMITED DECEMBER DATES ✦</textPath>
      </text>
    </svg>
    <Sparkles className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-accent" aria-hidden="true" />
  </div>
);

export const HandmadeNote = () => (
  <div className="hero-handnote absolute -bottom-10 left-0 z-20 w-28 -rotate-6 text-center text-accent sm:-left-10 sm:bottom-0 lg:-left-20 lg:bottom-8">
    <span>Pick your<br />favourites!</span>
    <svg
      className="absolute -top-11 left-[68%] h-12 w-16 overflow-visible"
      viewBox="0 0 64 48"
      fill="none"
      aria-hidden="true"
    >
      <path d="M4 43 C25 43 45 30 49 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M41 14 L50 6 L53 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);
