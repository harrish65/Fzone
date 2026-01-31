// import About from "./components/AboutFounder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import PartnersSlider from "./components/PartnersSlider";
import AboutFounder from "./components/AboutFounder";

// import SoftwareExpertise from "./components/SoftwareExpertise";
import About from "./components/About";
import {
  ShieldCheck,
  FileCheck2,
  MessageCircleQuestionMark,
} from "lucide-react";
import aboutBg from "./assets/services2.png";

const App = () => {
  const aboutData = {
    heroTitle: "About Us",
    cards: [
      {
        icon: (
          <MessageCircleQuestionMark className="w-6 h-6 text-gray-100 group-hover:text-green-800" />
        ),
        title: "Who we are",
        text:
          "A focused engineering consultancy delivering compliant, reliable design and inspection services.",
      },
      {
        icon: (
          <ShieldCheck className="w-6 h-6 text-gray-100 group-hover:text-green-800" />
        ),
        title: "Expertise",
        text:
          "Specialized in Pressure Vessels, Heat Exchangers and ASME/ISO audits for industrial projects.",
      },
      {
        icon: (
          <FileCheck2 className="w-6 h-6 text-gray-100 group-hover:text-green-800" />
        ),
        title: "Our Process",
        text:
          "Plan → Execute → Verify. Fast, auditable workflows aligned to industry codes.",
      },
    ],
    smallItems: [
      {
        icon: (
          <ShieldCheck className="w-7 h-7 text-gray-100 group-hover:text-green-800 flex-shrink-0" />
        ),
        title: "Confidentiality",
        text:
          "We protect client data and project details throughout engagement.",
      },
      {
        icon: (
          <FileCheck2 className="w-7 h-7 text-gray-100 group-hover:text-green-800 flex-shrink-0" />
        ),
        title: "Audit-ready",
        text:
          "Deliverables and reports follow ASME/ISO standards for easy verification.",
      },
    ],
    backgroundImage: aboutBg,
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Home />
        <About {...aboutData} />
        <Services />
        {/* <SoftwareExpertise /> */}
        <PartnersSlider />
        <AboutFounder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
