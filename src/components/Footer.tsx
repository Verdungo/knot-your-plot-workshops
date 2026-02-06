import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Knot Your Plot" className="w-12 h-12" />
            <span className="font-display text-xl font-semibold">Knot Your Plot</span>
          </div>

          {/* Links */}
          <nav className="flex gap-8 text-sm">
            <a href="#philosophy" className="hover:text-accent transition-colors">
              Philosophy
            </a>
            <a href="#services" className="hover:text-accent transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm opacity-60">
            © {currentYear} Knot Your Plot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
