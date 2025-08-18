import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-blue-900 text-white text-center p-4 md:p-8 rounded-lg"
    >
      <h2 className="text-4xl md:text-6xl font-semibold mb-6">Contact Us</h2>
      <div className="flex flex-col lg:flex-row gap-8 w-full min-h-[60vh]">
        {/* Contact Details */}
        <div className="flex flex-col justify-center gap-6 text-white p-4 md:p-8 rounded-lg lg:w-1/2 w-full min-h-[60vh]">
          <div className="flex lg:flex-row flex-col  items-center gap-4 mb-4">
            <span className="bg-orange-400 rounded-full p-2">
              <Mail className="w-6 h-6 text-white" />
            </span>
            <a
              href="mailto:frightzoneengineers@gmail.com"
              className="underline text-lg break-all"
            >
              frightzoneengineers@gmail.com
            </a>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-4 mb-4">
            <span className="bg-orange-400 rounded-full p-2">
              <Phone className="w-6 h-6 text-white" />
            </span>
            <span className="text-lg">91 9361309259, 8807343626</span>
          </div>
          <div className="flex lg:flex-row flex-col items-center gap-4 mb-4">
            <span className="bg-orange-400 rounded-full p-2">
              <MapPin className="w-6 h-6 text-white" />
            </span>
            <div className="text-lg lg:text-left text-center">
              Frightzoneengineers
              <br />
              5/9 Srinivasalu Naidu street,
              <br />
              Radha Nagar Chrompet,
              <br />
              Chennai - 600044.
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="lg:w-1/2 w-full text-white bg-blue-900 p-4 md:p-8 rounded-lg flex items-center">
          <motion.section
            className="flex flex-col items-center justify-center w-full text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl text-yellow-100 md:text-4xl font-semibold mb-6">
              Get in Touch
            </h2>

            <form className="w-full max-w-md mx-auto flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-700"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-700"
                required
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-700"
                required
              />
              <button
                type="submit"
                className="bg-orange-400 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-800 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </motion.section>
        </div>
      </div>
      {/* Download Brochure Button */}
      {/* <div className="mt-8 flex justify-center">
        <a
          href="/brochure.pdf"
          download
          className="bg-orange-400 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-800 transition-colors font-semibold text-xl"
        >
          Download Brochure
        </a>
      </div> */}
    </div>
  );
};

export default Contact;
