import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import PartnersSlider from "./components/PartnersSlider";

const App = () => {
  return (
    <div className="font-medium text-red-900 px-1">
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <PartnersSlider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
