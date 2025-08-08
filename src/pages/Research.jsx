import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ResearchOverviewCard from "../components/Research/ResearchOverviewCard";
import { researchOverviewItems } from "../data/research";
import {
  internationalJournal,
  internationalConference,
  KoreaJournal,
} from "../data/researchDetailInfo";

function Research() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scroll = location.state?.scrollToTop;
    if (scroll) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
        navigate(location.pathname, { replace: true });
      }, 400);
    }
  }, [location.state?.scrollToTop, location.state?.ts]);

  return (
    <div className="max-w-[1080px] mx-auto px-10 py-10 md:px-8 md:py-16 text-black space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-extrabold text-gray-400 mb-1">
          &gt; Research
        </h2>
        <a
          href="https://scholar.google.com/citations?user=nBGrpW8AAAAJ&hl=en"
          target="_blank"
          className="inline-flex items-center gap-3 font-bold px-[20px] py-[8px] border border-white bg-gray-400 rounded text-white hover:border-gray-500 hover:text-white hover:bg-gray-500 hover:border transition cursor-pointer"
        >
          Google Scholar
        </a>
      </div>
      <section>
        <div className="space-y-12">
          <h2 className="text-xl font-semibold">🗂️ Research Overview</h2>
          {researchOverviewItems.map((item) => (
            <ResearchOverviewCard key={item.id} {...item} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mt-20">
          📘 International Journal
        </h2>
        <ul className="list-decimal px-5 md:px-10 my-8 leading-7 text-gray-800">
          {internationalJournal.map((item, idx) => (
            <li
              className="my-3 cursor-pointer hover:underline"
              key={idx}
              onClick={() => window.open(item.url, "_blank")}
            >
              &nbsp;{item.authors}, “{item.title}” {item.journal}, {item.info}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mt-20">
          🌍 International Conference
        </h2>
        <ul className="list-decimal px-5 md:px-10 my-8 leading-7 text-gray-800">
          {internationalConference.map((item, idx) => (
            <li
              className="my-3 cursor-pointer hover:underline"
              key={idx}
              onClick={() => window.open(item.url, "_blank")}
            >
              &nbsp;{item.authors}, “{item.title}” {item.journal} {item.info}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mt-20">📖 Korea Journal</h2>
        <ul className="list-decimal px-5 md:px-10 my-8 leading-7 text-gray-800">
          {KoreaJournal.map((item, idx) => (
            <li className="my-3" key={idx}>
              &nbsp;{item.authors}, “{item.title}” {item.journal}, {item.info}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Research;
