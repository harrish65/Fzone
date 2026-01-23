import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import QualityInternational from "../assets/quality_international.jpg";
import Technimont from "../assets/technimont.jpg";
import GeneralElectric from "../assets/General_Electric.jpg";
import SharjahElectricity from "../assets/sharjah_electricity.jpg";

const slides = [
  { name: "About", bg: QualityInternational },
  { name: "Services", bg: Technimont },
  { name: "Partners", bg: GeneralElectric },
  { name: "Contact", bg: SharjahElectricity },
];

const HomeCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <motion.div
      className="relative w-full h-[80vh] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      viewport={{ once: true }}
    >
      {slides.map((slide, idx) => (
        <motion.div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial="hidden"
          animate="visible"
          variants={zoomInVariants}
          viewport={{ once: true }}
        >
          <div className="w-full h-full bg-blue-500 bg-opacity-40 flex items-center justify-center">
            <button className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg text-center hover:cursor-pointer">
              {slide.name}
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HomeCarousel;
