import { motion } from "framer-motion";
import ExperienceGallery from "@/components/ExperienceGallery";
const PhilosophySection = () => {
  return <section id="philosophy" className="py-16 md:py-32 bg-gradient-warm overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-full overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center overflow-hidden">
          {/* Text Content */}
          <motion.div className="min-w-0" initial={{
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
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              When your hands are busy,
              <br />
              <span className="text-primary">your mind finds peace</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-base sm:text-lg">In a world dominated by screens and endless notifications, we spend most of our lives "in our heads." We think, we plan, we worry, but we rarely create something tangible. </p>
              <p className="text-base sm:text-lg">Mental clarity begins with your hands. Through the meditative ritual of macramé, tactile focus returns to the present moment. </p>
              <p className="text-base sm:text-lg font-medium text-foreground">Expertly facilitated grounding. From digital burnout to creative flow.</p>
            </div>

            {/* Decorative element */}
            <motion.div className="mt-8 sm:mt-10 flex items-center gap-3 sm:gap-4" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4
          }}>
              <div className="h-px flex-1 bg-gradient-to-r from-accent via-golden to-teal opacity-40" />
              <span className="font-display italic text-muted-foreground text-sm sm:text-base whitespace-nowrap">
                Breathe. Knot. Repeat.
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-accent via-golden to-teal opacity-40" />
            </motion.div>
          </motion.div>

          {/* Experience Gallery */}
          <motion.div className="min-w-0 overflow-hidden" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <ExperienceGallery />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default PhilosophySection;
