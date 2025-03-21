import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar.jsx";
import BranchIT from "./pages/Branch_it.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/branchIT" element={<BranchIT/>} />
      </Routes>
    </Router>
  );
}

export default App;
