import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink = "https://wa.me/your-number-here"; // Replace with actual number
  const telegramLink = "https://t.me/your-username-here"; // Replace with actual username

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 bg-card rounded-2xl shadow-elevated p-4 w-56"
          >
            <p className="text-sm font-medium text-foreground mb-3">Get in touch</p>
            <div className="space-y-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">WhatsApp</span>
              </a>
              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-teal/10 hover:bg-teal/20 transition-colors"
              >
                <Send className="w-5 h-5 text-teal" />
                <span className="text-sm font-medium text-foreground">Telegram</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-elevated flex items-center justify-center hover:scale-105 transition-transform"
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingContact;
