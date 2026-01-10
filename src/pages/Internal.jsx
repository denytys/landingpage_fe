import {
  LayoutDashboard,
  Settings,
  ChartNoAxesColumn,
  QrCode,
  Clock,
  GitCompare,
} from "lucide-react";

import iconBT from "../assets/images/iconbt.png";
import iconPS from "../assets/images/iconpresensi.png";
import iconPQ from "../assets/images/iconpassq.png";
import iconES from "../assets/images/iconesps.png";
import iconWM from "../assets/images/iconwebmon.png";
import MenuItem from "../components/MenuItem";
import { useLoading } from "../components/GlobalLinkLoader";

export default function Internal() {
  const { setLoading } = useLoading();

  return (
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
          colorIcon={iconPS}
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
  );
}
