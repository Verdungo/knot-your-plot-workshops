import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { TELEGRAM_URL, WHATSAPP_URL } from "./contact";

export const SectionHeading = ({
  eyebrow,
  title,
  titleId,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  titleId: string;
  children?: ReactNode;
  centered?: boolean;
}) => (
  <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
    <h2 id={titleId} className="mt-3 font-display text-3xl font-semibold md:text-5xl">
      {title}
    </h2>
    {children}
  </div>
);

const steps = [
  {
    time: "15 min",
    title: "Arrive & settle",
    description: "Warm drinks, choosing colours, meeting the cord.",
  },
  {
    time: "90 min",
    title: "Knot together",
    description: "Step-by-step guidance, everyone makes 2–3 ornaments at their own pace.",
  },
  {
    time: "15 min",
    title: "Wrap & reflect",
    description: "Kraft gift packaging, a group photo and a few words about the year.",
  },
];

export const HowItGoes = () => (
  <section className="py-20 md:py-28" aria-labelledby="how-title">
    <div className="container mx-auto px-6">
      <SectionHeading eyebrow="How it goes" title="Two calm hours together" titleId="how-title" centered />
      <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-7">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className={`workshop-card-lift rounded-lg border border-border p-7 md:p-8 ${
              index === 1 ? "bg-secondary" : "bg-card"
            }`}
          >
            <p className="font-display text-4xl font-semibold text-accent">{step.time}</p>
            <h3 className="mt-6 font-display text-2xl font-semibold">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const included = [
  "All materials, tools and festive table decor",
  "Kraft gift packaging for every finished piece",
  "Groups of 5–15, no experience needed",
  "At your office or a cosy venue in Lisbon",
];

export const WorkshopPackage = () => (
  <section className="pb-20 md:pb-28" aria-labelledby="package-title">
    <div className="container mx-auto px-6">
      <SectionHeading eyebrow="What's in the box" title="Everything is taken care of" titleId="package-title" centered />
      <div className="workshop-card-lift mx-auto mt-12 max-w-3xl rounded-lg border border-border bg-secondary p-8 text-center md:p-12">
        <h3 className="font-display text-3xl font-semibold">Team workshop</h3>
        <p className="mt-3 font-display text-2xl text-accent">from 300 € per workshop</p>
        <ul className="mx-auto mt-8 max-w-xl space-y-4 text-left">
          {included.map((item) => (
            <li key={item} className="flex items-start gap-3 leading-relaxed">
              <Check className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button variant="cta" size="lg" className="mt-9" asChild>
          <a href="#book">Book a December date</a>
        </Button>
      </div>
    </div>
  </section>
);

const gifts = [
  {
    title: "Ready-made ornament sets",
    description: "Handmade angels, wreaths and snowflakes in gift boxes for clients and partners.",
  },
  {
    title: "DIY gift kits",
    description: "Everything to make an ornament at home, with a printed step-by-step guide.",
  },
  {
    title: "Your brand, gently",
    description: "Logo tags, custom ribbon colours and a personal card from your team.",
  },
];

export const CorporateGifts = () => (
  <section id="gifts" className="scroll-mt-8 py-20 md:py-28" aria-labelledby="gifts-title">
    <div className="container mx-auto px-6">
      <SectionHeading eyebrow="Corporate gifts" title="Gifts made by hand" titleId="gifts-title" centered>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          For clients, partners and teams you can&apos;t gather in one room. Price upon request.
        </p>
      </SectionHeading>
      <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-7">
        {gifts.map((gift, index) => (
          <article
            key={gift.title}
            className={`workshop-card-lift rounded-lg border border-border p-7 md:p-8 ${
              index === 0 ? "bg-secondary" : "bg-card"
            }`}
          >
            <h3 className="font-display text-2xl font-semibold">{gift.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{gift.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const faqs = [
  {
    question: "Do we need any experience?",
    answer: "No. Step-by-step guidance, everyone works at their own pace.",
  },
  {
    question: "How long does it take?",
    answer: "About 2 hours: 15 min to settle in, 90 min of knotting, 15 min to wrap and reflect.",
  },
  {
    question: "How many people can join?",
    answer: "Groups of 5–15.",
  },
  {
    question: "Where does it take place?",
    answer: "At your office or at a cosy venue in Lisbon.",
  },
  {
    question: "What is included?",
    answer:
      "All materials, tools and festive table decor, plus kraft gift packaging for every finished piece. Each guest makes 2–3 ornaments to take home.",
  },
  {
    question: "How do we book?",
    answer: "Send us your team size and preferred date and we'll reply with availability and a proposal.",
  },
];

export const WorkshopFaq = () => (
  <section className="py-20 md:py-28" aria-labelledby="faq-title">
    <div className="container mx-auto px-6">
      <SectionHeading eyebrow="Good to know" title="A few practical details" titleId="faq-title" centered />
      <Accordion type="single" collapsible className="mx-auto mt-10 max-w-2xl">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`item-${index}`} className="border-border">
            <AccordionTrigger className="workshop-accordion-trigger gap-4 rounded-sm text-left text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="workshop-accordion-content leading-relaxed text-muted-foreground data-[state=closed]:animate-none data-[state=open]:animate-none">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const footerLinks = [
  { label: "WhatsApp", href: WHATSAPP_URL },
  { label: "Telegram", href: TELEGRAM_URL },
  { label: "Instagram", href: "https://www.instagram.com/knot.your.plot/" },
];

export const WorkshopFooter = () => (
  <footer className="bg-primary py-10 text-primary-foreground">
    <div className="container mx-auto flex flex-col items-center gap-7 px-6 text-center md:flex-row md:justify-between md:text-left">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" width={720} height={720} loading="lazy" className="h-10 w-10 object-contain" />
        <span className="font-display text-lg font-semibold">Knot Your Plot · Lisbon</span>
      </div>
      <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm" aria-label="Contact links">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-primary-foreground/85 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="/"
        className="rounded-sm text-sm text-primary-foreground/85 underline underline-offset-4 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
      >
        ← Back to Knot Your Plot
      </a>
    </div>
  </footer>
);
