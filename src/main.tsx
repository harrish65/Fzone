import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ScrollToTop />
    <FloatingWhatsApp />
  </StrictMode>
);
