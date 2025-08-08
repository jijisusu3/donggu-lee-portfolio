import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const timeoutId = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ignoreScrollRef = useRef(false);
  const toggleMobileMenu = () => {
    ignoreScrollRef.current = true;
    setIsMobileMenuOpen((prev) => !prev);

    setTimeout(() => {
      ignoreScrollRef.current = false;
    }, 500);
  };

  const navigate = useNavigate();
  const handleNavigateHomeTop = () => {
    navigate("/", { state: { scrollToTop: true } });
  };
  const handleNavigateResearch = () => {
    navigate("/research", { state: { scrollToTop: true, ts: Date.now() } });
  };

  const handleNavigateToSection = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (ignoreScrollRef.current) return;

      const currentScrollY = window.scrollY;

      clearTimeout(timeoutId.current);
      timeoutId.current = setTimeout(() => {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        lastScrollY.current = currentScrollY;
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!showNav) {
      setIsMobileMenuOpen(false);
    }
  }, [showNav]);

  return (
    <nav
      className={`bg-black sticky top-0 z-50 shadow-md transition-transform duration-150 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={handleNavigateHomeTop}
          className="text-white text-[28px] font-extrabold cursor-pointer"
        >
          Donggu.<span className="text-gray-300">Lee</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 text-white font-medium text-sm">
          <button
            onClick={handleNavigateHomeTop}
            className="hover:text-gray-400 transition"
          >
            Home
          </button>
          <button
            onClick={handleNavigateResearch}
            className="hover:text-gray-400 transition"
          >
            Research
          </button>
          <button
            onClick={() => handleNavigateToSection("cv")}
            className="hover:text-gray-400 transition"
          >
            CV
          </button>
          <button
            onClick={() => handleNavigateToSection("contact")}
            className="hover:text-gray-400 transition"
          >
            Contact
          </button>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <img
            className="w-6 h-6"
            src={isMobileMenuOpen ? "/nav_x.svg" : "/nav_hamburger.svg"}
            alt="menu"
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-6 p-2 bg-black">
          <div className="flex flex-col space-y-4">
            <div
              onClick={handleNavigateHomeTop}
              className="text-white text-lg tracking-wider font-semibold border-b border-gray-700 pb-2 cursor-pointer"
            >
              Home
            </div>
            <div
              onClick={handleNavigateResearch}
              className="text-white text-lg tracking-wider font-semibold border-b border-gray-700 pb-2 cursor-pointer"
            >
              Research
            </div>
            <div
              onClick={() => handleNavigateToSection("cv")}
              className="text-white text-lg tracking-wider font-semibold border-b border-gray-700 pb-2 cursor-pointer"
            >
              CV
            </div>
            <div
              onClick={() => handleNavigateToSection("contact")}
              className="text-white text-lg tracking-wider font-semibold border-b border-gray-700 pb-2 cursor-pointer"
            >
              Contact
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
