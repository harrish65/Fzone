// import { ShieldCheck, FileCheck2 } from "lucide-react";
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
    <section className="max-w-5xl mx-auto py-12 px-4">
      {/* Director Section */}
      <div className="flex flex-col md:flex-row items-center  gap-10 mb-5">
        <img
          src={directorImg}
          alt="Director"
          className="w-32 h-32 md:w-50 md:h-50 rounded-full object-cover shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            Mr.Kannan Ramasamy
          </h2>
          <p className="text-blue-700 font-semibold mb-3">Director & Founder</p>
          <p className="mb-2 text-gray-700">
            <span className="font-bold">Mr.Kannan Ramasamy</span> has been the Director of Frightzone Engineers since 2012. He holds a
            Bachelor's in Mechanical Engineering and a Master's in Industrial
            Metallurgy, and is a certified ASME Authorized Inspector, ASNT Level
            III NDT Professional, and PED Qualified Professional. Frightzone
            Engineers provides services with excellence and technical integrity
            across India and the Gulf region.
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>20+ years in engineering and consulting</li>
            <li>Certified ASME and ISO auditor</li>
            <li>Proven track record in project delivery</li>
            {/* Add more achievements as needed */}
          </ul>
        </div>
      </div>
      {/* Commitment Section */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CommitmentBlock
          icon={<ShieldCheck className="w-8 h-8 text-blue-700" />}
          title="Confidentiality"
          description="We strictly protect all client data and project information, ensuring complete confidentiality at every stage."
        />
        <CommitmentBlock
          icon={<FileCheck2 className="w-8 h-8 text-blue-700" />}
          title="Audit"
          description="Our audit processes are transparent, thorough, and aligned with international standards for maximum trust."
        />
      </div> */}
    </section>
  );
};

export default AboutFounder;
// import { motion } from "framer-motion";
