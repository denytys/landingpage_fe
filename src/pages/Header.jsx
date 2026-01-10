import {
  ArrowBigLeftDash,
  Loader,
  Globe2,
  Facebook,
  Music2,
  Instagram,
  Youtube,
} from "lucide-react";
import logo from "../assets/images/barantin.png";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md rounded-b-[50px] px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Barantin" className="ml-2 h-14" />

          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              Landing Page Barantin
            </h1>
            <p className="text-sm text-gray-600">
              Sistem Aplikasi Terintegrasi
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="mr-2">
          <motion.div
            layout
            className="group flex items-center gap-4 bg-white/10 rounded-full px-4 py-2 shadow-md 
            transition-all duration-500 overflow-hidden"
          >
            <div className="relative">
              <ArrowBigLeftDash
                size={18}
                className="text-slate-700 transition-all group-hover:opacity-0 group-hover:scale-0"
              />
              <Loader
                size={18}
                className="text-slate-700 absolute top-0 left-0 opacity-0 scale-0 
                transition-all group-hover:opacity-100 group-hover:scale-100 animate-spin"
              />
            </div>

            <div
              className="flex items-center gap-2 max-w-0 opacity-0 transition-all duration-700 
              group-hover:max-w-500 group-hover:opacity-100 text-gray-700"
            >
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
                  whileHover={{
                    y: -8,
                    scale: 1.35,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="p-1 rounded-full"
                >
                  <Comp size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
