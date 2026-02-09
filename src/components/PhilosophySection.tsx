import { motion } from "framer-motion";
import processImage from "@/assets/process.png";
const PhilosophySection = () => {
  return <section id="philosophy" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <span className="inline-block text-sm font-medium tracking-widest text-accent uppercase mb-4">
              The Philosophy
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              When your hands are busy,
              <br />
              <span className="text-primary">your mind finds peace</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">In a world dominated by screens and endless notifications, we spend most of our lives "in our heads.” We think, we plan, we worry, but we rarely create something tangible. </p>
              <p className="text-lg">
                Macramé is more than craft—it's a meditation. The repetitive motion of
                knotting, the texture of natural rope between your fingers, the gradual
                emergence of pattern from chaos.
              </p>
              <p className="text-lg font-medium text-foreground">
                This is digital detox made visible. This is grounding made tactile.
              </p>
            </div>

            {/* Decorative element */}
            <motion.div className="mt-10 flex items-center gap-4" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4
          }}>
              <div className="h-px flex-1 bg-gradient-to-r from-accent via-golden to-teal opacity-40" />
              <span className="font-display italic text-muted-foreground">
                Breathe. Knot. Repeat.
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-accent via-golden to-teal opacity-40" />
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div className="relative" initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img src={processImage} alt="The macramé process - hands creating beautiful knots" className="w-full h-auto" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>

            {/* Floating accent */}
            <motion.div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-accent/10 blur-2xl" animate={{
            scale: [1, 1.2, 1]
          }} transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut"
          }} />
            <motion.div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-teal/10 blur-2xl" animate={{
            scale: [1, 1.3, 1]
          }} transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 1
          }} />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default PhilosophySection;