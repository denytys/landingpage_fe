import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }) {
  const { authType } = useAuth();

  // belum login & belum guest
  if (!authType) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
