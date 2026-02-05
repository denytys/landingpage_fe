import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Portal from "./pages/Portal";
import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* default → login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      {/* portal */}
      <Route
        path="/portal"
        element={
          <ProtectedRoute>
            <Portal />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
