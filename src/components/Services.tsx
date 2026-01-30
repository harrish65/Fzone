import {
  Settings,
  ShieldCheck,
  GraduationCap,
  Globe,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { slideUpVariants } from "./animation";
import { zoomInVariants } from "./animation";
import servicesBg from "../assets/servicesBg.png";

const serviceGroups = [
  {
    icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Design & Engineering",
    description:
      "Expert drafting and procedure development for ASME and PED standards.",
    items: [
      "Design and Drafting (ASME)",
      "Design and Drafting (PED)",
      "Development of Work Procedures",
    ],
  },
  {
    icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Quality & Certification",
    description:
      "Audits, inspections, and ISO consultancy for top-tier quality assurance.",
    items: [
      "Execution of ASME Audit",
      "Third Party Inspection & AI Service",
      "Formulation of NDE Procedure",
      "Consultancy of ISO 9001:2015",
    ],
  },
  {
    icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Training & Qualification",
    description:
      "Comprehensive welding training and qualification to meet industry standards.",
    items: [
      "Welding Training",
      "Welding Qualification",
      "Welding Performance Qualification",
    ],
  },
  {
    icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Export & Compliance",
    description: "Services for PED products and export applications to Europe.",
    items: ["Do services for PED products as application for export to Europe"],
  },
  {
    icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
    title: "Welding & NDE Services",
    description:
      "Welding expertise and Non-Destructive Examination (NDE) services for quality assurance. Already uncovered Non Destructive Examination ",
    items: [
      "NDE Level II training and qualifications",
      "Assistance for NDE Level III qualifications",
      "NDE demonstrations per code for procedure qualifications",
    ],
  },
];

/*
Welding
Already uncovered
Non-Destructive Examination.
1. NDE Level II training and qualifications
2. Assistance for NDE Level III qualifications
3. NDE demonstrations per code for procedure qualifications

*/

const Services = () => {
  return (
    <section
      id="services"
      className={"flex flex-col items-center justify-center text-center px-4 py-8 lg:background-fixed bg-cover bg-center bg-no-repeat bg-black/70 background-opacity-40"}
      style={{backgroundImage:`url(${servicesBg})`, backgroundSize: "cover", backgroundPosition: "center"}}
    >
      <section className="max-w-6xl mx-auto py-12 px-4 ">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="text-3xl font-bold text-center text-white mb-8 bg-transparent px-4">
          Our Services
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceGroups.map((group, idx) => {
            // const isLast = idx === serviceGroups.length - 1;
            return (
              <div
                key={idx}
                className={`bg-transparent rounded-lg border hover:border-0 border-gray-100 shadow p-6 flex flex-col items-start w-full group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-black/70 hover:to-black/90 cursor-pointer 
              ${idx === 4 ? "md:col-span-2" : ""}
                `}
              >
                <div className="flex flex-row items-center gap-2 mb-2 w-full">
                  <div className="text-gray-100   group-hover:text-gray-200 transition-colors duration-300">
                    {group.icon}
                  </div>
                  <span className="text-lg md:text-xl font-bold md:ml-2 ml-1 text-left text-white">
                    {group.title}
                  </span>
                </div>
                <p className="text-gray-200 mb-4 md:text-start text-center">
                  {group.description}
                </p>
                <ul className="pl-0 text-start text-gray-100 space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </motion.div>
      </section>
    </section>
  );
};

export default Services;
