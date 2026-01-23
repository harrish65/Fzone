import { ShieldCheck, FileCheck2, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const About = () => {
  return (
    <motion.section
      className="bg-gray-300 py-12 px-4 md:px-8 lg:px-24"
      id="about"
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        About Us
      </h2>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
        <motion.article
          className="p-6 bg-blue-50 border border-blue-100 rounded-lg shadow-sm"
          initial="hidden"
          animate="visible"
          variants={zoomInVariants}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Layers className="w-6 h-6 text-blue-700" />
            <h3 className="text-lg font-semibold text-blue-800">Who we are</h3>
          </div>
          <p className="text-gray-700">
            A focused engineering consultancy delivering compliant, reliable
            design and inspection services.
          </p>
        </motion.article>

        <motion.article
          className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm"
          initial="hidden"
          animate="visible"
          variants={zoomInVariants}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="w-6 h-6 text-blue-700" />
            <h3 className="text-lg font-semibold text-blue-800">Expertise</h3>
          </div>
          <p className="text-gray-700">
            Specialized in Pressure Vessels, Heat Exchangers and ASME/ISO audits
            for industrial projects.
          </p>
        </motion.article>

        <motion.article
          className="p-6 bg-blue-50 border border-blue-100 rounded-lg shadow-sm"
          initial="hidden"
          animate="visible"
          variants={zoomInVariants}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-3">
            <FileCheck2 className="w-6 h-6 text-blue-700" />
            <h3 className="text-lg font-semibold text-blue-800">Our process</h3>
          </div>
          <p className="text-gray-700">
            Plan → Execute → Verify. Fast, auditable workflows aligned to
            industry codes.
          </p>
        </motion.article>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <motion.div
          className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg p-4"
          initial="hidden"
          animate="visible"
          variants={zoomInVariants}
          viewport={{ once: true }}
        >
          <ShieldCheck className="w-7 h-7 text-blue-700 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-800">Confidentiality</h4>
            <p className="text-sm text-gray-600">
              We protect client data and project details throughout engagement.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg p-4"
          initial="hidden"
          animate="visible"
          variants={zoomInVariants}
          viewport={{ once: true }}
        >
          <FileCheck2 className="w-7 h-7 text-blue-700 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-800">Audit-ready</h4>
            <p className="text-sm text-gray-600">
              Deliverables and reports follow ASME/ISO standards for easy
              verification.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
// import { ShieldCheck, FileCheck2 } from "lucide-react";

// const About = () => {
//   return (
//     <section className="bg-white py-12 px-4 md:px-8 lg:px-24" id="about">
//       <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
//         About Frightzone Engineers
//       </h2>
//       <div className="max-w-3xl mx-auto text-gray-800 space-y-8">
//         <div>
//           <p className="text-lg mb-4">
//             Frightzone Engineers is a trusted design consultancy and inspection
//             firm, dedicated to delivering precision-engineered solutions and
//             unparalleled service. We specialize in executing meticulous{" "}
//             <strong>ASME</strong> and <strong>ISO audits</strong> while
//             upholding the highest standards of quality and integrity.
//           </p>
//         </div>
//         <div>
//           <h3 className="text-2xl font-semibold text-blue-700 mb-2">
//             Why Choose Frightzone Engineers?
//           </h3>
//           <ul className="list-disc list-inside space-y-2">
//             <li>
//               <strong>A Legacy of Excellence:</strong> Since our establishment,
//               we have built a reputation for providing comprehensive design
//               solutions that meet all industrial requirements.
//             </li>
//             <li>
//               <strong>Adherence to Standards:</strong> We have extensive
//               experience with major construction codes, including IBR, ASME, EN,
//               and API, ensuring every project is fully compliant.
//             </li>
//             <li>
//               <strong>Specialized Solutions:</strong> Our expertise is focused
//               on critical components such as Pressure Vessels, Water Wall
//               Panels, Super Heaters, Economizers, and Heat Exchangers.
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-2xl font-semibold text-blue-700 mb-2">
//             Our Step-by-Step Approach
//           </h3>
//           <ul className="list-disc list-inside space-y-2">
//             <li>
//               <strong>Planning & Design:</strong> We start with in-depth
//               planning to develop a robust design strategy tailored to your
//               specific needs.
//             </li>
//             <li>
//               <strong>Execution & Audits:</strong> Our team of experts executes
//               the project while conducting thorough ASME and ISO audits to
//               guarantee quality.
//             </li>
//             <li>
//               <strong>Verification & Compliance:</strong> Every single
//               deliverable is cross-verified against relevant industry codes and
//               standards using advanced software tools to ensure flawless
//               results.
//             </li>
//           </ul>
//         </div>
//         <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded-lg mt-8">
//           <h3 className="text-xl font-semibold text-blue-700 mb-2">
//             Vision Statement
//           </h3>
//           <p className="text-gray-800">
//             Our mission is simple: to achieve{" "}
//             <strong>100% customer satisfaction</strong> by implementing an
//             appropriate strategy that consistently adheres to the highest
//             construction codes and standards.
//           </p>
//                   {/* Commitment Section */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//                     <div className="flex flex-col items-center bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm">
//                       <ShieldCheck className="w-8 h-8 text-blue-700 mb-2" />
//                       <h3 className="text-lg font-bold mb-1">Confidentiality</h3>
//                       <p className="text-gray-700 text-center">We strictly protect all client data and project information, ensuring complete confidentiality at every stage.</p>
//                     </div>
//                                   <div className="flex flex-col items-center bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-sm">
//                                     <FileCheck2 className="w-8 h-8 text-blue-700 mb-2" />
//                                     <h3 className="text-lg font-bold mb-1">Audit</h3>
//                                     <p className="text-gray-700 text-center">Our audit processes are transparent, thorough, and aligned with international standards for maximum trust.</p>
//                                   </div>
//                                 </div>
//                           </div>
//                         </div>
//                       </section>
//                     );
//                   };

//                   export default About;
