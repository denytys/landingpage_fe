import {
  LayoutGrid,
  Settings,
  Monitor,
  Clock,
  FileText,
  Bell,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

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
        <div className="grid grid-cols-2 gap-6 p-6 bg-white/30 backdrop-blur-md rounded-[60px] shadow-md">
          <MenuItem
            icon={LayoutGrid}
            label="Best Trust"
            url="https://apps.karantinaindonesia.go.id/"
          />
          <MenuItem
            icon={Settings}
            label="Sys-Admin"
            url="https://apps.karantinaindonesia.go.id/sys-admin/"
          />
          <MenuItem
            icon={Monitor}
            label="Web Mon"
            url="https://intranet.karantinaindonesia.go.id/webmon/"
          />
          <MenuItem
            icon={Clock}
            label="ePresensi"
            url="https://presensi.karantinaindonesia.go.id/"
          />
        </div>

        {/* SIDEBAR 2 */}
        <div className="grid grid-cols-3 gap-6 p-6 bg-white/30 backdrop-blur-md rounded-[60px] shadow-md">
          <MenuItem
            icon={FileText}
            label="PTK Online"
            url="https://ptk.karantinaindonesia.go.id/"
          />
          <MenuItem
            icon={Bell}
            label="Prior Notice"
            url="https://notice.karantinaindonesia.go.id/"
          />
          <MenuItem
            icon={ShieldCheck}
            label="Check Cert"
            url="https://ptk.karantinaindonesia.go.id/check-cert/"
          />
          <MenuItem
            icon={ClipboardCheck}
            label="PassQ"
            url="https://passq.karantinaindonesia.go.id/officer/"
          />
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white/30 backdrop-blur-md rounded-t-[50px] text-center p-4 text-xs">
        Powered by Best Trust © 2025
      </footer>
    </div>
  );
}
