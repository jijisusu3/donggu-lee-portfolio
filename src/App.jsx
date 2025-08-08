import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Research from "./pages/Research";
import ResearchDetail from "./pages/ResearchDetail";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter basename="/donggu-lee-portfolio">
      <div className="bg-white text-white min-h-screen font-sans">
        <Navbar />
        <BrowserRouter basename="/donggu-lee-portfolio">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/:id" element={<ResearchDetail />} />
          </Routes>
        </BrowserRouter>

        <footer className="text-center py-6 text-sm text-gray-400 mt-90">
          Made by Jisu Kim © 2025
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
