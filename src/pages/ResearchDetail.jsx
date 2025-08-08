import { useParams } from "react-router-dom";
import { researchDetailItems } from "../data/research";

function ResearchDetail() {
  const { id } = useParams();
  const data = researchDetailItems.find((item) => item.id === Number(id));

  return (
    <section className="max-w-[1080px] mx-auto px-10 py-10 md:px-8 md:py-16 text-black space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-extrabold text-gray-400 mb-1">
          &gt; Research Detail
        </h2>
        <a
          href={data.publicationLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.publicationLink ? (
            <div className="font-bold mx-auto px-[28px] py-[8px] border border-white bg-gray-400 rounded text-white hover:text-white hover:bg-gray-500 hover:border transition cursor-pointer">
              Selected Paper
            </div>
          ) : (
            <div
              className="mx-auto px-[28px] py-[8px] border border-gray-300 bg-gray-200 rounded text-gray-500 font-bold cursor-not-allowed"
              title="This publication will be available soon."
            >
              Available Soon
            </div>
          )}
        </a>
      </div>
      <h1 className="text-2xl font-bold my-6">{data.title}</h1>

      <h2 className="text-xl font-semibold mt-16">📄 Overview</h2>
      <p className="my-8 px-2 md:px-5 leading-7 text-base text-gray-800">
        {data.sections.overview.description}
      </p>
      <div className="grid md:grid-cols-2 items-center gap-6 my-16">
        {data.sections.overview.images.map((img, idx) => (
          <img key={idx} src={img} alt="overview" className="rounded" />
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-20">💡 Motivation</h2>
      <ul className="list-disc px-5 md:px-10 my-8 leading-7 text-gray-800">
        {data.sections.motivation.bullets.map((item, idx) => (
          <li className="my-3" key={idx}>
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-20">📌 Main Contributions</h2>
      <ul className="list-disc px-5 md:px-10 my-8 leading-7 text-gray-800">
        {data.sections.contributions.bullets.map((item, idx) => (
          <li className="my-3" key={idx}>
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-20">🛠 Tools</h2>
      <ul className="list-disc px-5 md:px-10 my-8 leading-7 text-gray-800">
        {data.sections.tools.bullets.map((item, idx) => (
          <li className="my-3" key={idx}>
            {item}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-20">📊 Representative Results</h2>
      <div className="space-y-8 mb-8">
        {data.sections.results.map((section, idx) => (
          <div key={idx}>
            <h3 className="font-bold mt-10 mb-8">
              {idx + 1}. {section.title}
            </h3>
            <ul className="list-disc px-5 md:px-10 my-8 leading-7 text-gray-800">
              {section.description.map((item, idx) => (
                <li className="my-3" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <div className={`flex flex-wrap justify-center gap-6 mt-16 mb-20`}>
              {section.images.map((img, idx) => {
                const count = section.images.length;
                let widthClass = "w-full";

                if (count <= 2) {
                  widthClass = "w-full md:w-[48%]";
                } else {
                  widthClass = "w-full md:w-[30%]";
                }

                return (
                  <img
                    key={idx}
                    src={img}
                    alt={`image-${idx}`}
                    className={` ${widthClass}`}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-20">📚 Resources</h2>
      <ul className="list-disc pl-5 px-5 md:px-10 text-gray-800">
        {data.sections.resources.links.map((link, idx) => (
          <li className="my-3" key={idx}>
            {link.page ? (
              <a
                href={link.page}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:underline cursor-pointer"
              >
                {link.title}
              </a>
            ) : (
              <span className="text-gray-500 cursor-default">{link.title}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ResearchDetail;
