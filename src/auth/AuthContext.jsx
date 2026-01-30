import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [auth, setAuth] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ums_user"));
    } catch {
      return null;
    }
  });

  const [authType, setAuthType] = useState(() => {
    return localStorage.getItem("auth_type");
  });

  const login = (payload) => {
    setAuth(payload);
    setAuthType("user");
    localStorage.setItem("ums_user", JSON.stringify(payload));
    localStorage.setItem("auth_type", "user");
  };

  const loginAsGuest = () => {
    setAuth(null);
    setAuthType("guest");
    localStorage.setItem("auth_type", "guest");
  };

  const logout = () => {
    setAuth(null);
    setAuthType(null);
    localStorage.removeItem("ums_user");
    localStorage.removeItem("auth_type");
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        user: auth?.user,
        roles: auth?.roles || [],
        authType,
        isGuest: authType === "guest",
        isUser: authType === "user",
        login,
        loginAsGuest,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
