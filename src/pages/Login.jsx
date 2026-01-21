import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import axios from "axios";
import { Key } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  const redirectAfterLogin =
    sessionStorage.getItem("redirectAfterLogin") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://api.karantinaindonesia.go.id/ums/login",
        { username, password },
        { headers: { "Content-Type": "text/plain" } },
      );

      auth.login(res.data);

      const redirectUrl = sessionStorage.getItem("redirectAfterLogin");

      sessionStorage.removeItem("redirectAfterLogin");

      navigate("/", { replace: true });

      if (redirectUrl) {
        window.open(redirectUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      alert("Login gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-inner p-8 rounded-2xl w-80 border border-gray-200 mt-6"
      >
        <div className="flex flex-row items-center mb-6 justify-center gap-2">
          <Key />
          <h2 className="text-lg font-bold text-center">DATA</h2>
        </div>
        <input
          className="w-full mb-3 px-4 py-2 border border-gray-400 rounded-lg"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-4 px-4 py-2 border border-gray-400 rounded-lg"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          {loading ? "Login..." : "Login"}
        </button>
        <p className="mt-4 text-center">akses login untuk halaman data</p>
      </form>
    </div>
  );
}
