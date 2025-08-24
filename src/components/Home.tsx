const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-50 to-white px-4 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
        Certified Engineering & Inspection Experts
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
        We are Frightzone Engineers, a leading design consultancy and inspection
        firm dedicated to delivering perfect service and unmatched quality. We
        specialize in providing comprehensive design and audit solutions that
        meet the highest industry standards.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
        {[
          "Qualified Experts in Design & Welding",
          "ASME & ISO Audits",
          "Certified Inspection Services",
        ].map((title) => (
          <div
            key={title}
            className="bg-white border border-blue-100 rounded-lg shadow p-3 hover:bg-blue-700 transition-colors w-full"
          >
            <h3 className="text-lg font-semibold text-blue-700 mb-2 hover:text-white transition-colors">
              {title}
            </h3>
          </div>
        ))}
      </div>
      <a
        href="#services"
        className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg shadow transition-colors mb-10 w-full md:w-[30%] mt-5"
      >
        Learn More
      </a>
      
    </section>
  );
};

export default Home;
