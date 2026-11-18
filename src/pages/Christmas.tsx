import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Gift, Sparkles, Package, Clock, Users, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { DecemberBadge, HandmadeNote, Snowfall } from "@/components/HolidayHeroDecor";
import logo from "@/assets/logo.png";
import angel from "@/assets/holiday/hanging/angel.png";
import wreath from "@/assets/holiday/hanging/wreath.png";
import snowflake from "@/assets/holiday/hanging/snowflake.png";
import cane from "@/assets/holiday/hanging/candy-cane.png";

const msg = encodeURIComponent("Hi! I'd like to book a Christmas macramé workshop for our team.");
const whatsapp = `https://wa.me/351913644619?text=${msg}`;
const telegram = "https://t.me/zhenyaryashko";

/* The four ornament photos, used as-is in the hero collage and the gallery.
   Names below are captions — edit the `name` field to rename an ornament. */
const ornaments = [
  {
    img: angel,
    name: "Angel",
    alt: "Hand-knotted macramé angel with airy cotton wings, a wooden star above and a wooden bead head, hanging from a loop",
    width: 371,
    height: 800,
    rot: "-2deg",
    dx: "0px",
    dy: "0px",
    z: 1,
  },
  {
    img: wreath,
    name: "Wreath",
    alt: "Deep red macramé wreath with a hanging loop, a wooden bead and a ribbon bow",
    width: 477,
    height: 800,
    rot: "1.5deg",
    dx: "-14px",
    dy: "10px",
    z: 2,
  },
  {
    img: snowflake,
    name: "Snowflake",
    alt: "Cream macramé snowflake with six knotted cotton arms, a hanging loop and soft fringe",
    width: 692,
    height: 800,
    rot: "2.5deg",
    dx: "10px",
    dy: "-12px",
    z: 3,
  },
  {
    img: cane,
    name: "Candy Cane",
    alt: "Macramé candy cane braided in red and cream with gold thread, a red bow and tassels",
    width: 387,
    height: 800,
    rot: "-1deg",
    dx: "-8px",
    dy: "-16px",
    z: 4,
  },
];

const timeline = [
  { time: "15 min", title: "Arrive & settle", text: "Warm drinks, choosing colours, meeting the cord." },
  { time: "90 min", title: "Knot together", text: "Step-by-step guidance — everyone makes 2–3 ornaments at their own pace." },
  { time: "15 min", title: "Wrap & reflect", text: "Kraft gift packaging, a group photo and a few words about the year." },
];

const included = [
  { icon: Package, text: "All materials, tools and festive table decor" },
  { icon: Gift, text: "Kraft gift packaging for every finished piece" },
  { icon: Users, text: "Groups of 5–15, no experience needed" },
  { icon: MapPin, text: "At your office or a cosy venue in Lisbon" },
];

const gifts = [
  { title: "Ready-made ornament sets", text: "Handmade angels, wreaths and snowflakes in gift boxes for clients and partners." },
  { title: "DIY gift kits", text: "Everything to make an ornament at home, with a printed step-by-step guide." },
  { title: "Your brand, gently", text: "Logo tags, custom ribbon colours and a personal card from your team." },
];

const Contacts = () => (
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Button variant="cta" size="lg" asChild>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" />Message on WhatsApp</a>
    </Button>
    <Button variant="outline" size="lg" asChild>
      <a href={telegram} target="_blank" rel="noopener noreferrer"><Send className="mr-2 h-5 w-5" />Message on Telegram</a>
    </Button>
  </div>
);

const TONES = ["gold", "cream", "red", "gold", "cream", "gold"] as const;

const LIGHTS = Array.from({ length: 20 }, (_, i) => ({
  tone: TONES[i % TONES.length],
  stem: 6 + ((i * 13) % 5) * 4,
  dur: 3.6 + ((i * 7) % 6) * 0.8,
  delay: (i % 5) * 0.9,
  slim: i % 3 === 1,
}));

const FairyLights = () => (
  <div className="relative mb-12 h-10 md:mb-16" aria-hidden="true">
    <div className="absolute inset-x-0 top-0 h-px bg-border" />
    <div className="absolute inset-x-0 top-0 flex items-start justify-between px-3 sm:px-6">
      {LIGHTS.map((l, i) => (
        <span key={i} className={cn("flex flex-col items-center", l.slim && "hidden sm:flex")}>
          <span className="w-px bg-border" style={{ height: `${l.stem}px` }} />
          <span
            className={cn("fairy-bulb", `fairy-bulb--${l.tone}`)}
            style={{ animationDuration: `${l.dur}s`, animationDelay: `${l.delay}s` }}
          />
        </span>
      ))}
    </div>
  </div>
);

const collageStyle = (o: (typeof ornaments)[number]): CSSProperties => ({
  ["--rot" as string]: o.rot,
  ["--dx" as string]: o.dx,
  ["--dy" as string]: o.dy,
  zIndex: o.z,
});

const Christmas = () => (
  <div className="theme-workshop paper-grain overflow-x-hidden min-h-screen bg-background text-foreground">
    <header className="absolute top-0 inset-x-0 z-20">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Knot Your Plot" className="h-10 w-auto" />
          <span className="font-display text-lg font-semibold">Knot Your Plot</span>
        </Link>
        <Button variant="cta" size="sm" asChild><a href="#book">Book a date</a></Button>
      </div>
    </header>

    {/* Hero */}
    <section className="relative isolate overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
      <Snowfall />
      <FairyLights />
      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <span className="hero-reveal inline-flex items-center gap-2 text-sm font-medium tracking-widest text-accent uppercase mb-6" style={{ animationDelay: "0ms" }}>
            <Sparkles className="h-4 w-4" /> Christmas team workshops
          </span>
          <h1 className="hero-reveal font-display text-4xl md:text-6xl font-semibold uppercase leading-tight mb-6" style={{ animationDelay: "60ms" }}>
            Let's tie up the year{" "}
            <span className="relative inline-block pb-1 text-accent">
              together.
              <svg className="absolute -bottom-2 left-0 h-6 w-full overflow-visible" viewBox="0 0 300 36" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <path
                  className="hero-cord-path"
                  d="M4 15 C42 23 78 10 119 17 C161 25 204 11 260 15"
                  pathLength={1}
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  className="hero-knot-path"
                  d="M260 15 C269 5 282 8 279 17 C276 26 261 23 264 14 C268 7 284 13 294 27"
                  pathLength={1}
                  stroke="currentColor"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>
          </h1>
          <p className="hero-reveal text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0" style={{ animationDelay: "120ms" }}>
            A warm, screen-free evening in Santa's workshop for your team. Everyone makes 2–3 macramé ornaments to take home — wrapped in kraft paper and ready to gift.
          </p>
          <div className="hero-reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ animationDelay: "180ms" }}>
            <Button variant="cta" size="lg" asChild><a href="#book">Book a December date</a></Button>
            <Button variant="outline" size="lg" asChild><a href="#gifts">Corporate gifts</a></Button>
          </div>
          <div className="hero-reveal mx-auto mt-8 grid max-w-lg grid-cols-3 border-y border-border/70 py-4 lg:mx-0" style={{ animationDelay: "240ms" }}>
            {[
              { icon: Clock, text: "2 hours" },
              { icon: Users, text: "5–15 people" },
              { icon: MapPin, text: "Lisbon" },
            ].map(({ icon: Icon, text }, index) => (
              <div key={text} className={cn("flex items-center justify-center gap-1.5 text-xs sm:text-sm", index > 0 && "border-l border-border/70")}>
                <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual: tidy collage of the four ornament photos */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="hero-warm-glow pointer-events-none absolute -inset-10 rounded-full" aria-hidden="true" />
          <DecemberBadge />
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {ornaments.map((o) => (
              <figure key={o.name} className="collage-card" style={collageStyle(o)}>
                <img
                  src={o.img}
                  alt={o.alt}
                  width={o.width}
                  height={o.height}
                  className="aspect-[3/4] w-full object-contain"
                />
              </figure>
            ))}
          </div>
          <HandmadeNote />
        </div>
      </div>
    </section>

    {/* Our ornaments */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-widest text-accent uppercase">What we make</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-4 mb-4">Our ornaments</h2>
          <p className="text-muted-foreground text-lg">Four designs in natural cotton and wood. Each guest picks 2–3 to make.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {ornaments.map((o) => (
            <figure key={o.name} className="ornament-tile group text-center">
              <div className="rounded-lg bg-card p-4 sm:p-6 border border-border/60">
                <img
                  src={o.img}
                  alt={o.alt}
                  width={o.width}
                  height={o.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-contain"
                />
              </div>
              <figcaption className="mt-4 text-sm sm:text-base font-medium tracking-wide text-foreground">
                {o.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>

    {/* Format */}
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <span className="text-sm font-medium tracking-widest text-accent uppercase">How it goes</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-4 mb-10">Two calm hours together</h2>
          <ol className="space-y-8">
            {timeline.map((t) => (
              <li key={t.title} className="flex gap-6">
                <span className="flex items-center gap-1 text-primary font-medium w-20 shrink-0"><Clock className="h-4 w-4" />{t.time}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1">{t.title}</h3>
                  <p className="text-muted-foreground">{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="bg-card rounded-lg p-8 md:p-10 shadow-sm self-start">
          <h3 className="font-display text-2xl font-semibold mb-2">In-person workshop</h3>
          <p className="text-primary font-medium mb-8">from 40 € per person · min 200 €</p>
          <ul className="space-y-5">
            {included.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Gifts */}
    <section id="gifts" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-widest text-accent uppercase">Corporate gifts</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-4 mb-4">Gifts made by hand</h2>
          <p className="text-muted-foreground text-lg">For clients, partners and teams you can't gather in one room. Price upon request.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {gifts.map((g) => (
            <div key={g.title} className="bg-card rounded-lg p-8 md:p-10 border border-border">
              <Gift className="h-6 w-6 text-accent mb-6" />
              <h3 className="font-display text-xl font-semibold mb-3">{g.title}</h3>
              <p className="text-muted-foreground">{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section id="book" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6">December dates are limited</h2>
        <p className="text-lg text-muted-foreground mb-10">Tell us your team size and preferred date — we'll reply with availability and a proposal.</p>
        <Contacts />
      </div>
    </section>

    <footer className="py-10 text-center text-sm text-muted-foreground">
      <Link to="/" className="hover:text-foreground">← Back to Knot Your Plot</Link>
    </footer>
  </div>
);

export default Christmas;
