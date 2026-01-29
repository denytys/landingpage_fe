import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import axios from "axios";
import { CircleUser, Eye, EyeOff, Key } from "lucide-react";
import bgLogin from "../assets/images/background.png";
import iconLanding from "../assets/images/iconlandingpage.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [captcha, setCaptcha] = useState({ a: 0, b: 0 });
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  const { login, loginAsGuest } = useAuth();
  const navigate = useNavigate();

  const generateCaptcha = () => {
    setCaptcha({
      a: Math.floor(Math.random() * 9) + 1,
      b: Math.floor(Math.random() * 9) + 1,
    });
    setCaptchaAnswer("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // CAPTCHA CHECK
    if (Number(captchaAnswer) !== captcha.a + captcha.b) {
      alert("Captcha salah");
      generateCaptcha();
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "https://api.karantinaindonesia.go.id/ums/login",
        { username, password },
        { headers: { "Content-Type": "text/plain" } },
      );

      const payload = {
        user: res.data.data,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
        expiry: res.data.expiry,
        roles: res.data.data.detil || [],
      };

      login(payload);
      navigate("/", { replace: true });
    } catch (err) {
      alert("Login gagal");
      generateCaptcha();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-95 rounded-3xl p-8 
                   bg-white/30 backdrop-blur-xs
                   border border-white/30
                   shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                   text-gray-800"
      >
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-8">
          <img src={iconLanding} alt="Barantin" className="h-16 mb-2" />
          <h2 className="text-lg font-semibold">Sistem Informasi</h2>
          <p className="text-sm text-gray-700">Badan Karantina Indonesia</p>
        </div>

        {/* USERNAME */}
        {/* <label className="block ml-3 mb-1 text-xs font-normal">username</label> */}
        <div className="relative w-full mb-4">
          <CircleUser
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700"
          />
          <input
            className="w-full text-xs pl-10 px-4 py-2 rounded-xl bg-white/40 outline-none ring-0 focus:outline-none focus:ring-0"
            placeholder="ketik username disini, bukan di status wa"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        {/* <label className="block ml-3 mb-1 text-xs font-normal">password</label> */}
        <div className="relative mb-4">
          <Key
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="ketik password disini, buat ngintip -> "
            className="w-full text-xs px-4 pl-10 py-2 pr-10 rounded-xl bg-white/40 outline-none ring-0 focus:outline-none focus:ring-0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <Eye size={14} /> : <EyeOff size={14} />}
          </button>
        </div>

        {/* CAPTCHA */}
        <div className="flex flex-row gap-2 items-center mb-6">
          <label className="block ml-3 mr-3 mb-1 text-3xl font-semibold w-2/4 text-gray-600 bg-black/70">
            {captcha.a} + {captcha.b}
          </label>
          <input
            className="w-full text-xs px-4 py-5 rounded-xl bg-gray-500/20 outline-none ring-0 focus:outline-none focus:ring-0"
            placeholder="Jawaban"
            value={captchaAnswer}
            onChange={(e) => setCaptchaAnswer(e.target.value)}
          />
        </div>

        {/* LOGIN */}
        <button
          disabled={loading}
          className="w-full text-xs py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white mb-4"
        >
          {loading ? "Login..." : "Login"}
        </button>

        {/* GUEST */}
        <button
          type="button"
          onClick={() => {
            loginAsGuest();
            navigate("/", { replace: true });
          }}
          className="w-full text-xs py-2 rounded-full bg-gray-500 hover:bg-gray-600 transition-all duration-300 text-white"
        >
          Masuk sebagai Tamu
        </button>

        {/* FOOTER */}
        <p className="mt-6 text-center text-xs text-gray-600">
          © 2026 Barantin — v.1.0.0
        </p>
        {/* <p className="mt-2 text-center text-xs text-gray-600">
          - powered by best-trust -
        </p> */}
      </form>
    </div>
  );
}
