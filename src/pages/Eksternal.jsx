import {
  FcApprove,
  FcDocument,
  FcAdvertising,
  FcFinePrint,
} from "react-icons/fc";

import MenuItem from "../components/MenuItem";
import iconQR from "../assets/images/iconqris.png";
import { useAuth } from "../auth/AuthContext";
import { Users } from "lucide-react";

export default function Eksternal() {
  const { user, isGuest } = useAuth();
  if (!user && !isGuest) return null;

  return (
    <div className="relative">
      {!isGuest && user && (
        <div className="absolute -top-5 left-8 z-10">
          <div className="px-6 py-2 bg-white/40 backdrop-blur-md rounded-full text-sm font-semibold text-gray-700 shadow-md flex flex-row items-center justify-center gap-2">
            <Users size={18} />
            Eksternal
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-8 p-6 px-10 py-10 bg-white/30 backdrop-blur-md rounded-[40px] shadow-md">
        <MenuItem
          colorIcon={FcApprove}
          label="Registrasi"
          url="https://registrasi.karantinaindonesia.go.id/"
        />
        <MenuItem
          colorIcon={FcDocument}
          label="PTK Online"
          url="https://ptk.karantinaindonesia.go.id/"
        />
        <MenuItem
          colorIcon={FcAdvertising}
          label="Prior Notice"
          url="https://notice.karantinaindonesia.go.id/"
        />
        <MenuItem
          colorIcon={FcFinePrint}
          label="Validasi Sertifikat"
          url="https://ptk.karantinaindonesia.go.id/check-cert/"
        />

        <MenuItem
          colorIcon={iconQR}
          label="QRis PNBP"
          url="https://mpn.kemenkeu.go.id/"
        />
      </div>
    </div>
  );
}
