import TitleHeader from "../components/TitleHeader";
import { academicCards } from "../constants";

const AcademicSection = () => {
  return (
    <section
      id="academics"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Academic Journey"
          sub="🎓 My Education Timeline"
        />
        <div className="mt-20 flex flex-col gap-16">
          {academicCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col md:flex-row items-start gap-10 bg-white/5 p-8 rounded-xl border border-white/10"
            >
              <div className="w-full md:w-1/4 flex justify-center">
                <img
                  src={card.logoPath}
                  alt={card.title}
                  className="max-h-34 object-contain rounded-xl"
                />
              </div>
              <div className="w-full md:w-3/4">
                <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
                <p className="text-white-50 mb-4">🗓️ {card.date}</p>
                <p className="italic text-[#839CB5] mb-3">{card.review}</p>
                <ul className="list-disc ms-5 text-white-50 space-y-2">
                  {card.details.map((item, idx) => (
                    <li key={idx} className="text-lg">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
