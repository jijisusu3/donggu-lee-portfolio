import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Research from "./pages/Research";
import ResearchDetail from "./pages/ResearchDetail";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="bg-white text-white min-h-screen font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:id" element={<ResearchDetail />} />
        </Routes>

        <footer className="text-center py-6 text-sm text-gray-400 mt-90">
          Made by Jisu Kim © 2025
        </footer>
      </div>
    </Router>
  );
}

export default App;
