import { useState, useEffect } from "react";
import { Menu, Download } from "lucide-react";
import brochurePdf from "../assets/FZONE ENGINEERS (2) (1).pdf";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
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
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo/Title */}
        <div className="text-xl font-bold text-blue-700">FZONE</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            if (link.download) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  download
                  className="bg-blue-900 text-white px-4 rounded pt-1 pb-2 hover:bg-blue-500 transition-colors font-semibold text-base"
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
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-700"
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
            <Menu className="w-6 h-6 text-blue-700" />
          </button>
          <a
            href={navLinks.find((l) => l.download)?.href}
            download
            className="flex items-center p-2"
            aria-label="Download Brochure"
          >
            <Download className="w-6 h-6 text-blue-700" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-yellow-100 border-t shadow-lg">
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
                      ? "text-blue-700"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
