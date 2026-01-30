// import { ShieldCheck, FileCheck2 } from "lucide-react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import directorImg from "../assets/Director.jpg"; // Update with your actual image path

// type CommitmentBlockProps = {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// };

// function CommitmentBlock({ icon, title, description }: CommitmentBlockProps) {
//   return (
//     <div className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
//       <div className="mb-2">{icon}</div>
//       <h3 className="text-lg font-bold mb-1">{title}</h3>
//       <p className="text-gray-600 text-center">{description}</p>
//     </div>
//   );
// }

const AboutFounder = () => {
  return (
    <motion.section className="max-w-5xl mx-auto py-12 px-4">
      {/* Director Section */}
      <motion.h2
        className="text-3xl font-bold text-blue-900 mb-8 text-center"
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
      >
        Meet Our Director
      </motion.h2>
      <motion.div className="flex flex-col md:flex-row items-center gap-8 mb-5">
        <motion.div className="flex-shrink-0 flex flex-col items-center md:items-start w-full md:w-auto">
          <motion.img
            src={directorImg}
            alt="Director"
            className="w-40 h-40 md:w-48 md:h-48 object-cover shadow-lg rounded-lg"
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
          />
          <div className="mt-4 text-center md:text-left w-full">
            <h3 className="text-lg font-bold text-gray-900">
              Mr. Kannan Ramasamy
            </h3>
            <p className="text-sm text-gray-700 font-semibold">
              MTECH (Metallurgy), LLB
            </p>
            <p className="text-sm text-gray-600 mt-2">Engineer & Lawyer</p>
            <p className="text-sm text-gray-600">Fright Zone Engineers</p>
            <p className="text-sm text-gray-600">Aandavar Telecom</p>
            <p className="text-sm text-gray-600">Aandavar Organics</p>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 w-full"
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
        >
          <p className="mb-4 text-gray-700 leading-relaxed">
            <span className="font-bold">Mr Kannan Ramasamy</span> has been the
            Director of Frightzone Engineers since 2012. He holds a Bachelor's
            in Mechanical Engineering and a Master's in Industrial Metallurgy,
            and is a certified ASME Authorized Inspector, ASNT Level III NDT
            Professional, and PED Qualified Professional. Frightzone Engineers
            provides services with excellence and technical integrity across
            India and the Gulf region.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>20+ years in engineering and consulting</li>
            <li>Certified ASME and ISO auditor</li>
            <li>Proven track record in project delivery</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutFounder;
// import { motion } from "framer-motion";
