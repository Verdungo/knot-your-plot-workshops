import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, MapPin, Mail, Phone } from "lucide-react";
const ContactSection = () => {
  const whatsappLink = "https://wa.me/your-number-here"; // Replace with actual number
  const telegramLink = "https://t.me/your-username-here"; // Replace with actual username

  return <section id="contact" className="py-24 md:py-32 bg-gradient-warm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div className="text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <span className="inline-block text-sm font-medium tracking-widest text-accent uppercase mb-4">
              Let's Connect
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">
              Ready to ground your team?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Whether you're planning a team building, looking for unique corporate gifts, or simply curious, we'd love to hear from you.</p>
          </motion.div>

          {/* CTA Cards */}
          <motion.div className="grid md:grid-cols-2 gap-6 mb-16" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            {/* WhatsApp */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                WhatsApp
              </h3>
              <p className="text-muted-foreground mb-4">
                Quick questions? Let's chat!
              </p>
              <Button variant="cta" size="lg">
                Message on WhatsApp
              </Button>
            </a>

            {/* Telegram */}
            <a href={telegramLink} target="_blank" rel="noopener noreferrer" className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Send className="w-8 h-8 text-teal" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Telegram
              </h3>
              <p className="text-muted-foreground mb-4">
                Prefer Telegram? I'm here too!
              </p>
              <Button variant="cta" size="lg">
                Message on Telegram
              </Button>
            </a>
          </motion.div>

          {/* Additional contact info */}
          <motion.div className="flex flex-wrap justify-center gap-8 text-muted-foreground" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.4
        }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>Based in Portugal</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-accent" />
              <span>hello@knotyourplot.com</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;