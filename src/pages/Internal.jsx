import iconBT from "../assets/images/iconbt2.png";
import iconPS from "../assets/images/iconpresensi.png";
import iconPQ from "../assets/images/iconpassq.png";
import iconES from "../assets/images/iconesps.png";
import iconWM from "../assets/images/iconwebmon.png";
import iconEL from "../assets/images/iconelab.png";
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

      <div className="grid grid-cols-4 gap-8 p-6 px-10 py-10 bg-white/30 backdrop-blur-md rounded-[40px] shadow-md">
        <MenuItem
          colorIcon={iconBT}
          label="Layanan Sertifikasi"
          url="https://apps.karantinaindonesia.go.id/"
        />

        <MenuItem
          colorIcon={iconEL}
          label="e-Lab"
          url="https://elab.karantinaindonesia.go.id/"
        />

        <MenuItem
          colorIcon={iconPS}
          label="Sys-Admin"
          url="https://apps.karantinaindonesia.go.id/sys-admin/"
        />
        <MenuItem
          colorIcon={iconWM}
          label="Web Mon"
          url="https://intranet.karantinaindonesia.go.id/webmon/"
        />
        <MenuItem
          colorIcon={iconPQ}
          label="All Indonesia-PassQ"
          url="https://passq.karantinaindonesia.go.id/officer/"
        />
        <MenuItem
          colorIcon={iconPS}
          label="ePresensi"
          url="https://presensi.karantinaindonesia.go.id/"
        />
        <MenuItem
          colorIcon={iconES}
          label="ESPS"
          url="https://intranet.karantinaindonesia.go.id/esps/"
        />
      </div>
    </div>
  );
}
