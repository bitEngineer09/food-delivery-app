import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StoreContextData from "./context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreContextData>
      <App />
    </StoreContextData>
  </StrictMode>
);
