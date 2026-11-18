import { Image as ImageIcon } from "lucide-react";
import { ornaments } from "@/data/ornaments";

const OrnamentGallery = () => {
  return (
    <section className="py-20 md:py-28" aria-labelledby="ornaments-title">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we make</p>
          <h2 id="ornaments-title" className="mt-3 font-display text-3xl font-semibold md:text-5xl">
            Our ornaments
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Six designs in natural cotton and wood. Each guest picks 2–3 to make.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7">
          {ornaments.map((ornament) => (
            <article
              key={ornament.name}
              className="workshop-card-lift overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="aspect-[3/4] bg-background p-3 md:p-5">
                {ornament.image ? (
                  <img
                    src={ornament.image}
                    alt={ornament.alt}
                    width={ornament.width ?? 600}
                    height={ornament.height ?? 800}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center rounded-md border border-dashed border-border"
                    role="img"
                    aria-label={ornament.alt}
                  >
                    <ImageIcon className="h-7 w-7 text-muted-foreground" aria-hidden="true" />
                  </div>
                )}
              </div>
              <h3 className="px-3 py-4 text-center font-display text-lg font-semibold md:text-xl">{ornament.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrnamentGallery;
