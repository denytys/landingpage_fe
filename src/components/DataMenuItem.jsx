import { useState } from "react";
import { motion } from "framer-motion";
import { useLoading } from "./GlobalLinkLoader";

export default function DataMenuItem({
  icon: Icon,
  colorIcon: ColorIcon,
  label,
  menus = [],
}) {
  const [open, setOpen] = useState(false);
  const { setLoading } = useLoading();

  return (
    <motion.div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      whileHover={{ scale: 1.04 }}
      className="
        group cursor-pointer
        w-70 md:w-130
        rounded-[36px]
        bg-white/30
        hover:bg-blue-600/30
        shadow-md
        transition-all duration-400
      "
    >
      {/* HEADER */}
      <div className="flex items-start gap-4 px-6 py-6">
        <div className="relative w-16 h-16 rounded-2xl bg-white/40 flex items-center justify-center flex-none shrink-0">
          <Icon
            size={32}
            className="
              absolute text-slate-700
              transition-all duration-500
              group-hover:scale-75 group-hover:opacity-0
            "
          />

          {ColorIcon &&
            (typeof ColorIcon === "string" ? (
              <img
                src={ColorIcon}
                alt={label}
                className="
                  absolute w-9 h-9 object-contain
                  opacity-0 scale-75
                  transition-all duration-700
                  group-hover:opacity-100 group-hover:scale-110
                "
              />
            ) : (
              <ColorIcon
                size={32}
                className="
                  absolute
                  opacity-0 scale-75
                  transition-all duration-700
                  group-hover:opacity-100 group-hover:scale-110
                "
              />
            ))}
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold text-slate-800 leading-tight">
            {label}
          </h3>

          <p className="text-xs text-slate-600 mt-1 leading-snug">
            {label === "Strategic" &&
              "Data historis yang dapat digunakan untuk keperluan pengambilan keputusan secara komprehensif serta dapat digunakan pula oleh instansi lain untuk menganalisa serta data awal pengambilan kebijakan sektoral."}

            {label === "Early Warning" &&
              "Informasi preborder dan peringatan dini untuk keperluan pengambilan keputusan sebagai upaya tindakan pencegahan atau mitigasi resiko dalam tindakan operasional karantina."}

            {label === "Daily" &&
              "Data realtime operasional perkarantinaan di Unit Pelaksana Teknis Karantina"}

            {label === "Tactical" &&
              "Data terkait kegiatan operasional karantina disemua lokus yang menggambarkan pola penerapan kebijakan teknis Badan Karantina Indonesia."}
          </p>
        </div>
      </div>

      {/* SUB MENU */}
      <div
        className={`grid gap-3 px-6 overflow-hidden transition-all duration-600 ease-out 
          ${open ? "pb-6 max-h-75 opacity-100" : "pb-0 max-h-0 opacity-0"}`}
      >
        {menus.map((item, i) => (
          <div
            key={i}
            className="
              flex items-center gap-3
              p-3 rounded-xl
              bg-white/50 hover:bg-white/70
              transition cursor-pointer
            "
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                window.open(item.url, "_blank", "noopener,noreferrer");
                setLoading(false);
              }, 1800);
            }}
          >
            <item.icon size={18} className="text-slate-700" />
            <span className="text-xs font-medium text-slate-800">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
