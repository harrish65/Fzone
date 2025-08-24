import AutoCADImg from "../assets/AutoCADImg.png";
import PVEliteImg from "../assets/PVLiteImg.png";
const softwareList = [
  {
    name: "PV Elite",
    description:
      "PV Elite is a powerful pressure vessel and heat exchanger design software developed by Hexagon. We use it for the design, analysis, and evaluation of pressure vessels. This software helps our engineers, fabricators, and plant managers ensure compliance with international codes and standards.",
    img: PVEliteImg,
  },
  {
    name: "AutoCAD",
    description:
      "AutoCAD, a leading computer-aided design (CAD) software by Autodesk, is essential to our work. We use it for 2D drafting, 3D modeling, and technical documentation across various industries, including architecture, engineering, and construction.",
    img: AutoCADImg,
  },
];

const SoftwareExpertise = () => {
  return (
    <section className="py-6  md:px-8 lg:px-24 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Software Expertise
      </h2>
      <div className="grid gap-x-6 md:grid-cols-2 gap-y-8 min-h-[20vh] ">
        {softwareList.map((software) => (
          <div
            key={software.name}
            className="rounded-lg shadow-lg p-6 bg-gray-50 border border-gray-200 hover:shadow-xl transition-shadow max-h-[400px] flex flex-col md:items-start items-center"
          >
            <img
              src={software.img}
              alt={software.name}
              className="mb-4 h-24 max-h-24 object-contain w-auto"
            />
            <p className="text-gray-700 leading-relaxed">
              {software.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftwareExpertise;
