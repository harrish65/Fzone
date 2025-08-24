import { Settings, ShieldCheck, GraduationCap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const serviceGroups = [
  {
    icon: <Settings className="w-6 h-6 md:w-8 md:h-8 text-blue-700" />,
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
    icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-blue-700" />,
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
    icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-blue-700" />,
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
    icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-blue-700" />,
    title: "Export & Compliance",
    description: "Services for PED products and export applications to Europe.",
    items: ["Do services for PED products as application for export to Europe"],
  },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="flex flex-col items-center justify-center text-center px-4 py-8 bg-blue-200"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <section className="max-w-6xl mx-auto py-12 px-4 ">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-start w-full"
            >
              <div className="flex flex-row items-center gap-2 mb-2 w-full">
                {group.icon}
                <span className="text-lg md:text-xl font-bold md:ml-2 ml-1 text-left text-gray-900">
                  {group.title}
                </span>
              </div>
              <p className="text-gray-600 mb-4 md:text-start text-center">
                {group.description}
              </p>
              <ul className="list-disc pl-4 text-start text-gray-700">
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </motion.section>
  );
};

export default Services;
