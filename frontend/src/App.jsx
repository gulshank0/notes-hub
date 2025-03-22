import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contents from "./components/ui/Contents.jsx";
import BranchIT from "./pages/Branch_it.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/branchIT" element={<BranchIT />} />

        <Route path="/contents" element={<Contents />} />
      </Routes>
    </Router>
  );
}

export default App;
