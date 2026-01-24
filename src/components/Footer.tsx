import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import emailImg from "../assets/emailIcon.png";
import whatsappImg from "../assets/whatsapp.png";

// Replace with your WhatsApp number in international format (no + or dashes)
const WHATSAPP_LINK = "https://wa.me/919361309259";

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-gray-900 text-white py-8 mt-2"
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Contact details (moved from Contact left section) */}

        <motion.div
          className="flex flex-col items-start"
          initial="hidden"
          animate="visible"
          variants={zoomInVariants}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold">FZONE</h4>
          <p className="text-sm mt-2 mb-4">
            Design consultancy & inspection services specializing in ASME/ISO
            audits and industrial equipment.
          </p>
          <div className="flex gap-3">
            <a href="#" className="text-sm hover:underline">
              Privacy
            </a>
            <a href="#" className="text-sm hover:underline">
              Terms
            </a>
          </div>
        </motion.div>

        {/* Middle: Quick links */}
        <motion.div
          className="flex flex-col items-start"
          initial="hidden"
          animate="visible"
          variants={zoomInVariants}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <nav className="mt-2 flex flex-col gap-2 text-sm">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </motion.div>

        {/* Right: About / Social */}
        <motion.div
          className="space-y-1"
          initial="hidden"
          animate="visible"
          variants={zoomInVariants}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <div className="flex items-center gap-3">
          <a href="mailto:info@frightzoneengineers.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
            <span className="p-2">
              <img src={emailImg} alt="Email" className="w-5 h-5" />
            </span>
           
          </a>
     
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <img src={whatsappImg} alt="WhatsApp" className="w-6 h-6" />
            </a>
            </div>
        
          <div className="flex gap-3">
          <div className="flex flex-col items-start gap-3">
            <motion.div
              className="p-2 mt-1"
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MapPin className="w-5 h-5 text-red-700" />
            </motion.div>
            <div className="flex flex-col text-xs">
              <span>Frightzoneengineers</span>
              <span>5/9 Srinivasalu Naidu street,</span>
              <span>Radha Nagar Chrompet,</span>
              <span>Chennai - 600044</span>
            </div>
            </div>
          <div className="flex flex-col items-start gap-3">
            <motion.div
              className="p-2 mt-1"
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MapPin className="w-5 h-5 text-red-700" />
            </motion.div>
            
            <div className="flex flex-col text-xs">
              <span>Frightzoneengineers</span>
              <span>Sheik Rashid Bin Saeed </span>
              <span>Al Maktoum St,</span>
              <span>Ajman, Dubai, UAE.</span>
            </div>
            </div>
            </div>
        </motion.div>

        <div className="md:col-span-3 mt-4 border-t border-gray-200 pt-4 text-center text-sm text-blue-100">
          &copy; {new Date().getFullYear()} FZONE. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
