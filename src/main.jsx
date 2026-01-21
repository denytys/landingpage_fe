import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./auth/AuthContext";
import { GlobalLinkLoader } from "./components/GlobalLinkLoader";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GlobalLinkLoader>
          <App />
        </GlobalLinkLoader>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
