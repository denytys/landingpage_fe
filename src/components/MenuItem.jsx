import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { protectedLink } from "../auth/ProtectedLink";

export default function MenuItem({ colorIcon: ColorIcon, label, url }) {
  const navigate = useNavigate();
  const { authType } = useAuth();

  return (
    <div
      onClick={() =>
        protectedLink({
          authType,
          navigate,
          url,
        })
      }
      className="cursor-pointer"
    >
      <div
        className="
          flex flex-col items-center gap-3
          transition-transform duration-300 ease-out
          hover:scale-115
          will-change-transform
        "
      >
        <div
          className="
            w-19 md:w-26 h-19 md:h-26
            rounded-[28px]
            bg-white/30
            flex items-center justify-center
            shadow-sm
            transition-all duration-300
            hover:shadow-lg hover:bg-blue-600/30
          "
        >
          <div className="w-14 h-14 flex items-center justify-center">
            {typeof ColorIcon === "string" ? (
              <img
                src={ColorIcon}
                alt={label}
                className="w-full h-full object-contain pointer-events-none"
              />
            ) : (
              <ColorIcon size={48} />
            )}
          </div>
        </div>

        <span className="text-xs font-normal text-slate-800 tracking-wide text-center">
          {label}
        </span>
      </div>
    </div>
  );
}
