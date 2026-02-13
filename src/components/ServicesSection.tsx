import { motion } from "framer-motion";
import { MapPin, Video, Gift, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
const services = [{
  icon: MapPin,
  title: "In-Person Workshops",
  location: "Portugal",
  price: "From €40/person · min. €200",
  description: "Fully-equipped sessions at your location. We bring everything—premium materials, tools, and the expertise to guide your team through a memorable experience.",
  features: ["All materials included", "On-site facilitation", "Group sizes 5-15", "2-3 hour sessions"],
  color: "accent"
}, {
  icon: Video,
  title: "Online Workshops",
  location: "Europe-wide",
  price: "From €25/person + delivery costs",
  description: "Bridge the distance for distributed teams. We ship custom DIY kits in advance and host a live, synchronized session to create together in a digital-free headspace.",
  features: ["Kits shipped in advance", "Live instruction via Zoom", "Interactive Q&A", "Recording available"],
  color: "teal"
}, {
  icon: Gift,
  title: "Corporate DIY Kits",
  location: "Worldwide shipping",
  price: "Price upon request",
  description: "Premium gift boxes with video tutorials for self-paced creativity. An unforgettable wellness gift for your team.",
  features: ["Beautiful packaging", "Video tutorials included", "Premium materials", "Custom branding options"],
  color: "golden"
}, {
  icon: Palette,
  title: "Custom Corporate Gifts",
  location: "Made to order",
  price: "Price upon request",
  description: "Finished macramé pieces tailored to your brand's color palette. Unique, handcrafted items that tell a story.",
  features: ["Brand color matching", "Bulk orders available", "Handcrafted with care", "Gift-ready packaging"],
  color: "primary"
}];
const colorClasses = {
  accent: {
    iconBg: "bg-accent/10",
    iconText: "text-accent",
    border: "group-hover:border-accent/30"
  },
  teal: {
    iconBg: "bg-teal/10",
    iconText: "text-teal",
    border: "group-hover:border-teal/30"
  },
  golden: {
    iconBg: "bg-golden/10",
    iconText: "text-golden",
    border: "group-hover:border-golden/30"
  },
  primary: {
    iconBg: "bg-primary/10",
    iconText: "text-primary",
    border: "group-hover:border-primary/30"
  }
};
const ServicesSection = () => {
  return <section id="services" className="py-24 md:py-32 bg-background">
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
          <span className="inline-block text-sm font-medium tracking-widest text-accent uppercase mb-4">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">Tailored Creative Experiences</h2>
          <p className="text-lg text-muted-foreground">Whether your team is in the same room or scattered across Europe, we have a format that fits your needs</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
          const colors = colorClasses[service.color as keyof typeof colorClasses];
          return <motion.div key={service.title} className={`group relative bg-card rounded-2xl p-8 md:p-10 border-2 border-transparent transition-all duration-300 hover:shadow-elevated ${colors.border} flex flex-col`} initial={{
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
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colors.iconBg} mb-6`}>
                  <service.icon className={`w-7 h-7 ${colors.iconText}`} />
                </div>

                {/* Location badge */}
                <span className="absolute top-8 right-8 md:top-10 md:right-10 text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {service.location}
                </span>

                {/* Content */}
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className={`text-sm font-medium ${colors.iconText} mb-3`}>
                  {service.price}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed min-h-[4.5rem]">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map(feature => <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>)}
                </ul>

                {/* CTA - pushed to bottom */}
                <div className="mt-auto">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#contact">Learn More</a>
                  </Button>
                </div>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
};
export default ServicesSection;