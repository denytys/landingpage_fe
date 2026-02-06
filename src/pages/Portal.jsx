import Header from "./Header";
import Internal from "./Internal";
import Eksternal from "./Eksternal";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useAuth } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";
import bgLogin from "../assets/images/background1.png";

export default function Portal() {
  const { isUser, authType } = useAuth();
  if (!authType) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div
      className="relative min-h-screen flex flex-col bg-cover bg-no-repeat bg-fixed overflow-hidden"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Header />
        </motion.div>

        {/* MAIN */}
        <motion.main
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: "easeOut", delay: 0.1 }}
          className="flex-1 flex flex-wrap justify-center items-center gap-8 my-6"
        >
          {isUser && <Internal />}
          <Eksternal />
        </motion.main>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}
