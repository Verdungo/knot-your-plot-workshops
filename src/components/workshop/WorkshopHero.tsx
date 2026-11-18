import type { CSSProperties } from "react";
import { Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const portraitHeroImages = import.meta.glob("../../assets/workshop-hero-portrait.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const landscapeHeroImages = import.meta.glob("../../assets/workshop-hero.{jpg,jpeg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

const portraitHeroImage = Object.values(portraitHeroImages)[0] as string | undefined;
const landscapeHeroImage = Object.values(landscapeHeroImages)[0] as string | undefined;
const heroImage = portraitHeroImage ?? landscapeHeroImage;

// Keep the portrait as the default everywhere; enable this to prefer an optional landscape crop on desktop.
const useLandscapeOnDesktop = false;

const facts = [
  { icon: Clock, label: "2 hours" },
  { icon: Users, label: "5–15 people" },
  { icon: MapPin, label: "Lisbon or your office" },
];

const workshopHeroStyles = `
  .workshop-hero-image {
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 13%, black 100%);
    mask-image: linear-gradient(to bottom, transparent 0%, black 13%, black 100%);
  }
  @media (min-width: 1024px) {
    .workshop-hero-copy {
      padding-left: max(1.5rem, calc((100vw - 1280px) / 2 + 1.5rem));
    }
    .workshop-hero-image {
      -webkit-mask-image: linear-gradient(to right, transparent 0%, black 20%, black 100%);
      mask-image: linear-gradient(to right, transparent 0%, black 20%, black 100%);
    }
  }
`;

const WorkshopHero = () => {
  return (
    <section
      className="workshop-hero relative isolate overflow-hidden bg-[hsl(var(--workshop-hero-background))] text-primary-foreground"
      aria-labelledby="workshop-title"
      style={
        {
          "--workshop-hero-background": "150 23.333% 11.765%",
          backgroundImage: heroImage
            ? undefined
            : "radial-gradient(circle at 78% 45%, hsl(var(--golden) / 0.18), transparent 38%), linear-gradient(135deg, hsl(var(--workshop-hero-background)), hsl(var(--workshop-pine-dark)))",
        } as CSSProperties
      }
    >
      <style>{workshopHeroStyles}</style>

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

      <div className="relative z-10 lg:min-h-[780px]">
        <div className="relative z-10 flex items-center justify-center pb-14 pt-32 text-center lg:min-h-[780px] lg:w-[42%] lg:justify-start lg:pb-20 lg:pt-36 lg:text-left">
          <div className="workshop-hero-copy mx-auto w-full max-w-2xl px-6 lg:mx-0 lg:max-w-none lg:pr-10 xl:pr-16">
            <p
              className="workshop-hero-enter text-xs font-semibold uppercase tracking-[0.2em] text-golden md:text-sm"
              style={{ animationDelay: "0ms" }}
            >
              Santa&apos;s workshop, Lisbon edition
            </p>
            <h1
              id="workshop-title"
              className="workshop-hero-enter mt-5 font-display text-4xl font-semibold uppercase leading-[1.08] text-primary-foreground sm:text-5xl lg:text-5xl xl:text-6xl"
              style={{ animationDelay: "60ms" }}
            >
              Let&apos;s tie up the year together.
            </h1>
            <div className="workshop-hero-enter" style={{ animationDelay: "120ms" }}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg lg:mx-0">
                A warm, screen-free evening for your team. Everyone makes 2–3 macramé ornaments to take home,
                wrapped in kraft paper and ready to gift.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
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
                  <div key={label} className="flex min-w-0 flex-col items-center gap-2 px-2 xl:flex-row xl:justify-center">
                    <Icon className="h-4 w-4 shrink-0 text-golden" aria-hidden="true" />
                    <span className="text-xs leading-snug text-primary-foreground/85 sm:text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {heroImage && (
          <div className="relative aspect-[4/5] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[58%]">
            <picture className="block h-full w-full">
              {useLandscapeOnDesktop && landscapeHeroImage && (
                <source media="(min-width: 1024px)" srcSet={landscapeHeroImage} />
              )}
              <img
                src={portraitHeroImage ?? landscapeHeroImage}
                alt="A dark green wooden workshop wall with cord spools on a shelf, three hanging macramé ornaments, a glowing lantern and a frosted window"
                width={1547}
                height={1920}
                {...{ fetchpriority: "high" }}
                className="workshop-hero-image h-full w-full object-cover object-[60%_40%] lg:object-[50%_42%]"
              />
            </picture>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkshopHero;
