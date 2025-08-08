import { Link } from "react-router-dom";

const ResearchOverviewCard = ({
  title,
  description,
  tags,
  image1,
  image2,
  detailLink,
  publicationLink,
}) => {
  return (
    <div className="bg-white text-black px-5 md:px-8 py-8 rounded shadow space-y-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs font-semibold text-[#2AB090] bg-[#E0FFF8] px-3 py-[4px] rounded-2xl"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold text-gray-900">{title}</h3>

      <div className="grid md:grid-cols-2 gap-6 my-4">
        <img src={image1} alt="research1" className="rounded w-full" />
        <img src={image2} alt="research2" className="rounded w-full" />
      </div>

      <p className="text-base text-gray-800 leading-7">{description}</p>

      <div className="flex flex-wrap gap-4 mt-4">
        <Link
          to={`${import.meta.env.BASE_URL}${detailLink}`}
          className="px-5 py-2 font-medium text-white bg-black rounded hover:bg-gray-600 transition"
        >
          Research Detail
        </Link>
        {publicationLink ? (
          <a
            href={publicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 font-medium text-gray-800 border border-gray-700 rounded hover:bg-gray-100 transition"
          >
            Selected Paper
          </a>
        ) : (
          <span
            className="px-5 py-2 font-medium text-gray-400 border border-gray-300 bg-gray-100 rounded cursor-not-allowed"
            title="This publication will be available soon."
          >
            Available Soon
          </span>
        )}
      </div>
    </div>
  );
};

export default ResearchOverviewCard;
