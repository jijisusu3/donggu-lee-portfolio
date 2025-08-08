import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SectionTitle from "../components/Layout/SectionTitle";
import ResearchOverview from "../components/Research/ResearchOverview";
import ProfileSection from "../components/Profile/ProfileSection";
import CvViewer from "../components/CvViewer";
import ContactSection from "../components/Contact/ContactSection";

function Home() {
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
    } else if (location.state?.scrollToTop) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, 300);

      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="flex flex-col">
      <div id="profile" className="w-full text-black md:bg-black md:text-white">
        <ProfileSection />
      </div>

      <div id="researchOverview" className="w-full">
        <div className="max-w-[1080px] mx-auto px-4">
          <ResearchOverview />
        </div>
      </div>

      <div id="cv" className="w-full">
        <div className="max-w-[1080px] mx-auto px-4 mt-24">
          <SectionTitle title="CV" />
          <CvViewer />
        </div>
      </div>

      <div id="contact" className="w-full">
        <div className="max-w-[1080px] mx-auto px-4 mt-24">
          <SectionTitle title="Contact" />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
