import { createContext, useContext, useState } from "react";
import Lottie from "lottie-react";
import anim from "../assets/lottie/loading.json";

const LoadingContext = createContext();

export function GlobalLinkLoader({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}

      {loading && (
        <div className="fixed inset-0 z-9999 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="w-72">
            <Lottie animationData={anim} loop autoplay />
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
