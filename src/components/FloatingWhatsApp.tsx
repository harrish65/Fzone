import whatsappImg from "../assets/whatsapp-share-icon.svg";

// Replace with your WhatsApp number in international format (no + or dashes)
const WHATSAPP_LINK = "https://wa.me/1234567890";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-50 z-50 w-14 h-14 rounded-full overflow-hidden shadow-lg transform transition hover:scale-105"
    >
      <img
        src={whatsappImg}
        alt="WhatsApp"
        className="w-full h-full object-cover"
      />
    </a>
  );
};

export default FloatingWhatsApp;
