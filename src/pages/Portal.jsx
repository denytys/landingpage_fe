import {
  Settings,
  Clock,
  FileText,
  Megaphone,
  FileSearchCorner,
  QrCode,
  SmilePlus,
  LayoutDashboard,
  GitCompare,
  ChartNoAxesColumn,
} from "lucide-react";

import {
  FcSettings,
  FcAdvertising,
  FcDocument,
  FcFinePrint,
  FcFolder,
  FcApprove,
} from "react-icons/fc";

import iconBT from "../assets/images/iconbt.png";
import iconPS from "../assets/images/iconpresensi.png";
import iconPQ from "../assets/images/iconpassq.png";
import iconES from "../assets/images/iconesps.png";
import iconWM from "../assets/images/iconwebmon.png";
import MenuItem from "../components/MenuItem";
import logo from "../assets/images/barantin-L-BW.png";

export default function Portal() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/images/background.png')",
      }}
    >
      {/* HEADER */}
      <header className="bg-white/30 backdrop-blur-md rounded-b-[50px] p-6 shadow-md">
        <img src={logo} alt="Barantin" className="h-16" />
      </header>

      {/* CONTENT */}
      <main className="flex-1 flex flex-wrap justify-center items-center gap-8 my-6">
        {/* SIDEBAR 1 */}
        <div className="relative">
          <div className="absolute -top-5 left-8 z-10">
            <div className="px-6 py-2 bg-white/40 backdrop-blur-md rounded-full text-sm font-semibold text-gray-700 shadow-md">
              Admin
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 p-6 pt-10 bg-white/30 backdrop-blur-md rounded-[60px] shadow-md">
            <MenuItem
              icon={LayoutDashboard}
              colorIcon={iconBT}
              label="Best Trust"
              url="https://apps.karantinaindonesia.go.id/"
            />

            <MenuItem
              icon={Settings}
              colorIcon={FcSettings}
              label="Sys-Admin"
              url="https://apps.karantinaindonesia.go.id/sys-admin/"
            />

            <MenuItem
              icon={ChartNoAxesColumn}
              colorIcon={iconWM}
              label="Web Mon"
              url="https://intranet.karantinaindonesia.go.id/webmon/"
            />

            <MenuItem
              icon={Clock}
              colorIcon={iconPS}
              label="ePresensi"
              url="https://presensi.karantinaindonesia.go.id/"
            />

            <MenuItem
              icon={GitCompare}
              colorIcon={iconES}
              label="ESPS"
              url="https://intranet.karantinaindonesia.go.id/esps/"
            />
          </div>
        </div>

        {/* SIDEBAR 2 */}
        <div className="relative">
          <div className="absolute -top-5 left-8 z-10">
            <div className="px-6 py-2 bg-white/40 backdrop-blur-md rounded-full text-sm font-semibold text-gray-700 shadow-md">
              Pengguna Jasa
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 p-6 pt-10 bg-white/30 backdrop-blur-md rounded-[60px] shadow-md">
            <MenuItem
              icon={SmilePlus}
              colorIcon={FcApprove}
              label="Registrasi"
              url="https://registrasi.karantinaindonesia.go.id/"
            />

            <MenuItem
              icon={FileText}
              colorIcon={FcDocument}
              label="PTK Online"
              url="https://ptk.karantinaindonesia.go.id/"
            />

            <MenuItem
              icon={Megaphone}
              colorIcon={FcAdvertising}
              label="Prior Notice"
              url="https://notice.karantinaindonesia.go.id/"
            />

            <MenuItem
              icon={FileSearchCorner}
              colorIcon={FcFinePrint}
              label="Check Cert"
              url="https://ptk.karantinaindonesia.go.id/check-cert/"
            />

            <MenuItem
              icon={QrCode}
              colorIcon={iconPQ}
              label="PassQ"
              url="https://passq.karantinaindonesia.go.id/officer/"
            />
          </div>
        </div>

        {/* SIDEBAR 3 */}
        <div className="relative">
          <div className="absolute -top-5 left-8 z-10">
            <div className="px-6 py-2 bg-white/40 backdrop-blur-md rounded-full text-sm font-semibold text-gray-700 shadow-md">
              Data
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 p-6 pt-10 w-100 h-86 bg-white/30 backdrop-blur-md rounded-[60px] shadow-md min-h-50">
            {/* isi nanti */}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white/30 backdrop-blur-md rounded-t-[50px] text-center p-4 text-xs">
        Powered by Best Trust © 2025
      </footer>
    </div>
  );
}
