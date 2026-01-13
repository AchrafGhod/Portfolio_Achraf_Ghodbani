import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useMemo, useState } from "react";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import FilterCard from "../components/FilterCard";
import ResetFiltersButton from "../components/ResetFiltersButton";
import ExperienceCard from "../components/ExperienceCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [contractFilters, setContractFilters] = useState([]);
  const [domainFilters, setDomainFilters] = useState(["Frontend", "PMO"]);
  const [statusFilters, setStatusFilters] = useState([]);

  const contractOptions = useMemo(() => {
    const set = new Set(["All"]);
    expCards.forEach((card) => card.contractType && set.add(card.contractType));
    return Array.from(set);
  }, []);

  const domainOptions = useMemo(() => {
    return ["All", "Frontend", "Backend", "PMO", "Design"];
  }, []);

  const statusOptions = useMemo(() => {
    const set = new Set(["All"]);
    expCards.forEach((card) => card.status && set.add(card.status));
    return Array.from(set);
  }, []);

  const filteredCards = useMemo(() => {
    return expCards.filter((card) => {
      const matchContract =
        contractFilters.length === 0 || contractFilters.includes(card.contractType);
      
      let matchDomain = domainFilters.length === 0;
      if (!matchDomain && card.domain) {
        if (Array.isArray(card.domain)) {
          matchDomain = card.domain.some((d) => domainFilters.includes(d));
        } else {
          matchDomain = domainFilters.includes(card.domain);
        }
      }
      
      const matchStatus = statusFilters.length === 0 || statusFilters.includes(card.status);
      return matchContract && matchDomain && matchStatus;
    });
  }, [contractFilters, domainFilters, statusFilters]);

  const getFilterCount = useCallback((filterType, value) => {
    return expCards.filter((card) => {
      if (filterType === "contract") return card.contractType === value;
      if (filterType === "domain") {
        return Array.isArray(card.domain)
          ? card.domain.includes(value)
          : card.domain === value;
      }
      if (filterType === "status") return card.status === value;
      return false;
    }).length;
  }, []);

  const handleContractFilter = useCallback((value) => {
    if (value === "All") {
      setContractFilters([]);
    } else {
      setContractFilters((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    }
  }, []);

  const handleDomainFilter = useCallback((value) => {
    if (value === "All") {
      setDomainFilters([]);
    } else {
      setDomainFilters((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    }
  }, []);

  const handleStatusFilter = useCallback((value) => {
    if (value === "All") {
      setStatusFilters([]);
    } else {
      setStatusFilters((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    }
  }, []);

  const hasActiveFilters = contractFilters.length > 0 || domainFilters.length > 0 || statusFilters.length > 0;

  const resetFilters = useCallback(() => {
    setContractFilters([]);
    setDomainFilters([]);
    setStatusFilters([]);
  }, []);

  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Main Work Experience" sub="💼 My Career Overview" />

        <div className="mt-10 flex flex-col gap-6">
          {hasActiveFilters && <ResetFiltersButton onClick={resetFilters} />}

          <div className="flex flex-wrap items-start justify-center gap-6">
            <FilterCard
              icon="💼"
              label="Contract Type"
              options={contractOptions}
              activeFilters={contractFilters}
              onFilterChange={handleContractFilter}
              getCount={(opt) => getFilterCount("contract", opt)}
            />

            <FilterCard
              icon="⏱️"
              label="Status"
              options={statusOptions}
              activeFilters={statusFilters}
              onFilterChange={handleStatusFilter}
              getCount={(opt) => getFilterCount("status", opt)}
            />
          </div>

          <div className="flex flex-wrap items-start justify-center">
            <FilterCard
              icon="🎯"
              label="Domain"
              options={domainOptions}
              activeFilters={domainFilters}
              onFilterChange={handleDomainFilter}
              getCount={(opt) => getFilterCount("domain", opt)}
            />
          </div>
        </div>

        <div id="experience-results" className="mt-16 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {filteredCards.map((card) => (
              <ExperienceCard
                key={card.title}
                card={card}
                contractFilters={contractFilters}
                domainFilters={domainFilters}
              />
            ))}
          </div>

          {filteredCards.length > 0 && (
            <div className="mt-10 text-center">
              <p className="text-white-50 text-sm md:text-base">
                💡 Adjust filters above to explore more experiences across different domains and roles
              </p>
            </div>
          )}

          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <a
              className="exp-cta primary"
              href="https://www.linkedin.com/in/achraf-ghodbani/"
              target="_blank"
              rel="noreferrer"
            >
              View full resume
            </a>
            <a className="exp-cta" href="#contact">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
