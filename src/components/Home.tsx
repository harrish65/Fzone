import { Check } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "../assets/herobg.png"
import { slideUpVariants, zoomInVariants } from "./animation";

const features = [
  {
    title: "Qualified Experts",
    desc:
      "Skilled design & welding engineers certified for industrial projects.",
  },
  {
    title: "ASME & ISO Audits",
    desc: "Comprehensive audits and compliance support aligned to codes.",
  },
  {
    title: "Inspection Services",
    desc: "Certified inspection and NDE services for quality assurance.",
  },
  {
    title: "Project Delivery",
    desc: "End-to-end execution with audit-ready deliverables and reports.",
  },
];

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center min-h-[60vh]  px-4 py-20 lg:background-fixed bg-cover lg:bg-top bg-center bg-no-repeat"
    style={{backgroundImage:`url(${heroBg})`}} >
      <div className="max-w-6xl w-full mx-auto"
      
        >
        <motion.div className="text-center mb-8"
          initial="hidden"
        animate="visible"
        variants={zoomInVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Certified Engineering & Inspection Experts
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mx-auto max-w-3xl">
            Frightzone Engineers deliver focused design, inspection and audit
            services that meet strict industry standards with reliable,
            auditable results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => {
            const variant = idx % 2 === 0 ? "bg-blue-600" : "bg-blue-800";

            return (
              <motion.div
                key={f.title}
                className={`w-full bg-transparent border hover:bg-black/60 hover:border-0 border-gray-100 rounded-lg p-6 shadow-sm transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${variant}`}
                initial="hidden"
                whileInView="visible"
                variants={slideUpVariants}
                
              >
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-white font-extrabold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-200">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-300">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className={"text-center mt-8"}
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}>
          <a
            href="#services"
            className="inline-block bg-transparent hover:border-0 hover:bg-black/50 text-white font-semibold py-2 px-8 rounded-lg shadow transition-colors border border-white"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
