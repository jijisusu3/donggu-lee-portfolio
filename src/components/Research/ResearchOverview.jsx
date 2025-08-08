import SectionTitle from "../Layout/SectionTitle";
import ResearchOverviewCard from "./ResearchOverviewCard";
import { researchOverviewItems } from "../../data/research";
function ResearchOverview() {
  return (
    <section className="py-12 sm:px-6 max-w-[1080px]">
      <SectionTitle title="My Research Overview" />
      <div className="space-y-12">
        {researchOverviewItems.map((item) => (
          <ResearchOverviewCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default ResearchOverview;
