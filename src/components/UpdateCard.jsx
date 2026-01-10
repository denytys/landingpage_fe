import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleArrowRight } from "lucide-react";

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
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const raw = UPDATES[index].title;
  const [titleTag, restText] = raw.split("—");

  return (
    <div className="mt-2">
      <div className="w-full p-2">
        <div className="h-8 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-gray-700 px-4"
            >
              <div className="flex items-center justify-center gap-2">
                <CircleArrowRight size={16} className="shrink-0" />

                <span className="text-[12px] font-semibold px-2 py-0.5 border border-green-400 rounded-lg bg-green-300/60">
                  {titleTag?.trim()}
                </span>

                <span className="text-[12px]">{restText?.trim()}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
