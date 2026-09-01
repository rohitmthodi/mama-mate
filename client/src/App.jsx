import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import RoleSelection from "./components/RoleSection";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/role" element={<RoleSelection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;