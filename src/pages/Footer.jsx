import {
  ArrowBigLeftDash,
  Loader,
  Globe2,
  Facebook,
  Music2,
  Instagram,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white/50 backdrop-blur-md rounded-t-[50px] px-6 py-2 shadow-md">
      <div className="relative flex items-center">
        {/* Tengah */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-xs text-gray-700 font-normal">
            Powered by Best Trust © 2026
          </p>
        </div>

        {/* Tengen */}
        <div className="ml-auto mr-2">
          <motion.div
            layout
            className="group flex items-center gap-4 px-4 py-2 transition-all duration-300 overflow-hidden"
          >
            <div className="relative">
              <ArrowBigLeftDash
                size={18}
                className="text-slate-700 transition-all group-hover:opacity-0 group-hover:scale-0"
              />
              <Loader
                size={18}
                className="text-slate-700 absolute top-0 left-0 opacity-0 scale-0 transition-all group-hover:opacity-100 group-hover:scale-100 animate-spin"
              />
            </div>

            <div className="flex items-center gap-2 max-w-0 opacity-0 transition-all duration-700 group-hover:max-w-500 group-hover:opacity-100 text-gray-700">
              {[
                { Comp: Globe2, url: "https://karantinaindonesia.go.id" },
                {
                  Comp: Facebook,
                  url: "https://www.facebook.com/badankarantinaindonesia",
                },
                { Comp: Music2, url: "https://www.tiktok.com/@barantinri" },
                {
                  Comp: Instagram,
                  url: "https://www.instagram.com/barantin_ri/",
                },
                {
                  Comp: Youtube,
                  url: "https://www.youtube.com/@BadanKarantinaIndonesia",
                },
              ].map(({ Comp, url }, i) => (
                <motion.a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  layout
                  whileHover={{ y: -8, scale: 1.35 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="p-1 rounded-full"
                >
                  <Comp size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
