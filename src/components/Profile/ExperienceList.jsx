import { experiences } from "../../data/profile.js";
function ExperienceList() {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        <span className="font-lg font-bold text-[#2AB090] bg-[#E0FFF8] px-3 py-[2px] rounded-xl my-2">
          Work Experience
        </span>
      </div>
      <div className="ml-2 space-y-4">
        {experiences.map((exp, index) => (
          <div key={index}>
            <p className="font-bold">{exp.company}</p>
            <p className="">{exp.title}</p>
            <p className="text-sm !text-gray-500 md:!text-gray-300">
              {exp.location} / {exp.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ExperienceList;
