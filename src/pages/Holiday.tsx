import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Gift, Sparkles, Package, Clock, Users, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import flatlay from "@/assets/holiday/santa-workshop-flatlay.jpg.asset.json";
import angel from "@/assets/holiday/angel.jpg";
import tree from "@/assets/holiday/tree.jpg";
import ring from "@/assets/holiday/ring.jpg";
import cane from "@/assets/holiday/cane.jpg";
import snowflake from "@/assets/holiday/snowflake.jpg";
import santa from "@/assets/holiday/santa.jpg";

const msg = encodeURIComponent("Hi! I'd like to book a Christmas macramé workshop for our team.");
const whatsapp = `https://wa.me/351913644619?text=${msg}`;
const telegram = "https://t.me/zhenyaryashko";

const ornaments = [
  { img: tree, title: "Mini Tree", text: "A simple knotted fir with a wooden star. Hang it, or tie it onto a gift." },
  { img: ring, title: "Wreath", text: "A natural wooden ring dressed in soft knots and a terracotta ribbon." },
  { img: angel, title: "Christmas Angel", text: "Airy cotton wings and a wooden bead head — a quiet keepsake for the tree." },
  { img: cane, title: "Candy Cane", text: "Cream and terracotta spirals — a sweet classic, knotted by hand." },
  { img: snowflake, title: "Snowflake", text: "Six soft cotton arms with little fringes. No two turn out the same." },
  { img: santa, title: "Santa", text: "A cosy knotted hat, a fluffy cotton beard and a wooden bead nose." },
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
  { title: "Ready-made ornament sets", text: "Handmade angels, trees and wreaths in gift boxes for clients and partners." },
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

const Holiday = () => (
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
    <section className="pt-28 pb-20 md:pt-32 md:pb-28">
      <FairyLights />
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest text-accent uppercase mb-6">
            <Sparkles className="h-4 w-4" /> Christmas team workshops
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold uppercase leading-tight mb-6">
            Let's tie up the year <span className="text-accent">together.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0">
            A warm, screen-free evening in Santa's workshop for your team. Everyone makes 2–3 macramé ornaments to take home — wrapped in kraft paper and ready to gift.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="cta" size="lg" asChild><a href="#book">Book a December date</a></Button>
            <Button variant="outline" size="lg" asChild><a href="#gifts">Corporate gifts</a></Button>
          </div>
        </div>
        <div className="relative max-w-md mx-auto w-full">
          <div className="hero-warm-glow pointer-events-none absolute -inset-10 rounded-full" aria-hidden="true" />
          <div className="absolute -inset-3 rotate-2 rounded-lg bg-secondary" aria-hidden="true" />
          <img src={flatlay.url} alt="Macramé Santa, wreath and candy cane on kraft paper" width={960} height={1280} className="relative w-full aspect-[3/4] object-cover rounded-lg -rotate-1 shadow-elevated" />
        </div>
      </div>
    </section>

    {/* Ornaments */}
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-widest text-accent uppercase">What we make</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-4 mb-4">Choose your ornaments</h2>
          <p className="text-muted-foreground text-lg">Six designs in natural cotton and wood. Each guest picks 2–3 to make.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ornaments.map((o) => (
            <article key={o.title} className="group">
              <div className="overflow-hidden rounded-lg mb-5 bg-secondary">
                <img src={o.img} alt={o.title} loading="lazy" width={800} height={1008} className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">{o.title}</h3>
              <p className="text-muted-foreground">{o.text}</p>
            </article>
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

export default Holiday;
