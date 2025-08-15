import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-blue-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-4 py-2 gap-4">
            {navLinks.map((link) => {
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
