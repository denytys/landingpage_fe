import logo from "../assets/images/barantin.png";
import logo2 from "../assets/images/Logo-best-trust1.png";
// import UpdateCard from "../components/UpdateCard";
import { useAuth } from "../auth/AuthContext";
import { LogOut, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { user, roles, logout, isGuest } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  if (!user && !isGuest) return null;

  return (
    <header className="bg-white/50 backdrop-blur-md rounded-b-[50px] px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Barantin" className="ml-2 h-14" />
          <div className="px-2 py-2 bg-gray-800/90 backdrop-blur-md rounded-2xl text-sm font-semibold text-gray-700 shadow-md flex flex-row items-center justify-center gap-2">
            <img src={logo2} alt="Logo-best-trust1" className="h-8" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              Layanan Digital
            </h1>
            <p className="text-sm text-gray-600">Badan Karantina Indonesia</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 relative">
          {/* {user && <UpdateCard />} */}

          {/* USER MODE */}
          {user && (
            <>
              <div
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-3 px-4 py-2 cursor-pointer"
              >
                <div className="leading-tight text-right">
                  <p className="text-sm font-semibold">{user.nama}</p>
                  <p className="text-xs text-gray-600">
                    {user.uname} • {roles[0]?.role_name}
                  </p>
                </div>
                <div className="h-9 w-9 rounded-full bg-blue-600/80 flex items-center justify-center text-white">
                  <User size={18} />
                </div>
              </div>

              {open && (
                <div className="absolute right-3 top-full mt-5.5 w-33 bg-white/40 backdrop-blur-md rounded-2xl shadow-lg">
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-2 px-4 py-3
                               text-sm text-red-600 hover:bg-red-50/40 hover:rounded-2xl"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              )}
            </>
          )}

          {/* GUEST MODE */}
          {isGuest && (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
