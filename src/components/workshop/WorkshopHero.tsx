import type { CSSProperties } from "react";
import { Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import angelImage from "@/assets/holiday/hanging/angel.png";
import wreathImage from "@/assets/holiday/hanging/wreath.png";
import candyCaneImage from "@/assets/holiday/hanging/candy-cane.png";

const heroImages = import.meta.glob("../assets/workshop-hero.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const heroImage = Object.values(heroImages)[0] as string | undefined;

const facts = [
  { icon: Clock, label: "2 hours" },
  { icon: Users, label: "5–15 people" },
  { icon: MapPin, label: "Lisbon or your office" },
];

const hangingOrnaments = [
  {
    name: "Cream macramé angel hanging from the workshop shelf",
    image: angelImage,
    width: 371,
    height: 800,
    x: 55,
    cord: 6,
    ornamentWidth: 9,
  },
  {
    name: "Red macramé wreath hanging from the workshop shelf",
    image: wreathImage,
    width: 477,
    height: 800,
    x: 65,
    cord: 14,
    ornamentWidth: 10,
  },
  {
    name: "Red and cream macramé candy cane hanging from the workshop shelf",
    image: candyCaneImage,
    width: 387,
    height: 800,
    x: 74,
    cord: 9,
    ornamentWidth: 9,
  },
];

const WorkshopHero = () => {
  return (
    <section
      className="relative isolate min-h-[88svh] overflow-hidden bg-primary text-primary-foreground md:aspect-[2576/1438] md:min-h-0"
      aria-labelledby="workshop-title"
      style={{
        backgroundImage:
          "radial-gradient(circle at 78% 45%, hsl(var(--golden) / 0.18), transparent 38%), linear-gradient(135deg, hsl(var(--primary)), hsl(var(--workshop-pine-dark)))",
      }}
    >
      {heroImage && (
        <img
          src={heroImage}
          alt="A dark green wooden macramé workshop wall with cord spools, a workbench, a lantern and a frosted window"
          width={2576}
          height={1438}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[72%_50%] md:object-center"
        />
      )}
      <div className="workshop-hero-overlay absolute inset-0" aria-hidden="true" />

      <header className="absolute inset-x-0 top-0 z-20">
        <div className="container mx-auto flex items-center justify-between px-6 py-5 md:py-7">
          <a
            href="/workshop"
            className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            aria-label="Knot Your Plot Christmas workshops"
          >
            <img src={logo} alt="" width={720} height={720} className="h-10 w-10 object-contain" />
            <span className="font-display text-lg font-semibold">Knot Your Plot</span>
          </a>
          <Button variant="cta" size="sm" asChild>
            <a href="#book">Book a date</a>
          </Button>
        </div>
      </header>

      <div className="absolute inset-0 z-10 flex items-center justify-center md:justify-start">
        <div className="container mx-auto px-6 pb-14 pt-28 md:pb-10 md:pt-24">
          <div className="mx-auto max-w-2xl text-center md:mx-0 md:w-[48%] md:text-left">
            <p
              className="workshop-hero-enter text-xs font-semibold uppercase tracking-[0.2em] text-golden md:text-sm"
              style={{ animationDelay: "0ms" }}
            >
              Santa&apos;s workshop, Lisbon edition
            </p>
            <h1
              id="workshop-title"
              className="workshop-hero-enter mt-5 font-display text-4xl font-semibold uppercase leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "60ms" }}
            >
              Let&apos;s tie up the year together.
            </h1>
            <div className="workshop-hero-enter" style={{ animationDelay: "120ms" }}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:mx-0 md:text-lg">
                A warm, screen-free evening for your team. Everyone makes 2–3 macramé ornaments to take home,
                wrapped in kraft paper and ready to gift.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                <Button variant="cta" size="lg" asChild>
                  <a href="#book">Book a December date</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  asChild
                >
                  <a href="#gifts">Corporate gifts</a>
                </Button>
              </div>
              <div className="mt-9 grid grid-cols-3 divide-x divide-primary-foreground/20 border-y border-primary-foreground/20 py-4">
                {facts.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex min-w-0 flex-col items-center gap-2 px-2 md:flex-row md:justify-center">
                    <Icon className="h-4 w-4 shrink-0 text-golden" aria-hidden="true" />
                    <span className="text-xs leading-snug text-primary-foreground/85 sm:text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[5] hidden md:block" aria-label="Three handmade ornaments hanging from the wooden shelf">
        {hangingOrnaments.map((ornament) => (
          <div key={ornament.name}>
            <span
              className="absolute w-px bg-primary-foreground/50"
              style={{ left: `${ornament.x}%`, top: "34.5%", height: `${ornament.cord}%` }}
              aria-hidden="true"
            />
            <img
              src={ornament.image}
              alt={ornament.name}
              width={ornament.width}
              height={ornament.height}
              className="workshop-hanging-ornament absolute h-auto -translate-x-1/2"
              style={
                {
                  left: `${ornament.x}%`,
                  top: `${34.5 + ornament.cord}%`,
                  width: `${ornament.ornamentWidth}%`,
                } as CSSProperties
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkshopHero;
