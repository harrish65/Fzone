import {
  ShieldCheck,
  FileCheck2,
  MessageCircleQuestionMark,
} from "lucide-react";
import { motion } from "framer-motion";
import { zoomInVariants } from "./animation";
import defaultBackground from "../assets/services2.png";

type Card = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

type SmallItem = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

interface AboutProps {
  heroTitle?: string;
  cards?: Card[];
  smallItems?: SmallItem[];
  backgroundImage?: string;
}

const About = ({
  heroTitle = "About Us",
  cards,
  smallItems,
  backgroundImage = defaultBackground,
}: AboutProps) => {
  const defaultCards: Card[] = [
    {
      icon: (
        <MessageCircleQuestionMark className="w-6 h-6 text-gray-100 group-hover:text-green-800" />
      ),
      title: "Who we are",
      text: "A focused engineering consultancy delivering compliant, reliable design and inspection services.",
    },
    {
      icon: (
        <ShieldCheck className="w-6 h-6 text-gray-100 group-hover:text-green-800" />
      ),
      title: "Expertise",
      text: "Specialized in Pressure Vessels, Heat Exchangers and ASME/ISO audits for industrial projects.",
    },
    {
      icon: (
        <FileCheck2 className="w-6 h-6 text-gray-100 group-hover:text-green-800" />
      ),
      title: "Our Process",
      text: "Plan → Execute → Verify. Fast, auditable workflows aligned to industry codes.",
    },
  ];

  const defaultSmall: SmallItem[] = [
    {
      icon: (
        <ShieldCheck className="w-7 h-7 text-gray-100 group-hover:text-gray-800" />
      ),
      title: "Confidentiality",
      text: "We protect client data and project details throughout engagement.",
    },
    {
      icon: (
        <FileCheck2 className="w-7 h-7 text-gray-100 group-hover:text-gray-800 " />
      ),
      title: "Audit-ready",
      text: "Deliverables and reports follow ASME/ISO standards for easy verification.",
    },
  ];

  const renderCards = cards ?? defaultCards;
  const renderSmall = smallItems ?? defaultSmall;

  return (
    <motion.section
      // Fixed: changed 'background-cover' to 'bg-cover'
      className={
        "flex flex-col md:px-8 lg:px-24 bg-cover bg-center bg-no-repeat"
      }
      id="about"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Fixed: Added pb-32 to create space at the bottom for floating buttons (WA/Up Arrow) */}
      <section className="max-w-6xl mx-auto p-4 pb-32 md:pb-12">
        <motion.h2
          className="text-3xl font-bold text-gray-100 pb-4 text-center pt-2"
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
        >
          {heroTitle}
        </motion.h2>

        {/* First Grid: Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
          {renderCards.map((c, idx) => (
            <motion.article
              key={idx}
              className="p-6 bg-transparent border border-gray-100 hover:border-gray-900 rounded-lg shadow-sm group  hover:bg-white/90"
              initial="hidden"
              whileInView="visible"
              variants={zoomInVariants}
            >
              <div className="flex items-center gap-3 mb-3">
                {c.icon}
                <h3 className="text-lg font-bold text-gray-200 group-hover:text-gray-800">
                  {c.title}
                </h3>
              </div>
              <p className="text-gray-300 group-hover:text-gray-700">
                {c.text}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Second Grid: Small Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 cursor-pointer ">
          {renderSmall.map((s, i) => (
            <motion.div
              key={i}
              // Fixed: Removed 'mt-2' which was causing misalignment inside the grid
              className=" bg-transparent border hover:text-gray-900 border-gray-100 hover:bg-white/90  rounded-lg p-6 group shadow-sm"
              initial="hidden"
              whileInView="visible"
              variants={zoomInVariants}
            >
               <div className="flex items-center gap-3 mb-3">
              {s.icon}
            
                <h2 className="text-lg font-bold text-gray-200 group-hover:text-gray-800 pb-2">
                  {s.title}
                </h2>
                </div>
                <p className="text-sm text-gray-300 group-hover:text-gray-700">
                  {s.text}
                </p>
              
            </motion.div>
          ))}
        </div>
      </section>
    </motion.section>
  );
};

export default About;