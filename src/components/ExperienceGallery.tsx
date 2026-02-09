import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  aspect: string; // tailwind aspect class
};

const galleryItems: GalleryItem[] = [
  { type: "video", src: video1, caption: "Shared focus", aspect: "aspect-[4/5]" },
  { type: "image", src: photo1, caption: "Natural textures", aspect: "aspect-[3/4]" },
  { type: "video", src: video3, caption: "Mindful making", aspect: "aspect-[4/5]" },
  { type: "video", src: video5, caption: "Hands at work", aspect: "aspect-[4/5]" },
  { type: "image", src: photo2, caption: "Tactile grounding", aspect: "aspect-[3/4]" },
  { type: "video", src: video2, caption: "Creative flow", aspect: "aspect-[4/5]" },
];

const GalleryVideoItem = ({
  item,
  index,
  activeVideo,
  setActiveVideo,
}: {
  item: GalleryItem;
  index: number;
  activeVideo: number | null;
  setActiveVideo: (i: number | null) => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isActive = activeVideo === index;

  const handlePlay = useCallback(() => {
    setActiveVideo(index);
    videoRef.current?.play();
  }, [index, setActiveVideo]);

  const handleStop = useCallback(() => {
    if (isActive) {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
      setActiveVideo(null);
    }
  }, [isActive, setActiveVideo]);

  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden cursor-pointer group ${item.aspect}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseEnter={handlePlay}
      onMouseLeave={handleStop}
      onClick={isActive ? handleStop : handlePlay}
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

      {/* Play icon overlay - hidden when playing */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-12 h-12 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
          <Play className="w-5 h-5 text-background fill-background ml-0.5" />
        </div>
      </div>

      {/* Caption on hover */}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm font-medium text-background tracking-wide">
          {item.caption}
        </span>
      </div>
    </motion.div>
  );
};

const GalleryImageItem = ({
  item,
  index,
}: {
  item: GalleryItem;
  index: number;
}) => (
  <motion.div
    className={`relative rounded-lg overflow-hidden group ${item.aspect}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
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
  </motion.div>
);

const ExperienceGallery = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleSetActive = useCallback(
    (i: number | null) => setActiveVideo(i),
    []
  );

  // Mobile: horizontal scroll carousel
  if (isMobile) {
    return (
      <div className="mt-16">
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
          {galleryItems.map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[75vw] snap-center">
              {item.type === "video" ? (
                <GalleryVideoItem
                  item={{ ...item, aspect: "aspect-[4/5]" }}
                  index={i}
                  activeVideo={activeVideo}
                  setActiveVideo={handleSetActive}
                />
              ) : (
                <GalleryImageItem
                  item={{ ...item, aspect: "aspect-[4/5]" }}
                  index={i}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop: asymmetric masonry grid
  const col1 = [galleryItems[0], galleryItems[4], galleryItems[6]];
  const col2 = [galleryItems[1], galleryItems[3]];
  const col3 = [galleryItems[2], galleryItems[5]];

  return (
    <div className="mt-16">
      <div className="grid grid-cols-3 gap-5 items-start">
        <div className="flex flex-col gap-5 pt-8">
          {col1.map((item, i) => {
            const origIndex = galleryItems.indexOf(item);
            return item.type === "video" ? (
              <GalleryVideoItem
                key={origIndex}
                item={item}
                index={origIndex}
                activeVideo={activeVideo}
                setActiveVideo={handleSetActive}
              />
            ) : (
              <GalleryImageItem key={origIndex} item={item} index={origIndex} />
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          {col2.map((item, i) => {
            const origIndex = galleryItems.indexOf(item);
            return item.type === "video" ? (
              <GalleryVideoItem
                key={origIndex}
                item={item}
                index={origIndex}
                activeVideo={activeVideo}
                setActiveVideo={handleSetActive}
              />
            ) : (
              <GalleryImageItem key={origIndex} item={item} index={origIndex} />
            );
          })}
        </div>
        <div className="flex flex-col gap-5 pt-14">
          {col3.map((item, i) => {
            const origIndex = galleryItems.indexOf(item);
            return item.type === "video" ? (
              <GalleryVideoItem
                key={origIndex}
                item={item}
                index={origIndex}
                activeVideo={activeVideo}
                setActiveVideo={handleSetActive}
              />
            ) : (
              <GalleryImageItem key={origIndex} item={item} index={origIndex} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceGallery;
