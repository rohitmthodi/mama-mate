// import { Routes, Route } from "react-router-dom";
// import Login from "./auth/login/Login";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/login" element={<Login />} />
//     </Routes>
//   );
// };

// export default App;

import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import Login from "./auth/login/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;