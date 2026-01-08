import { useState } from "react";
import { motion } from "framer-motion";

export default function DataMenuItem({
  icon: Icon,
  colorIcon: ColorIcon,
  label,
  menus = [],
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      whileHover={{ scale: 1.04 }}
      className="
        group cursor-pointer
        w-63
        rounded-[36px]
        bg-white/30
        hover:bg-blue-600/30
        shadow-md
        transition-all duration-500
      "
    >
      {/* HEADER – FIXED HEIGHT */}
      <div className="flex items-center gap-4 px-6 h-24">
        {/* ICON WRAPPER */}
        <div className="relative w-14 h-14 rounded-2xl bg-white/30 flex items-center justify-center">
          {/* OUTLINE ICON */}
          <Icon
            size={32}
            className="
              absolute text-slate-700
              transition-all duration-500
              group-hover:scale-75 group-hover:opacity-0
            "
          />

          {/* COLOR ICON */}
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

        <h3 className="text-lg font-semibold text-slate-800 leading-tight">
          {label}
        </h3>
        {/* <p>
          Data historis yang dapat digunakan untuk keperluan pengambilan
          keputusan dan kebijakan sektoral.
        </p> */}
      </div>

      {/* SUB MENU – NATURAL EXPAND */}
      <div
        className={`
          grid gap-3 px-6 pb-6
          overflow-hidden
          transition-all duration-500 ease-out
          ${open ? "max-h-75 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {menus.map((item, i) => (
          <div
            key={i}
            onClick={() =>
              window.open(item.url, "_blank", "noopener,noreferrer")
            }
            className="
              flex items-center gap-3
              p-3 rounded-xl
              bg-white/50 hover:bg-white/70
              transition
            "
          >
            <item.icon size={18} className="text-slate-700" />
            <span className="text-sm font-medium text-slate-800">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
