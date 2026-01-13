import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projectShowcase, showcaseCategories } from "../constants";
import GlowCardContainer from "../components/GlowCardContainer";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseCategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);

  const category = useMemo(
    () => showcaseCategories.find((cat) => cat.id === categoryId),
    [categoryId]
  );

  const categoryProjects = useMemo(
    () => projectShowcase.filter((project) => project.categories.includes(categoryId)),
    [categoryId]
  );

  useGSAP(() => {
    gsap.utils.toArray(".project-card-item").forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, [categoryProjects]);

  const handleBackToShowcase = () => {
    navigate("/#work");
    setTimeout(() => {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  if (!category) {
    return (
      <section className="min-h-screen flex-center pt-32">
        <div className="text-center">
          <h1 className="text-3xl text-white mb-4">Category not found</h1>
          <button
            onClick={handleBackToShowcase}
            className="text-accent hover:underline"
          >
            Back to Showcase
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex-center pt-32 pb-20 section-padding">
      <div className="w-full h-full md:px-20 px-5 max-w-6xl">
        {/* Back button - Enhanced */}
        <button
          onClick={handleBackToShowcase}
          className="inline-flex items-center gap-2 px-4 py-2 text-white-50 hover:text-white transition-all duration-300 mb-12 group border border-white-20 hover:border-white-50 rounded-lg hover:bg-white-5"
          role="link"
          aria-label="Back to project showcase"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium">Back to Showcase</span>
        </button>

        {/* Header - Enhanced with Gradient Background */}
        <div className="mb-20">
          <div className="relative -mx-5 md:-mx-20 px-5 md:px-20 py-12 rounded-2xl mb-8" style={{ background: `linear-gradient(135deg, ${category.color}10 0%, ${category.color}05 100%)` }}>
            <div className="flex items-start gap-6">
              <div className="text-7xl filter drop-shadow-lg flex-shrink-0">
                {category.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {category.title}
                    </h1>
                    <p className="text-lg font-semibold" style={{ color: category.color }}>
                      {category.subtitle}
                    </p>
                  </div>
                  
                  {/* Project count badge */}
                  <div 
                    className="flex items-center justify-center w-16 h-16 rounded-full text-white font-bold text-2xl flex-shrink-0"
                    style={{ 
                      backgroundColor: category.color,
                      boxShadow: `0 0 30px ${category.color}60`
                    }}
                  >
                    {categoryProjects.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-white-50 text-lg leading-relaxed">
              {category.description}
            </p>
            
            {/* Category Label */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-white-50">Category:</span>
              <span 
                className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{
                  backgroundColor: `${category.color}20`,
                  border: `1.5px solid ${category.color}60`,
                  color: category.color
                }}
              >
                {category.title}
              </span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {categoryProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categoryProjects.map((project) => (
              <GlowCardContainer
                key={project.id}
                glowColor={project.thumbnailColor}
                className="project-card-item rounded-xl overflow-hidden group cursor-pointer relative transition-all duration-500 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  boxShadow: hoveredProject === project.id 
                    ? `0 20px 40px ${project.thumbnailColor}40` 
                    : "0 10px 20px rgba(0, 0, 0, 0.3)",
                  focusRingColor: project.thumbnailColor
                }}
                role="button"
                tabIndex={0}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleProjectClick(project.id);
                  }
                }}
                onClick={() => handleProjectClick(project.id)}
                aria-label={`${project.title} project`}
              >
                {/* Animated Background Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${project.thumbnailColor}15 0%, ${project.thumbnailColor}05 100%)`,
                    backdropFilter: "blur(10px)"
                  }}
                />

                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden bg-white-5">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 relative z-10 flex flex-col gap-3 min-h-[280px]">
                  {/* Animated Separator Line */}
                  <div className="h-1 w-0 group-hover:w-12 transition-all duration-500" style={{ backgroundColor: project.thumbnailColor }} />

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white group-hover:translate-x-1 transition-transform duration-300">
                    {project.title}
                  </h3>

                  {/* Role */}
                  <p className="text-sm font-medium transition-all duration-300" style={{ color: hoveredProject === project.id ? project.thumbnailColor : "#839CB5" }}>
                    {project.role}
                  </p>

                  {/* Tags with enhanced styling */}
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-white-10 text-white-70 group-hover:bg-white-20 group-hover:text-white transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-white-50 text-base leading-relaxed flex-grow group-hover:text-white-70 transition-colors duration-300">
                    {project.shortDescription}
                  </p>

                  {/* CTA - Gradient Line + Mini Button */}
                  <div className="flex items-center justify-between mt-auto pt-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-white-20 to-transparent group-hover:from-white-50 transition-all duration-300" />
                    
                    <div 
                      className="ml-4 px-4 py-2 rounded-lg border-2 flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                      style={{
                        borderColor: hoveredProject === project.id ? project.thumbnailColor : "rgba(255, 255, 255, 0.2)",
                        backgroundColor: hoveredProject === project.id ? `${project.thumbnailColor}15` : "transparent",
                        boxShadow: hoveredProject === project.id ? `0 0 12px ${project.thumbnailColor}40` : "none"
                      }}
                    >
                      <span className="text-sm font-semibold text-white-70 group-hover:text-white transition-all duration-300 whitespace-nowrap">
                        View Details
                      </span>
                      <svg
                        className="w-4 h-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        style={{ color: hoveredProject === project.id ? project.thumbnailColor : "rgba(255, 255, 255, 0.7)" }}
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
        ) : (
          <div className="text-center py-20">
            <p className="text-white-50 text-lg">
              No projects found in this category yet. Check back soon!
            </p>
          </div>
        )}

        {/* CTA Footer */}
        <div className="mt-24 pt-16 border-t border-white-20 text-center">
          <p className="text-white-50">
            Want to explore other disciplines?{" "}
            <button
              onClick={handleBackToShowcase}
              className="text-white-70 hover:text-white transition-colors font-medium underline"
              aria-label="Back to showcase categories"
            >
              Back to showcase
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseCategoryPage;
