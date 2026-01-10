import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import UpdateCard from "../components/UpdateCard";

import {
  FileClock,
  MessageSquareWarning,
  CalendarDays,
  Disc2,
  BookOpen,
  Truck,
  ShieldCheck,
  AlertTriangle,
  Globe,
  Activity,
  MousePointerClick,
} from "lucide-react";

import {
  FcVoicePresentation,
  FcAbout,
  FcPlanner,
  FcDoughnutChart,
} from "react-icons/fc";

import DataMenuItem from "../components/DataMenuItem";

export default function Data({ activeData, setActiveData }) {
  const [page, setPage] = useState(1);

  return (
    <div className="relative">
      <div className="absolute -top-5 left-9 z-10">
        <div className="px-6 py-2 bg-white/40 backdrop-blur-md rounded-full text-sm font-semibold text-gray-700 shadow-md">
          Data
        </div>
      </div>

      {/* ===== CARD MENU ===== */}
      <div
        onMouseLeave={() => setActiveData(null)}
        className="grid md:grid-cols-1 gap-4 p-6 pt-10 bg-white/30 backdrop-blur-md rounded-[50px] shadow-md"
      >
        <AnimatePresence mode="wait">
          {/* PAGE 1 */}
          {page === 1 && (
            <motion.div
              key="page1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <DataMenuItem
                id="strategic"
                activeData={activeData}
                setActiveData={setActiveData}
                icon={FileClock}
                colorIcon={FcVoicePresentation}
                label="Strategic"
                menus={[
                  {
                    label: "Katalog Ekspor",
                    icon: BookOpen,
                    url: "https://app.powerbi.com/view?r=eyJrIjoiY2E2YjZiN2YtNGUwMS00YTYxLWI3NDEtMjdlODk3ZjdhZDExIiwidCI6IjFiNmQ3NTQ1LWE3YmEtNGVmZi05YjU1LWY1MTZiNTk2MWZlMCIsImMiOjEwfQ%3D%3D",
                  },
                  {
                    label: "Distribusi Komoditas",
                    icon: Truck,
                    url: "https://app.powerbi.com/view?r=eyJrIjoiMDI0ZjkzOTktODE2Yi00ZDIwLWI4ZWItMWMxMTk4OGUxODE0IiwidCI6IjFiNmQ3NTQ1LWE3YmEtNGVmZi05YjU1LWY1MTZiNTk2MWZlMCIsImMiOjEwfQ%3D%3D",
                  },
                  {
                    label: "Sertifikasi Karantina",
                    icon: ShieldCheck,
                    url: "https://app.powerbi.com/view?r=eyJrIjoiN2JkOTYyYmUtMzk2NC00MmI0LWE0ZmYtMDYyYjM2YjhjN2JkIiwidCI6IjFiNmQ3NTQ1LWE3YmEtNGVmZi05YjU1LWY1MTZiNTk2MWZlMCIsImMiOjEwfQ%3D%3D",
                  },
                ]}
              />
            </motion.div>
          )}

          {/* PAGE 2 */}
          {page === 2 && (
            <motion.div
              key="page2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <DataMenuItem
                id="early"
                activeData={activeData}
                setActiveData={setActiveData}
                icon={MessageSquareWarning}
                colorIcon={FcAbout}
                label="Early Warning"
                menus={[
                  {
                    label: "Informasi Domas",
                    icon: AlertTriangle,
                    url: "https://notice.karantinaindonesia.go.id/puskodal/login.php",
                  },
                  {
                    label: "Incoming e-Certificate",
                    icon: Globe,
                    url: "https://esps.karantinaindonesia.go.id/dashboard/main",
                  },
                  {
                    label: "Prior Notice",
                    icon: Activity,
                    url: "https://notice.karantinaindonesia.go.id/puskodal/login.php",
                  },
                ]}
              />
            </motion.div>
          )}

          {/* PAGE 3 */}
          {page === 3 && (
            <motion.div
              key="page3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <DataMenuItem
                id="daily"
                activeData={activeData}
                setActiveData={setActiveData}
                icon={CalendarDays}
                colorIcon={FcPlanner}
                label="Daily"
                menus={[
                  {
                    label: "Klik disini",
                    icon: MousePointerClick,
                    url: "https://e.infogram.com/8b96a2e5-83c4-4529-88d7-8c910255cbb0?src=embed",
                  },
                ]}
              />
            </motion.div>
          )}

          {/* PAGE 4 */}
          {page === 4 && (
            <motion.div
              key="page4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <DataMenuItem
                id="tactical"
                activeData={activeData}
                setActiveData={setActiveData}
                icon={Disc2}
                colorIcon={FcDoughnutChart}
                label="Tactical"
                menus={[
                  {
                    label: "Klik disini",
                    icon: MousePointerClick,
                    url: "https://e.infogram.com/ba6f2f28-5191-4666-9677-d9fdf802eee9?src=embed",
                  },
                ]}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== PAGINATION GLASS ===== */}
        <div className="mt-2 flex justify-center">
          <div className="flex gap-3 px-4 py-2">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`
                w-10 h-10 rounded-full font-semibold transition
                ${
                  page === num
                    ? "bg-white/70 text-gray-900 shadow-xl"
                    : "bg-white/20 text-gray-700 hover:bg-white/40"
                }
              `}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* ===== UPDATE INFO CARD ===== */}
      <UpdateCard />
    </div>
  );
}
