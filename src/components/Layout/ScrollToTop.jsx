import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        const timeout = setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);

        return () => clearTimeout(timeout);
      }

      navigate(location.pathname, { replace: true });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location, navigate]);

  return null;
};

export default ScrollToTop;
