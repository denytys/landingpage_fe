export default function MenuItem({
  icon: Icon,
  colorIcon: ColorIcon,
  label,
  url,
}) {
  return (
    <div
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
      className="cursor-pointer"
    >
      <div
        className="group flex flex-col items-center gap-2 transition-all duration-300
        ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-115"
      >
        {/* CARD */}
        <div
          className="w-19 md:w-26 h-19 md:h-26 rounded-[28px] bg-white/30 flex items-center justify-center 
          shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-blue-600/30"
        >
          {/* ICON WRAPPER */}
          <div className="relative w-11.5 h-11.5">
            {/* LUCIDE ICON */}
            <Icon
              size={46}
              strokeWidth={1.5}
              className="absolute inset-0 text-slate-700 transition-all duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-75
              group-hover:opacity-0 z-10"
            />

            {/* COLOR ICON (FC atau IMAGE) */}
            {ColorIcon &&
              (typeof ColorIcon === "string" ? (
                <img
                  src={ColorIcon}
                  alt={label}
                  className="absolute inset-0 w-full h-full object-contain opacity-0 scale-75
                  transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100
                  group-hover:scale-130 z-0 pointer-events-none"
                />
              ) : (
                <ColorIcon
                  size={46}
                  className="absolute inset-0 opacity-0 scale-75 transition-all duration-900
                  ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:scale-120
                  z-0 pointer-events-none"
                />
              ))}
          </div>
        </div>

        {/* LABEL */}
        <span className="text-xs font-semibold text-slate-800 tracking-wide">
          {label}
        </span>
      </div>
    </div>
  );
}
