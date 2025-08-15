import { motion } from "framer-motion";

const servicesList = [
  "DESIGN AND DRAFTING IN ACCORDANCE WITH ASME CONSTRUCTION CODE",
  "DESIGN AND DRAFTING IN ACCORDANCE WITH PRESSURE EQUIPMENT DIRECTIVE",
  "EXECUTION OF ASME AUDIT",
  "WELDING TRAINING IN ACCORDANCE WITH ASME",
  "WELDING QUALIFICATION AS PER ASME AND AWS",
  "WELDING PERFORMANCE QUALIFICATION AS PER ASME AND AWS",
  "THIRD PARTY INSPECTION & AI SERVICE",
  "DEVELOPMENT OF WORK PROCEDURES",
  "FORMULATION OF NDE PROCEDURE IN ACCORDANCE WITH ASME",
  "CONSULTANCY OF ISO 9001:2015",
  "Do services for PED products as application for export to Europe",
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-gray-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-blue-700 my-4">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
        {servicesList.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow p-5 flex items-start"
          >
            <span className="font-semibold text-blue-900">{service}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
