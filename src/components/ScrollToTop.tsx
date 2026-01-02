import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [percent, setPercent] = useState(0);
  const [homeVisible, setHomeVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = doc.scrollHeight;
      const clientHeight = doc.clientHeight;
      const denom = Math.max(1, scrollHeight - clientHeight);
      let p = Math.round((scrollTop / denom) * 100);
      if (scrollTop > 0 && p < 1) p = 1; // ensure 1-100 when scrolled
      if (p > 100) p = 100;
      setPercent(p);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // observe #home visibility to hide button when Home section is in view
    const homeEl = document.getElementById("home");
    let io: IntersectionObserver | null = null;
    if (homeEl && typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setHomeVisible(
              entry.isIntersecting && entry.intersectionRatio > 0.15
            );
          });
        },
        { threshold: [0, 0.15, 0.5] }
      );
      io.observe(homeEl);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (io && homeEl) io.unobserve(homeEl);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Hue ranges from red(0) to green(140)
  const hue = Math.round((percent / 100) * 140);
  const borderColor = `hsl(${hue},70%,40%)`;

  const hidden = percent === 0 || homeVisible;

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed right-4 bottom-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/40 backdrop-blur-sm shadow-lg hover:scale-105 transform transition-transform ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ border: `3px solid ${borderColor}` }}
      title="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 text-gray-800" />
    </button>
  );
};

export default ScrollToTop;
