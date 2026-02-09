import { useState, useRef, useCallback, useEffect } from "react";
import { Play } from "lucide-react";

import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import video1 from "@/assets/gallery/video-1.mp4";
import video2 from "@/assets/gallery/video-2.mp4";
import video3 from "@/assets/gallery/video-3.mp4";
import video4 from "@/assets/gallery/video-4.mp4";
import video5 from "@/assets/gallery/video-5.mp4";

type GalleryItem = {
  type: "image" | "video";
  src: string;
  caption: string;
  widthClass: string;
};

// Shuffled order: no two videos adjacent
const galleryItems: GalleryItem[] = [
  { type: "video", src: video1, caption: "Shared focus", widthClass: "w-[360px]" },
  { type: "image", src: photo1, caption: "Natural textures", widthClass: "w-[320px]" },
  { type: "video", src: video3, caption: "Mindful making", widthClass: "w-[380px]" },
  { type: "image", src: photo2, caption: "Tactile grounding", widthClass: "w-[300px]" },
  { type: "video", src: video2, caption: "Creative flow", widthClass: "w-[350px]" },
  { type: "video", src: video4, caption: "Collective calm", widthClass: "w-[420px]" },
  { type: "video", src: video5, caption: "Hands at work", widthClass: "w-[340px]" },
];

const VideoItem = ({
  item,
  uniqueKey,
  activeVideo,
  setActiveVideo,
}: {
  item: GalleryItem;
  uniqueKey: string;
  activeVideo: string | null;
  setActiveVideo: (k: string | null) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isActive = activeVideo === uniqueKey;

  const handleEnter = useCallback(() => {
    setActiveVideo(uniqueKey);
    videoRef.current?.play();
  }, [uniqueKey, setActiveVideo]);

  const handleLeave = useCallback(() => {
    if (isActive) {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
      setActiveVideo(null);
    }
  }, [isActive, setActiveVideo]);

  return (
    <div
      className={`relative flex-shrink-0 ${item.widthClass} h-[440px] rounded-lg overflow-hidden cursor-pointer group`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <video
        ref={videoRef}
        src={item.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-12 h-12 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
          <Play className="w-5 h-5 text-background fill-background ml-0.5" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm font-medium text-background tracking-wide">
          {item.caption}
        </span>
      </div>
    </div>
  );
};

const ImageItem = ({ item }: { item: GalleryItem }) => (
  <div
    className={`relative flex-shrink-0 ${item.widthClass} h-[440px] rounded-lg overflow-hidden group`}
  >
    <img
      src={item.src}
      alt={item.caption}
      className="w-full h-full object-cover"
      loading="lazy"
    />
    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-sm font-medium text-background tracking-wide">
        {item.caption}
      </span>
    </div>
  </div>
);

const ExperienceGallery = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPos = useRef(0);

  const handleSetActive = useCallback((k: string | null) => setActiveVideo(k), []);

  // Duplicate items for seamless loop
  const loopItems = [...galleryItems, ...galleryItems];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Calculate half-width (one set of items)
    const halfWidth = container.scrollWidth / 2;
    const speed = 0.4; // px per frame — meditative pace

    const tick = () => {
      if (!isPaused) {
        scrollPos.current += speed;
        if (scrollPos.current >= halfWidth) {
          scrollPos.current -= halfWidth;
        }
        container.scrollLeft = scrollPos.current;
      }
      animationRef.current = requestAnimationFrame(tick);
    };

    animationRef.current = requestAnimationFrame(tick);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  return (
    <div
      className="w-screen relative left-1/2 -translate-x-1/2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden py-2"
        style={{ scrollBehavior: "auto" }}
      >
        {loopItems.map((item, i) => {
          const key = `${item.src}-${i}`;
          return item.type === "video" ? (
            <VideoItem
              key={key}
              item={item}
              uniqueKey={key}
              activeVideo={activeVideo}
              setActiveVideo={handleSetActive}
            />
          ) : (
            <ImageItem key={key} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceGallery;
