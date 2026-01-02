import { Check } from "lucide-react";

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
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-[60vh] bg-blue-200 px-4 py-16"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Certified Engineering & Inspection Experts
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mx-auto max-w-3xl">
            Frightzone Engineers deliver focused design, inspection and audit
            services that meet strict industry standards with reliable,
            auditable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, idx) => {
            const hoverVariants = [
              "hover:bg-gradient-to-r hover:from-blue-50 hover:to-white hover:border-blue-200",
              "hover:bg-gradient-to-r hover:from-green-50 hover:to-white hover:border-green-200",
              "hover:bg-gradient-to-r hover:from-yellow-50 hover:to-white hover:border-yellow-200",
              "hover:bg-gradient-to-r hover:from-purple-50 hover:to-white hover:border-purple-200",
            ];
            const variant = hoverVariants[idx % hoverVariants.length];

            return (
              <div
                key={f.title}
                className={`w-full bg-transparent border border-gray-100 rounded-lg p-6 shadow-sm transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${variant}`}
              >
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">
                      {f.title}
                    </h3>
                    <p className="text-sm text-gray-600">{f.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <a
            href="#services"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
