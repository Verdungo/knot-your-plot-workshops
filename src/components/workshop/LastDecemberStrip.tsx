import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import photo1 from "@/assets/strip/photo-1-gnome-tree.jpg";
import photo2 from "@/assets/strip/photo-2-workshop-room.jpg";
import photo3 from "@/assets/strip/photo-3-workshop-hands.jpg";
import video1 from "@/assets/strip/video-1-ornaments.mp4";
import video2 from "@/assets/strip/video-2-candle.mp4";

type StripItem = {
  type: "image" | "video";
  src: string;
  width: number;
  height: number;
  aspect: string;
  caption: string;
  alt: string;
};

const items: StripItem[] = [
  { type: "image", src: photo1, width: 1440, height: 1920, aspect: "4 / 5", caption: "Everyone's gnomes, laid out as a tree", alt: "Red and cream macramé gnome ornaments arranged on a table in the shape of a Christmas tree" },
  { type: "video", src: video1, width: 1280, height: 2276, aspect: "16 / 10", caption: "Gnome, candy cane and wreath", alt: "Short clip of a macramé gnome, candy cane and wreath" },
  { type: "image", src: photo2, width: 1600, height: 1200, aspect: "4 / 3", caption: "Community workshop, Lisbon, December 2025", alt: "Guests knotting macramé ornaments together around a long table at a Lisbon workshop" },
  { type: "video", src: video2, width: 1280, height: 2276, aspect: "16 / 10", caption: "A macramé candle jar by candlelight", alt: "Short clip of a macramé-wrapped candle jar glowing by candlelight" },
  { type: "image", src: photo3, width: 1200, height: 900, aspect: "4 / 3", caption: "Two calm hours, tea included", alt: "Hands tying red and cream macramé ornaments on cork coasters at a wooden table" },
];

const StripVideo = ({ item }: { item: StripItem }) => {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      src={`${item.src}#t=0.1`}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={item.alt}
      width={item.width}
      height={item.height}
      className="h-full w-full object-cover"
    />
  );
};

const LastDecemberStrip = () => {
  const scroller = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) =>
    scroller.current?.scrollBy({ left: dir * scroller.current.clientWidth * 0.7, behavior: "smooth" });

  return (
    <section className="pb-14 md:pb-20" aria-labelledby="last-december-title" style={{ backgroundColor: "#F5EFE0" }}>
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#A67828" }}>A year ago</p>
            <h2 id="last-december-title" className="mt-3 font-display text-3xl font-semibold md:text-5xl" style={{ color: "#2C2018" }}>
              Last December, in our <span style={{ color: "#B3262E" }}>hands.</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A community workshop in Lisbon. Warm light, tea, and two calm hours with red and cream cord.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 lg:flex">
            {([-1, 1] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => scrollBy(dir)}
                aria-label={dir === -1 ? "Previous" : "Next"}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ color: "#1F3A2E" }}
              >
                {dir === -1 ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
            ))}
          </div>
        </div>
        <div
          ref={scroller}
          className="ld-strip -mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-4"
        >
          {items.map((item) => (
            <figure key={item.caption} className="relative shrink-0 snap-start">
              <div
                className="workshop-card-lift h-[300px] max-w-[calc(100vw-5.5rem)] overflow-hidden rounded-2xl lg:h-[360px]"
                style={{ aspectRatio: item.aspect, boxShadow: "0 10px 30px rgba(44,32,24,0.14)" }}
              >
                {item.type === "image" ? (
                  <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                ) : (
                  <StripVideo item={item} />
                )}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[90px] rounded-b-2xl"
                  style={{ background: "linear-gradient(to bottom, rgba(44,32,24,0) 0%, rgba(44,32,24,0.72) 100%)" }}
                />
              </div>
              <figcaption
                className="pointer-events-none absolute inset-x-4 bottom-4 line-clamp-2 text-[13px] font-medium leading-snug"
                style={{ color: "#FFFFFF", textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
              >
                {item.caption}
              </figcaption>
            </figure>
          ))}
          <div className="w-px shrink-0" aria-hidden="true" />
        </div>
      </div>
      <style>{`.ld-strip{scrollbar-width:none}.ld-strip::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
};

export default LastDecemberStrip;
