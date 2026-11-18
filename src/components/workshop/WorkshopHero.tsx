import { Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import landscapeImage from "@/assets/workshop-hero-landscape.jpg";
import portraitImage from "@/assets/workshop-hero-portrait.jpg";

const facts = [
  { icon: Clock, label: "2 hours" },
  { icon: Users, label: "5–15 people" },
  { icon: MapPin, label: "Lisbon or your office" },
];

const heroStyles = `
  .wk-hero { --wk-cream: #F5EFE0; --wk-ink: #2C2018; --wk-red: #B3262E; --wk-pine: #1F3A2E; --wk-gold: #A67828; }
  .wk-hero .wk-cream-bg { background: var(--wk-cream); }
  .wk-hero .wk-ink { color: var(--wk-ink); }
  .wk-hero .wk-muted { color: rgb(44 32 24 / 0.75); }
  .wk-hero .wk-red { color: var(--wk-red); }
  .wk-hero .wk-gold { color: var(--wk-gold); }
  .wk-hero .wk-outline { border: 1px solid var(--wk-pine); color: var(--wk-pine); background: transparent; }
  .wk-hero .wk-outline:hover { background: rgb(31 58 46 / 0.08); color: var(--wk-pine); }
  .wk-hero .wk-divide > * + * { border-left: 1px solid rgb(44 32 24 / 0.18); }
  .wk-hero .wk-facts { border-top: 1px solid rgb(44 32 24 / 0.18); border-bottom: 1px solid rgb(44 32 24 / 0.18); }
  .wk-hero .wk-photo { height: auto; aspect-ratio: 4 / 5; }
  .wk-hero .wk-card { margin-top: -48px; border-radius: 24px 24px 0 0; }
  @media (min-width: 1024px) {
    .wk-hero .wk-stage { position: relative; height: min(86svh, 56vw); }
    .wk-hero .wk-photo { position: absolute; inset: 0; height: 100%; aspect-ratio: auto; }
    .wk-hero .wk-card-wrap { position: absolute; inset: 0; display: flex; align-items: center; padding-left: 4vw; }
    .wk-hero .wk-card { margin-top: 0; max-width: 560px; border-radius: 24px; padding: 46px; box-shadow: 0 24px 60px rgba(0,0,0,0.28); }
  }
`;

const WorkshopHero = () => (
  <section className="wk-hero relative" aria-labelledby="workshop-title">
    <style>{heroStyles}</style>

    <header className="wk-cream-bg wk-ink relative z-20">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="/workshop" className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Knot Your Plot Christmas workshops">
          <img src={logo} alt="" width={720} height={720} className="h-10 w-10 object-contain" />
          <span className="font-display text-lg font-semibold">Knot Your Plot</span>
        </a>
        <Button variant="cta" size="sm" asChild>
          <a href="#book">Book a date</a>
        </Button>
      </div>
    </header>

    <div className="wk-stage">
      <picture className="block">
        <source media="(min-width: 1024px)" srcSet={landscapeImage} width={2016} height={1512} />
        <img
          src={portraitImage}
          alt="Handmade macramé ornaments on kraft paper: a cream wreath, a red Santa gnome with a white fringe beard and a red-and-white candy cane, with cord, clothespins and a pinecone"
          width={1512}
          height={2016}
          {...{ fetchpriority: "high" }}
          className="wk-photo block w-full object-cover object-[50%_35%]"
        />
      </picture>

      <div className="wk-card-wrap relative z-10">
        <div className="wk-card wk-cream-bg relative w-full px-6 pb-12 pt-10 text-center sm:px-10 lg:text-left">
          <p className="workshop-hero-enter wk-gold text-xs font-semibold uppercase tracking-[0.2em] md:text-sm" style={{ animationDelay: "0ms" }}>
            Santa&apos;s workshop, Lisbon edition
          </p>
          <h1 id="workshop-title" className="workshop-hero-enter wk-ink mt-4 font-display text-4xl font-semibold uppercase leading-[1.08] sm:text-5xl" style={{ animationDelay: "60ms" }}>
            Let&apos;s tie up the year <span className="wk-red">together.</span>
          </h1>
          <div className="workshop-hero-enter" style={{ animationDelay: "120ms" }}>
            <p className="wk-muted mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg lg:mx-0">
              A warm, screen-free evening for your team. Everyone makes 2–3 macramé ornaments to take home,
              wrapped in kraft paper and ready to gift.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button variant="cta" size="lg" asChild>
                <a href="#book">Book a December date</a>
              </Button>
              <Button variant="outline" size="lg" className="wk-outline" asChild>
                <a href="#gifts">Corporate gifts</a>
              </Button>
            </div>
            <div className="wk-facts wk-divide mt-8 grid grid-cols-3 py-4">
              {facts.map(({ icon: Icon, label }) => (
                <div key={label} className="flex min-w-0 flex-col items-center gap-2 px-2 xl:flex-row xl:justify-center">
                  <Icon className="wk-red h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="wk-ink text-xs leading-snug sm:text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WorkshopHero;
