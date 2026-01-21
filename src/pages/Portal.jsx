import { useState } from "react";
import Header from "./Header";
import Internal from "./Internal";
import Eksternal from "./Eksternal";
import Data from "./Data";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function Portal() {
  const [activeData, setActiveData] = useState(null);

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-fixed overflow-hidden"
      style={{ backgroundImage: "url('/src/assets/images/background.png')" }}
    >
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
        <Internal />
        <Eksternal />
        <Data activeData={activeData} setActiveData={setActiveData} />
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
  );
}
