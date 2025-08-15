import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-blue-700 my-4">
        Contact Us
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl">
        Have questions or want to get in touch? Fill out the form below and
        we’ll respond as soon as possible.
      </p>
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
          className="bg-blue-700 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-800 transition-colors font-semibold"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
