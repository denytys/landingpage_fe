export default function MenuItem({ icon: Icon, label, url }) {
  return (
    <div
      onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
      className="cursor-pointer"
    >
      {/* ZOOM GROUP */}
      <div
        className="flex flex-col items-center gap-2 transition-all duration-300
        ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-115"
      >
        {/* CARD */}
        <div
          className="w-32.5 h-32.5 rounded-[28px] bg-white/70 flex items-center justify-center 
          shadow-sm transition-all duration-300 hover:shadow-lg"
        >
          <Icon size={56} strokeWidth={1.5} className="text-slate-700" />
        </div>

        {/* LABEL */}
        <span className="text-xs font-semibold text-slate-800 tracking-wide">
          {label}
        </span>
      </div>
    </div>
  );
}
