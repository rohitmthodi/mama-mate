import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import RoleSelection from "./components/role-section/RoleSection";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./auth/ProtectedRoute";
import MotherDashboard from "./dashboards/MotherDashboard";
import AppLayout from "./layouts/AppLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/role" element={<RoleSelection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      <Route element={<ProtectedRoute allowedRoles={["mother"]} />}>
        <Route element={<AppLayout />}>
          <Route path="/mother/dashboard" element={<MotherDashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
