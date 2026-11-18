import { useEffect, type CSSProperties } from "react";
import WorkshopHero from "@/components/workshop/WorkshopHero";
import OrnamentGallery from "@/components/workshop/OrnamentGallery";
import LastDecemberStrip from "@/components/workshop/LastDecemberStrip";
import RequestForm from "@/components/workshop/RequestForm";
import {
  CorporateGifts,
  HowItGoes,
  SectionHeading,
  WorkshopFaq,
  WorkshopFooter,
  WorkshopPackage,
} from "@/components/workshop/WorkshopSections";

const workshopTheme = {
  "--background": "43 55% 92%",
  "--foreground": "24 29% 13%",
  "--card": "42 60% 96%",
  "--card-foreground": "24 29% 13%",
  "--popover": "42 60% 96%",
  "--popover-foreground": "24 29% 13%",
  "--primary": "151 30% 17%",
  "--primary-foreground": "43 55% 92%",
  "--secondary": "30 42% 63%",
  "--secondary-foreground": "24 29% 13%",
  "--muted": "36 30% 86%",
  "--muted-foreground": "28 12% 34%",
  "--accent": "357 65% 42%",
  "--accent-foreground": "43 55% 96%",
  "--golden": "38 55% 68%",
  "--golden-foreground": "24 29% 13%",
  "--border": "36 30% 78%",
  "--input": "36 30% 72%",
  "--ring": "357 65% 42%",
  "--workshop-overlay": "150 33% 11%",
  "--workshop-pine-dark": "140 29% 12%",
} as CSSProperties;

const workshopStyles = `
  .workshop-hero-enter {
    opacity: 0;
    transform: translateY(14px);
    animation: workshop-hero-fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  @keyframes workshop-hero-fade-up {
    to { opacity: 1; transform: translateY(0); }
  }
  .workshop-hero-overlay {
    background: hsl(var(--workshop-overlay) / 0.65);
  }
  .workshop-card-lift {
    transition: transform 180ms ease;
  }
  .workshop-card-lift:hover {
    transform: translateY(-2px);
  }
  .workshop-hanging-ornament {
    filter: sepia(0.08) saturate(1.05) drop-shadow(0 10px 14px rgb(0 0 0 / 0.35));
  }
  .workshop-accordion-content {
    animation: none;
  }
  .workshop-accordion-trigger svg {
    transition: none;
  }
  @media (min-width: 768px) {
    .workshop-hero-overlay {
      background: linear-gradient(to right, rgb(18 36 28 / 0.88) 0%, rgb(18 36 28 / 0) 55%);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .workshop-page *,
    .workshop-page *::before,
    .workshop-page *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
    .workshop-page .workshop-hero-enter {
      animation: none;
      opacity: 1;
      transform: none;
    }
    .workshop-page .workshop-card-lift:hover {
      transform: none;
    }
  }
`;

const Workshop = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    const createdDescription = !description;
    const meta = description ?? document.createElement("meta");

    document.title = "Christmas team workshops in Lisbon | Knot Your Plot";
    meta.name = "description";
    meta.content =
      "Christmas team macramé workshops in Lisbon. Two calm, screen-free hours, handmade ornaments and thoughtful corporate gifts.";
    if (createdDescription) document.head.appendChild(meta);

    return () => {
      document.title = previousTitle;
      if (previousDescription !== undefined) meta.content = previousDescription;
      if (createdDescription) meta.remove();
    };
  }, []);

  return (
    <div className="workshop-page min-h-screen bg-background font-body text-foreground" style={workshopTheme}>
      <style>{workshopStyles}</style>
      <WorkshopHero />
      <main>
        <div style={{ backgroundColor: "#F5EFE0" }}><HowItGoes /></div>
        <LastDecemberStrip />
        <OrnamentGallery />
        <WorkshopPackage />
        <CorporateGifts />
        <WorkshopFaq />
        <section
          id="book"
          className="scroll-mt-8 py-20 md:py-28"
          aria-labelledby="book-title"
          style={{
            backgroundColor: "#DEC7A3",
          }}
        >
          <div className="container mx-auto px-6">
            <SectionHeading eyebrow="Book your workshop" title="December dates are limited" titleId="book-title" centered>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Tell us your team size and preferred date — we&apos;ll reply with availability and a proposal.
              </p>
            </SectionHeading>
            <RequestForm />
          </div>
        </section>
      </main>
      <WorkshopFooter />
    </div>
  );
};

export default Workshop;
