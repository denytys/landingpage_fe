import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import axios from "axios";
import { CircleUser, Eye, EyeOff, Key } from "lucide-react";
import bgLogin from "../assets/images/background1.png";
import iconBarantin from "../assets/images/barantin.png";
import iconBesttrust from "../assets/images/Logo-best-trust.png";
import { logDev } from "../utils/logDev";
import { message, Modal, Spin } from "antd";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

    if (Number(captchaAnswer) !== captcha.a + captcha.b) {
      alert("Captcha salah");
      generateCaptcha();
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_LANDINGPAGE_BE}/auth/login`,
        {
          username,
          password,
        },
      );

      const res = response.data;

      if (res.status && typeof res.token === "string") {
        setErrorCount(0);

        login({
          user: res.user,
          roles: res.user?.roles || [],
          token: res.token,
        });

        message.success("Yeay, Berhasil Login. Selamat Datang!");
        navigate("/", { replace: true });
      } else {
        handleWrongPassword(res.message || "Login gagal (token tidak valid)");
      }
    } catch (error) {
      logDev(error);
      handleWrongPassword(
        error.response?.data?.message || "Username atau password salah.",
      );
      generateCaptcha();
    } finally {
      setLoading(false);
    }
  };

  const handleWrongPassword = (msg) => {
    const newCount = errorCount + 1;
    setErrorCount(newCount);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
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
          {/* <div className="flex flex-row gap-2"></div> */}
          <img src={iconBarantin} alt="Barantin" className="h-16 mb-2" />
          <h2 className="text-lg font-semibold">Layanan Digital</h2>
          {/* <h2 className="text-lg font-semibold">Sistem Informasi</h2> */}
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
          className="w-full text-xs py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white mb-4 flex items-center justify-center gap-2"
        >
          {loading && <Spin size="small" />}
          {loading ? "Login.." : "Login"}
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

      {/* Modal Peringatan */}
      <Modal
        open={isModalVisible}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        footer={[
          <button
            key="ok"
            onClick={handleModalClose}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Mengerti
          </button>,
        ]}
        centered
        closable={false}
        Style={{
          borderRadius: "16px",
          background: "linear-gradient(145deg, #ffffff, #f0fdf4)",
          padding: "24px",
        }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Icon animasi peringatan */}
          <div className="relative mb-4">
            <div className="animate-pulse bg-red-100 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.72-1.36 3.485 0l6.518 11.592c.75 1.336-.213 2.991-1.742 2.991H3.48c-1.53 0-2.493-1.655-1.743-2.991L8.257 3.1zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-.25-6.75a.75.75 0 00-1.5 0v4a.75.75 0 001.5 0v-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Judul dan pesan */}
          <h3 className="text-lg font-bold text-red-600 mb-2">
            Peringatan Login Gagal
          </h3>
          <p className="text-gray-700">
            Password yang Anda masukkan tidak sesuai.
          </p>
          <p className="text-gray-600 mt-2">
            Percobaan salah ke-{errorCount} dari 5.
          </p>
          <div className="mt-3 p-3 bg-gray-100 rounded-xl text-sm text-red-500 w-full">
            ⚠️ Jika Anda memasukkan password salah sebanyak{" "}
            <strong>5 kali</strong>, akun akan <b>diblokir</b>.
          </div>
        </div>
      </Modal>

      {/* Custom Input Styles */}
      <style>{`
          .custom-input,
          .custom-input-password-wrapper.ant-input-password {
            border: 1px solid #DEE8CE !important;
            border-radius: 0.5rem !important;
            transition: border-color 0.3s ease;
          }
          .custom-input:hover,
          .custom-input-password-wrapper.ant-input-password:hover {
            border-color: #059669 !important;
          }
          .custom-input:focus,
          .custom-input.ant-input-focused,
          .custom-input-password-wrapper.ant-input-password:focus-within {
            border-color: #059669 !important;
            outline: none;
          }
        `}</style>
    </div>
  );
}
