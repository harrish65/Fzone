import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 mt-2">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Contact details (moved from Contact left section) */}

        <div className="flex flex-col items-start">
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
        </div>

        {/* Middle: Quick links */}
        <div className="flex flex-col items-start">
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
        </div>

        {/* Right: About / Social */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Contact</h4>
          <div className="flex items-center gap-3">
            <span className="bg-orange-400 rounded-full p-2">
              <Mail className="w-5 h-5 text-white" />
            </span>
            <a
              href="mailto:frightzoneengineers@gmail.com"
              className="underline"
            >
              frightzoneengineers@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-orange-400 rounded-full p-2">
              <Phone className="w-5 h-5 text-white" />
            </span>
            <span>91 9361309259, 8807343626</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-orange-400 rounded-full p-2 mt-1">
              <MapPin className="w-5 h-5 text-white" />
            </span>
            <address className="not-italic text-sm">
              Frightzoneengineers
              <br />
              5/9 Srinivasalu Naidu street,
              <br />
              Radha Nagar Chrompet,
              <br />
              Chennai - 600044
            </address>
          </div>
        </div>

        <div className="md:col-span-3 mt-4 border-t border-gray-200 pt-4 text-center text-sm text-blue-100">
          &copy; {new Date().getFullYear()} FZONE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
