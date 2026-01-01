import { Routes, Route, NavLink } from "react-router-dom";
import Nexus from "./pages/Nexus";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e12] text-[#d1d4dc] font-sans">
      <nav className="flex gap-4 p-4 border-b border-[#2a2e39]">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-neon-green font-bold" : "text-gray-400"
          }
        >
          Nexus
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "text-neon-green font-bold" : "text-gray-400"
          }
        >
          Admin
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Nexus />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}
