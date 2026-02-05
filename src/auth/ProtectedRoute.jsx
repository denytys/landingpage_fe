import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { authType } = useAuth();
  const location = useLocation();

  if (!authType) {
    return <Navigate to="/login" replace />;
  }

  if (authType && location.pathname === "/login") {
    return <Navigate to="/portal" replace />;
  }

  return children;
}
