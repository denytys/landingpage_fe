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
  FileClock,
  MessageSquareWarning,
  BookOpen,
  Truck,
  ShieldCheck,
  AlertTriangle,
  Globe,
  Activity,
} from "lucide-react";

import {
  FcSettings,
  FcAdvertising,
  FcDocument,
  FcFinePrint,
  FcApprove,
  FcVoicePresentation,
  FcAbout,
} from "react-icons/fc";

import iconBT from "../assets/images/iconbt.png";
import iconPS from "../assets/images/iconpresensi.png";
import iconPQ from "../assets/images/iconpassq.png";
import iconES from "../assets/images/iconesps.png";
import iconWM from "../assets/images/iconwebmon.png";
import MenuItem from "../components/MenuItem";
import DataMenuItem from "../components/DataMenuItem";
import logo from "../assets/images/barantin.png";

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
        <div className="flex items-center gap-4">
          <img src={logo} alt="Barantin" className="h-16" />

          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Landing Page Barantin
            </h1>
            <p className="text-sm text-gray-600">
              Sistem Aplikasi Terintegrasi
            </p>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="flex-1 flex flex-wrap justify-center items-center gap-8 my-6">
        {/* SIDEBAR 1 */}
        <div className="relative">
          <div className="absolute -top-5 left-8 z-10">
            <div className="px-6 py-2 bg-white/40 backdrop-blur-md rounded-full text-sm font-semibold text-gray-700 shadow-md">
              Internal
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
              icon={QrCode}
              colorIcon={iconPQ}
              label="PassQ"
              url="https://passq.karantinaindonesia.go.id/officer/"
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
              Eksternal
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
          </div>
        </div>

        {/* SIDEBAR 3 */}
        <div className="relative">
          <div className="absolute -top-5 left-9 z-10">
            <div className="px-6 py-2 bg-white/40 backdrop-blur-md rounded-full text-sm font-semibold text-gray-700 shadow-md">
              Data
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 p-6 pt-10 bg-white/30 backdrop-blur-md rounded-[50px] shadow-md">
            <DataMenuItem
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

            <DataMenuItem
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
