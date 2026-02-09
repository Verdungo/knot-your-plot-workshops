import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";
import logo from "@/assets/logo.png";
import { MessageCircle, Send } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-24 pt-32">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{
        backgroundColor: 'rgba(249, 247, 242, 0.7)'
      }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="max-w-3xl mx-auto">

          {/* Tagline */}
          <motion.p className="font-display text-lg md:text-xl text-muted-foreground mb-4 italic" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.4
        }}>
            A ritual of grounding in a digitalized world
          </motion.p>

          <motion.h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight uppercase" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.6
        }}>
            Hands first,
            <br />
            <span style={{
            color: '#D67B54'
          }}>HEAD LATER</span>
          </motion.h1>

          <motion.p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.7
        }}>Helping corporate teams and communities reconnect with their physical selves through the meditative art of macramé</motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.9
        }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#services">
                Explore Workshops
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }}>
          
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;