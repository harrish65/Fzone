import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GeneralElectric from "../assets/General_Electric.jpg";
import ProcessEng from "../assets/ProcessEng.jpeg";
import QualityInternational from "../assets/quality_international.jpg";
import SharjahElectricity from "../assets/sharjah_electricity.jpg";
import Smidth from "../assets/smidth.jpg";
import Technimont from "../assets/technimont.jpg";
import LT from "../assets/L&T.jpeg"; // Add this line for L&T logo

const partners = [
  { name: "General Electric", logo: GeneralElectric },
  { name: "L&T", logo: LT },
  { name: "ProcessEng", logo: ProcessEng },
  { name: "Quality International", logo: QualityInternational },
  { name: "Sharjah Electricity", logo: SharjahElectricity },
  { name: "Smidth", logo: Smidth },
  { name: "Technimont", logo: Technimont },
];

const PartnersSlider = () => {
  const [current, setCurrent] = useState(0);
  const getVisibleCount = () => (window.innerWidth >= 768 ? 5 : 1);
  const [visible, setVisible] = useState(getVisibleCount());
  const total = partners.length;

  useEffect(() => {
    const handleResize = () => setVisible(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [total]);

  const getVisiblePartners = () => {
    let arr = [];
    for (let i = 0; i < visible; i++) {
      arr.push(partners[(current + i) % total]);
    }
    return arr;
  };

  return (
    <motion.section
      id="partners"
      className="flex flex-col items-center justify-center py-12 bg-yellow-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-xl md:text-3xl font-semibold text-blue-900 mb-8 tracking-wide text-center">
        Our Esteemed Partners
      </h2>
      <div className="flex flex-row gap-12 md:gap-20 items-center justify-center w-full">
        {getVisiblePartners().map((partner, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-16 md:h-20 w-full object-contain mb-2"
              style={{ maxWidth: "140px" }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        {partners.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-3 h-3 rounded-full ${
              idx === current ? "bg-blue-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default PartnersSlider;
