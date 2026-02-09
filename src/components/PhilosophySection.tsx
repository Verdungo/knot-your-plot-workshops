import { motion } from "framer-motion";
import ExperienceGallery from "@/components/ExperienceGallery";
const PhilosophySection = () => {
  return <section id="philosophy" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
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
              <p className="text-lg">In a world dominated by screens and endless notifications, we spend most of our lives "in our heads." We think, we plan, we worry, but we rarely create something tangible. </p>
              <p className="text-lg">Mental clarity begins with your hands. Through the meditative ritual of macramé, tactile focus returns to the present moment. </p>
              <p className="text-lg font-medium text-foreground">Expertly facilitated grounding. From digital burnout to creative flow.</p>
            </div>

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
        </div>
      </div>
    </section>;
};
export default PhilosophySection;