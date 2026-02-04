import { useState, useEffect } from "react";
import { Menu, Download } from "lucide-react";
import { motion } from "framer-motion";
import brochurePdf from "../assets/FZONE ENGINEERS (2) (1).pdf";
// import heroBg from "../assets/herobg.png";

const navLinks = [
  { name: "Home", href: "#home"},
  { name: "About", href: "#about"},
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
  { name: "Download Brochure", href: brochurePdf, download: true },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || "#home");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds.map((id) => document.getElementById(id));
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let found = false;
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            if (section) {
              const rect = section.getBoundingClientRect();
              if (rect.top <= 80 && rect.bottom > 80) {
                setActiveHash(`#${sectionIds[i]}`);
                found = true;
                break;
              }
            }
          }
          if (!found) {
            setActiveHash("#home");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`w-full  shadow-md fixed top-0 left-0 z-50  backdrop-blur-sm bg-transparent`}
      // style={{ backgroundImage: `URL(${heroBg})` }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo/Title */}
        <div className="text-xl font-bold text-gray-100">FZONE</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            if (link.download) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  download
                  className="bg-transparent text-white px-4 rounded pt-1 pb-2 hover:bg-black/70 hover:border-0 border border-white transition-colors font-semibold text-base"
                >
                  {link.name}
                </a>
              );
            }
            const isActive =
              activeHash === link.href ||
              (link.href === "#home" &&
                (activeHash === "#home" || activeHash === ""));
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-gray-300 underline underline-offset-8"
                    : "text-gray-50 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger & Download Icon */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="flex items-center p-2"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-gray-200" />
          </button>
          <a
            href={navLinks.find((l) => l.download)?.href}
            download
            className="flex items-center p-2"
            aria-label="Download Brochure"
          >
            <Download className="w-6 h-6 text-gray-200" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          className="md:hidden bg-transparent backdrop:backdrop-blur-2xl border-t shadow-lg"
          
        >
          <div className="flex flex-col items-center px-4 py-2 gap-4">
            {navLinks.map((link) => {
              if (link.download) {
                return null;
              }
              const isActive =
                activeHash === link.href ||
                (link.href === "#home" &&
                  (activeHash === "#home" || activeHash === ""));
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
