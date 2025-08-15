import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-gray-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-blue-700 my-4">
        About FZONE
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
        Frightzone Engineers is a leading design consultancy and audit provider,
        specializing in ASME and ISO audits for diverse organizations. With deep
        expertise in construction codes such as IBR, ASME, EN, and API, we
        deliver comprehensive design solutions for industrial needs, including
        Pressure Vessels, Water Wall Panels, Super Heaters, Economizers, and
        Heat Exchangers.
      </p>
      <div className="text-base md:text-lg text-gray-600 max-w-xl">
        <p>
          From planning to operation, our step-by-step design process ensures
          every deliverable is cross-verified with relevant codes, standards,
          policies, and regulations using advanced software tools. Each document
          produced serves a specific purpose throughout the project lifecycle,
          ensuring quality and compliance at every stage.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
