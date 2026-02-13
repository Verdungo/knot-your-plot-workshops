import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I am delighted with the workshop! Firstly, I realized that I can make very decent things from macramé in just 40-50 minutes. Secondly, the atmosphere of collective creativity is very captivating and brings people closer. Excellent idea for team building!",
    author: "Praskovia Root",
    role: "Engineering Manager",
    company: "Tech Startup, Lisbon",
    featured: false,
  },
  {
    quote: "The online workshop exceeded our expectations. Despite being remote, our team felt genuinely connected. The kits arrived beautifully packaged.",
    author: "Anna K.",
    role: "People Operations Lead",
    company: "Marketing Agency, Berlin",
    featured: false,
  },
  {
    quote: "As a founder of a business community, I highly value formats that help people step away from screens and reconnect in a meaningful, human way. Evgenia's macramé workshops have been a wonderful experience for our community.\nThanks to her clear guidance and supportive approach, everyone was able to create their own piece, regardless of prior experience. The workshops fostered de-digitalisation and natural team bonding, all within a very warm, welcoming atmosphere that encouraged connection and presence.",
    author: "Irina Shurmina",
    role: "Business community founder",
    company: "Ladies Who Talk, Lisbon",
    featured: true,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: "#F9F7F2" }}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-sm font-medium tracking-widest text-accent uppercase mb-4">
            What They Say
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            The Impact of Tactile Grounding
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className="relative rounded-lg p-8 flex flex-col"
              style={{
                backgroundColor: testimonial.featured ? "#718379" : "#FFFFFF",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Quote icon — thin outline style */}
              <Quote
                className="w-10 h-10 mb-6"
                strokeWidth={1}
                style={{
                  color: testimonial.featured ? "#FFFFFF" : "#718379",
                }}
              />

              {/* Quote text */}
              <p
                className="font-sans text-base leading-[1.75] mb-8 flex-1 whitespace-pre-line"
                style={{
                  color: testimonial.featured ? "#FFFFFF" : "#333333",
                }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div
                className="border-t pt-5 mt-auto"
                style={{
                  borderColor: testimonial.featured
                    ? "rgba(255,255,255,0.2)"
                    : "hsl(var(--border))",
                }}
              >
                <p
                  className="font-semibold text-sm"
                  style={{
                    color: testimonial.featured ? "#FFFFFF" : "#333333",
                  }}
                >
                  {testimonial.author}
                </p>
                <p
                  className="text-sm mt-0.5"
                  style={{
                    color: testimonial.featured
                      ? "rgba(255,255,255,0.75)"
                      : "rgba(51,51,51,0.6)",
                  }}
                >
                  {testimonial.role}
                </p>
                <p
                  className="text-sm"
                  style={{
                    color: testimonial.featured
                      ? "rgba(255,255,255,0.75)"
                      : "rgba(51,51,51,0.6)",
                  }}
                >
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;