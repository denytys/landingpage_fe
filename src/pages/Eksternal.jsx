import { SmilePlus, FileText, Megaphone, FileSearchCorner } from "lucide-react";

import {
  FcApprove,
  FcDocument,
  FcAdvertising,
  FcFinePrint,
} from "react-icons/fc";

import MenuItem from "../components/MenuItem";

export default function Eksternal() {
  return (
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
  );
}
