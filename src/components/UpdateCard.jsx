import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const UPDATES = [
  {
    title:
      "Update ESPS V.2.0 — 10/01/2025 : Penambahan menu chat bot | Penyesuaian dashboard",
  },
  {
    title:
      "Update Web Mon V.2.0 — 08/01/2025 : UX/UI terbaru | Penambahan fitur untuk Admin UPT",
  },
];

export default function UpdateCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % UPDATES.length);
    }, 4000);

    return () => clearInterval(t);
  }, []);

  // 🔹 Pisahkan "judul — deskripsi"
  const raw = UPDATES[index].title;
  const [titleTag, restText] = raw.split("—");

  return (
    <div className="mt-4">
      <div className="w-140 bg-white/30 backdrop-blur-md rounded-[30px] shadow-lg p-2">
        <div className="h-8 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-gray-700 text-center px-2"
            >
              {/* ⭐ Badge Judul */}
              <span className="text-[12px] font-semibold px-2 border border-green-400 rounded-lg bg-green-300/60">
                {titleTag?.trim()}
              </span>

              {/* ➜ Sisa teks */}
              <span className="text-[12px]"> {restText?.trim()}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
