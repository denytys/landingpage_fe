import logo from "../assets/images/barantin.png";
import UpdateCard from "../components/UpdateCard";

export default function Header() {
  return (
    <header className="bg-white/30 backdrop-blur-md rounded-b-[50px] px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Barantin" className="ml-2 h-14" />

          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              Landing Page Barantin
            </h1>
            <p className="text-sm text-gray-600">Aplikasi Terintegrasi</p>
          </div>
        </div>

        {/* RIGHT */}
        <UpdateCard />
      </div>
    </header>
  );
}
