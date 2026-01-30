import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { slideUpVariants } from "./animation";
import emailjs from "@emailjs/browser";
import cta from "../assets/cta.png";
import type { FormEvent } from "react";
const Contact = () => {
  const mapSrc =
    "https://www.google.com/maps/place/Ajman+Free+Zone/@25.4191013,55.452662,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5784a7c97153:0x2f7b6f7ff376bcb3!8m2!3d25.4191013!4d55.452662!16s%2Fg%2F11xbn0r4h?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D";
  const mapSrc1 =
    "https://www.google.com/maps/search/+Srinivasalu+Naidu+street,+Radha+Nagar+Chrompet,+Chennai+-+600044./@12.955247,80.1373704,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D";
  // 1. We encode your specific address to force the Red Pin 📍
  // 2. We add "&output=embed" to make it work inside your website
  // Map functionality removed. Coordinates and API loading were here.

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "your_actual_service_id",
        "your_actual_template_id",
        form,
        "your_actual_public_key"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <motion.div
      id="contact"
      className=" text-white text-center p-4 md:p-8 bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: `url(${cta})`}}
    >
      <motion.h2 className="text-4xl md:text-6xl font-semibold mb-6"
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
      >
        Contact Us
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-8 w-full min-h-[50vh]">
        {/* Contact Details */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="flex flex-col justify-center gap-6 text-white p-4 md:p-8 rounded-lg lg:w-1/2 w-full min-h-[60vh]"
        >
          <motion.div
            className="flex lg:flex-row flex-col items-center gap-4 mb-4   transition-colors">
            <span className="bg-transparent rounded-full p-2">
              <Mail className="w-6 h-6 text-white hover:text-gray-500" />
            </span>
            <a
              href="mailto:info@frightzoneengineers.com"
              className="no-underline text-lg break-all hover:text-gray-500 transition-colors"
            >
              info@frightzoneengineers.com
            </a>
          </motion.div>
          <div className="flex lg:flex-row flex-col items-center gap-4 mb-4">
            <span className="bg-transparent rounded-full p-2">
              <Phone className="w-6 h-6 text-white hover:text-gray-500" />
            </span>
            <span className="text-lg">+91 9361309259, +91 8807343626</span>
          </div>
          <a
            href={mapSrc1}
            target="_blank"
            className="flex lg:flex-row flex-col items-center gap-4 mb-4"
          >
            <motion.div
              className="bg-transparent rounded-full p-2"
              // 2. Add the bounce animation
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MapPin className="w-6 h-6 text-white hover:text-gray-500" />
            </motion.div>
            <div className="text-lg lg:text-left text-center hover:text-gray-500 transition-colors">
              Frightzoneengineers
              <br />
              5/9 Srinivasalu Naidu street,
              <br />
              Radha Nagar Chrompet,
              <br />
              Chennai - 600044.
            </div>
          </a>
          <a
            href={mapSrc}
            target="_blank"
            className="flex lg:flex-row flex-col items-center gap-4 mb-4 hover:text-gray-500 transition-colors"
          >
            <motion.div
              className="bg-transparent rounded-full p-2"
              // 2. Add the bounce animation
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <MapPin className="w-6 h-6 text-white hover:text-gray-500" />
            </motion.div>
            <div className="text-lg lg:text-left text-center">
              Frightzoneengineers,
              <br />
              Ajman Freezone,
              <br />
              Sheik Rashid Bin Saeed Al Maktoum St,
              <br />
              Ajman, Dubai, UAE.
            </div>
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="lg:w-1/2 w-full text-white bg-transparent p-4 md:p-8 rounded-lg flex items-center"
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
         
        >
          <section className="flex flex-col items-center justify-center w-full text-center">
            <h2 className="text-3xl text-gray-100 md:text-4xl font-semibold mb-6">
              Get in Touch
            </h2>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md mx-auto flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 text-white rounded px-4 py-2 focus:outline-none focus:border-gray-100 focus:ring-2 focus:ring-gray-100"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-gray-300 text-white rounded px-4 py-2 focus:outline-none focus:border-gray-100 focus:ring-2 focus:ring-gray-100"
                required
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                className="border border-gray-300 text-white rounded px-4 py-2 focus:outline-none focus:border-gray-100 focus:ring-2 focus:ring-gray-100"
                required
              />
              <button
                type="submit"
                className="bg-black/90 border border-gray-100 text-white px-6 py-2 rounded-lg shadow hover:bg-white hover:text-black transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </section>
        </motion.div>
      </div>

      {/* Map removed — keep layout clean. */}
    </motion.div>
  );
};

export default Contact;
