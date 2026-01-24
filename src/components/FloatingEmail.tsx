import emailImg from "../assets/emailIcon.png";

// Replace with your email address
const EMAIL_LINK = "mailto:info@frightzoneengineers.com";

const FloatingEmail = () => {
  return (
    <a
      href={EMAIL_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send Email"
      className="fixed right-4 bottom-20 z-50 w-14 h-14 rounded-full overflow-hidden shadow-lg transform transition hover:scale-105"
    >
      <img src={emailImg} alt="Email" className="w-full h-full object-cover" />
    </a>
  );
};

export default FloatingEmail;
