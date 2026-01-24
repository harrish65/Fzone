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
    <motion.section
      className="max-w-5xl mx-auto py-12 px-4"
      initial="hidden"
      animate="visible"
      variants={slideUpVariants}
      viewport={{ once: true }}
    >
      {/* Director Section */}
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Meet Our Director
      </h2>
      <motion.div
        className="flex flex-col  items-center  gap-10 mb-5"
        initial="hidden"
        animate="visible"
        variants={zoomInVariants}
        viewport={{ once: true }}
      >
        <img
          src={directorImg}
          alt="Director"
          className="w-32 h-32 md:w-50 md:h-50 rounded-full object-cover shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-1 text-center">
            Mr Kannan Ramasamy
          </h2>
          <p className="mb-2 text-gray-700">
            <span className="font-bold">Mr Kannan Ramasamy</span> has been the
            Director of Frightzone Engineers since 2012. He holds a Bachelor's
            in Mechanical Engineering and a Master's in Industrial Metallurgy,
            and is a certified ASME Authorized Inspector, ASNT Level III NDT
            Professional, and PED Qualified Professional. Frightzone Engineers
            provides services with excellence and technical integrity across
            India and the Gulf region.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>20+ years in engineering and consulting</li>
            <li>Certified ASME and ISO auditor</li>
            <li>Proven track record in project delivery</li>
            {/* Add more achievements as needed */}
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutFounder;
// import { motion } from "framer-motion";
