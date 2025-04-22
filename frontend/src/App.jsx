import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contents from "./components/ui/Contents.jsx";
import BranchIT from "./pages/Branch_it.jsx";
import Mechanical from "./pages/Mechanical.jsx";
import Team from "./pages/Team.jsx";
import Syllabus from "./pages/Syllabus.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Signin } from "./pages/Signin.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LandingPage />} />
        <Route path="/branchIT" element={<BranchIT />} />
        <Route path="/Mechanical" element={<Mechanical />} />
        <Route path="/branchIT/:contents" element={<Contents />} />
        <Route path="/about" element={<Team />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/" element={<Signup />} />
        <Route path="/auth" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
