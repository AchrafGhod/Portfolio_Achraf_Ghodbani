import { memo } from "react";
import GlowCard from "./GlowCard";

const ExperienceCard = memo(
  ({
    card,
    contractFilters,
    domainFilters,
  }) => {
    return (
      <div className="exp-card-wrapper timeline-card">
        <div className="xl:w-2/6">
          <GlowCard card={card}>
            <div>
              <img src={card.imgPath} alt="exp-img" />
            </div>
          </GlowCard>
        </div>
        <div className="xl:w-4/6">
          <div className="flex items-start">
            <div className="timeline-wrapper">
              <div className="timeline" />
              <div className="gradient-line w-1 h-full" />
            </div>
            <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
              <div className="timeline-logo">
                <img src={card.logoPath} alt="logo" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="font-semibold text-3xl">{card.title}</h1>
                  {card.status ? (
                    <span
                      className={`exp-tag status ${
                        card.status === "Actuel"
                          ? "status-live"
                          : "status-past"
                      }`}
                    >
                      {card.status}
                    </span>
                  ) : null}
                </div>

                <p className="my-3 text-white-50">🗓️&nbsp;{card.date}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {card.contractType ? (
                    <span
                      className={`exp-tag ${
                        contractFilters.includes(card.contractType)
                          ? "exp-tag-active"
                          : ""
                      }`}
                    >
                      {card.contractType}
                    </span>
                  ) : null}
                  {card.domain ? (
                    Array.isArray(card.domain) ? (
                      card.domain.map((d) => (
                        <span
                          key={d}
                          className={`exp-tag ${
                            domainFilters.includes(d) ? "exp-tag-active" : ""
                          }`}
                        >
                          {d}
                        </span>
                      ))
                    ) : (
                      <span
                        className={`exp-tag ${
                          domainFilters.includes(card.domain)
                            ? "exp-tag-active"
                            : ""
                        }`}
                      >
                        {card.domain}
                      </span>
                    )
                  ) : null}
                  {card.tags?.map((tag) => (
                    <span key={tag} className="exp-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[#839CB5] italic">Responsibilities</p>
                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                  {card.responsibilities.map((responsibility, index) => (
                    <li key={index} className="text-lg">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;
