import { motion } from "framer-motion";
import founderImage from "@/assets/founder.jpg";
import { Globe, Heart, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Philosophical Approach",
    description: "We focus on grounding and digital detox, not just craft. Every knot is a moment of presence.",
  },
  {
    icon: Globe,
    title: "Bilingual Service",
    description: "Workshops conducted fluently in English and Russian, reaching diverse teams across Europe.",
  },
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "We use only high-end, natural materials and create aesthetic designs that feel luxurious.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={founderImage}
                  alt="The founder of Knot Your Plot with colorful macramé creations"
                  className="w-full h-auto"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full border-2 border-accent/20"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-teal/20"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-medium tracking-widest text-accent uppercase mb-4">
              About Knot Your Plot
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Where creativity meets
              <br />
              <span className="text-primary">mindful practice</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p className="text-lg">
                Based in sunny Portugal, Knot Your Plot was born from a simple belief: in our
                hyperconnected world, we need spaces to disconnect—not through isolation, but
                through creation.
              </p>
              <p className="text-lg">
                Every workshop is designed to bring your team together through the meditative
                rhythm of macramé. No experience needed. Just curious hands and an open mind.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
