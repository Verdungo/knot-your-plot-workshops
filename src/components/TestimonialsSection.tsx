import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
const testimonials = [{
  quote: "Our team walked in stressed and walked out calm, connected, and holding something beautiful they made themselves. The impact lasted weeks.",
  author: "Maria S.",
  role: "HR Director",
  company: "Tech Startup, Lisbon",
  rating: 5
}, {
  quote: "The online workshop exceeded our expectations. Despite being remote, our team felt genuinely connected. The kits arrived beautifully packaged.",
  author: "Anna K.",
  role: "People Operations Lead",
  company: "Marketing Agency, Berlin",
  rating: 5
}, {
  quote: "We've tried many team activities. This was different—quiet, focused, and surprisingly bonding. Highly recommend for creative teams.",
  author: "James T.",
  role: "Community Manager",
  company: "Co-working Space, Amsterdam",
  rating: 5
}];
const TestimonialsSection = () => {
  return <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center max-w-2xl mx-auto mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }}>
          <span className="inline-block text-sm font-medium tracking-widest text-accent uppercase mb-4">The impact and quality of our workshops</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">The Impact of Tactile Grounding</h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <motion.div key={testimonial.author} className="relative bg-card rounded-2xl p-8 shadow-soft" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }}>
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-accent/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-golden text-golden" />)}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;