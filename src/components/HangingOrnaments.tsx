import { cn } from "@/lib/utils";

type HangingOrnamentsProps = {
  fallbackSrc: string;
  fallbackAlt: string;
};

const localOrnaments = import.meta.glob<string>("../assets/holiday/hanging/*.png", {
  eager: true,
  query: "?url",
  import: "default",
});

const cdnOrnaments = import.meta.glob<{ url: string }>("../assets/holiday/hanging/*.png.asset.json", {
  eager: true,
  import: "default",
});

const layouts = [
  { left: 1, width: 33, cord: 42, duration: 4.4, delay: -0.7 },
  { left: 26, width: 32, cord: 116, duration: 5.3, delay: -2.1 },
  { left: 51, width: 31, cord: 66, duration: 4.8, delay: -1.4 },
  { left: 73, width: 27, cord: 138, duration: 5.9, delay: -3.2, hideOnMobile: true },
];

const sources: Array<readonly [string, string]> = [
  ...Object.entries(localOrnaments),
  ...Object.entries(cdnOrnaments).map(([path, asset]) => [path, asset.url] as const),
];

const hangingOrnaments = sources
  .sort(([a], [b]) => a.localeCompare(b))
  .slice(0, layouts.length)
  .map(([path, src], index) => {
    const name = path
      .split("/")
      .pop()
      ?.replace(/\.png(?:\.asset\.json)?$/, "")
      .replace(/[-_]+/g, " ");

    return {
      ...layouts[index],
      src,
      alt: `Handmade macramé ${name || "Christmas ornament"}`,
    };
  });

const HangingOrnaments = ({ fallbackSrc, fallbackAlt }: HangingOrnamentsProps) => {
  if (hangingOrnaments.length === 0) {
    return (
      <>
        <div className="absolute -inset-3 rotate-2 rounded-lg bg-secondary" aria-hidden="true" />
        <img
          src={fallbackSrc}
          alt={fallbackAlt}
          width={960}
          height={1280}
          className="relative aspect-[3/4] w-full -rotate-1 rounded-lg object-cover shadow-elevated"
        />
      </>
    );
  }

  return (
    <div className="relative aspect-[3/4] w-full" aria-label="Macramé ornaments hanging from fine cotton cords">
      <div className="absolute inset-x-1 top-0 h-px bg-primary/25" aria-hidden="true" />
      {hangingOrnaments.map((ornament) => (
        <div
          key={ornament.src}
          className={cn("hanging-ornament absolute top-0", ornament.hideOnMobile && "hidden sm:block")}
          style={{
            left: `${ornament.left}%`,
            width: `${ornament.width}%`,
            animationDuration: `${ornament.duration}s`,
            animationDelay: `${ornament.delay}s`,
          }}
        >
          <span
            className="mx-auto block w-px bg-primary/40"
            style={{ height: `${ornament.cord}px` }}
            aria-hidden="true"
          />
          <img
            src={ornament.src}
            alt={ornament.alt}
            className="h-auto w-full select-none drop-shadow-[0_12px_12px_hsl(15_30%_14%/0.16)]"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};

export default HangingOrnaments;
