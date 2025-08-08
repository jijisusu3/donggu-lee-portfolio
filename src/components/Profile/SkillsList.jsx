import { skills } from "../../data/profile";
function SkillsList() {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        <span className="font-lg font-bold text-[#000AFF] bg-[#D0E6FF] px-3 py-[2px] rounded-xl my-2">
          Skills
        </span>
      </div>
      <ul className="ml-2 mt-1 space-y-2">
        {skills.map((skill, index) => (
          <li key={index}>
            <strong>{skill.category}</strong>: {skill.items.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SkillsList;
