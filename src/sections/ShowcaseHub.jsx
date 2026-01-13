import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { showcaseCategories, projectShowcase } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCardContainer from "../components/GlowCardContainer";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseHub = () => {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Count projects by category
  const projectCountByCategory = useMemo(() => {
    return showcaseCategories.reduce((acc, cat) => {
      acc[cat.id] = projectShowcase.filter(p => p.categories.includes(cat.id)).length;
      return acc;
    }, {});
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".category-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#work",
          start: "top center",
        },
      }
    );
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/showcase/${categoryId}`);
  };

  return (
    <section id="work" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Project Showcase"
          sub="🚀 Explore my work by discipline"
        />

        {/* Introduction */}
        <div className="mt-12 mb-16 w-full">
          <p className="text-white-50 md:text-xl text-lg">
            My work spans across software engineering, design, and academic research. Each category showcases projects where I've applied technical skills, creativity, and problem-solving.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid-3-cols mt-16">
          {showcaseCategories.map((category) => (
            <GlowCardContainer
              key={category.id}
              glowColor={category.color}
              className="category-card rounded-xl overflow-hidden group cursor-pointer relative transition-all duration-500 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                boxShadow: hoveredCategory === category.id 
                  ? `0 20px 40px ${category.color}40` 
                  : "0 10px 20px rgba(0, 0, 0, 0.3)",
                focusRingColor: category.color
              }}
              role="button"
              tabIndex={0}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCategoryClick(category.id);
                }
              }}
              onClick={() => handleCategoryClick(category.id)}
              aria-label={`${category.title} category with ${projectCountByCategory[category.id]} projects`}
              aria-describedby={`${category.id}-description`}
            >
              {/* Animated Background Gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${category.color}15 0%, ${category.color}05 100%)`,
                  backdropFilter: "blur(10px)"
                }}
              />

              <div className="p-8 flex flex-col gap-4 min-h-[320px] relative z-10">
                {/* Top Section: Icon + Counter */}
                <div className="flex items-start justify-between">
                  <div className="text-6xl mb-2 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
                    {category.icon}
                  </div>
                  
                  {/* Project Count Badge */}
                  <div className="flex items-center justify-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"
                      style={{ 
                        backgroundColor: category.color,
                        boxShadow: `0 0 15px ${category.color}60`
                      }}
                    >
                      {projectCountByCategory[category.id]}
                    </div>
                  </div>
                </div>

                {/* Animated Separator Line */}
                <div className="h-1 w-0 group-hover:w-12 transition-all duration-500" style={{ backgroundColor: category.color }} />

                {/* Title */}
                <h3 className="text-white text-3xl font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  {category.title}
                </h3>

                {/* Subtitle with ID for aria-describedby */}
                <p 
                  id={`${category.id}-description`}
                  className="text-sm font-medium transition-all duration-300"
                  style={{ 
                    color: hoveredCategory === category.id ? category.color : "#839CB5" 
                  }}
                >
                  {category.subtitle}
                </p>

                {/* Description */}
                <p className="text-white-50 text-lg leading-relaxed flex-grow group-hover:text-white-70 transition-colors duration-300">
                  {category.description}
                </p>

                {/* CTA Arrow - Button Style with Animated Border */}
                <div className="flex items-center justify-between mt-auto pt-6">
                  <div className="flex-1 h-px bg-gradient-to-r from-white-20 to-transparent group-hover:from-white-50 transition-all duration-300" />
                  
                  <div 
                    className="ml-4 px-4 py-2 rounded-lg border-2 flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                    style={{
                      borderColor: hoveredCategory === category.id ? category.color : "rgba(255, 255, 255, 0.2)",
                      backgroundColor: hoveredCategory === category.id ? `${category.color}15` : "transparent",
                      boxShadow: hoveredCategory === category.id ? `0 0 12px ${category.color}40` : "none"
                    }}
                  >
                    <span className="text-sm font-semibold text-white-70 group-hover:text-white transition-all duration-300 whitespace-nowrap">
                      Explore
                    </span>
                    <svg
                      className="w-4 h-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={{ color: hoveredCategory === category.id ? category.color : "rgba(255, 255, 255, 0.7)" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </GlowCardContainer>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 card-border rounded-xl p-8 text-center">
          <p className="text-white-50 md:text-lg">
            💡 <span className="text-white font-semibold">More projects available:</span> View my full portfolio on{" "}
            <a
              href="https://www.linkedin.com/in/achraf-ghodbani/details/projects/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-50 hover:text-blue-100 transition-colors underline"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="https://github.com/achraf-ghodbani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-50 hover:text-blue-100 transition-colors underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseHub;
