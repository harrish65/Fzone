const Footer = () => {
  return (
    <footer className="w-full bg-blue-700 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-2 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} FZONE. All rights reserved.
        </div>
        <div className="flex gap-4 text-sm">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
