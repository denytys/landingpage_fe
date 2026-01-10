import { useState } from "react";
import Header from "./Header";
import Internal from "./Internal";
import Eksternal from "./Eksternal";
import Data from "./Data";
import Footer from "./Footer";

export default function Portal() {
  const [activeData, setActiveData] = useState(null);

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/src/assets/images/background.png')",
      }}
    >
      <Header />

      <main className="flex-1 flex flex-wrap justify-center items-center gap-8 my-6">
        <Internal />
        <Eksternal />
        <Data activeData={activeData} setActiveData={setActiveData} />
      </main>

      <Footer />
    </div>
  );
}
