import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseProjectPage = ({ project }) => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.utils.toArray(".project-section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  const handleBackToProjects = () => {
    navigate("/#work");
    setTimeout(() => {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section className="min-h-screen flex-center pt-32 pb-20 section-padding">
      <div className="w-full h-full md:px-20 px-5 max-w-5xl">
        {/* Back button */}
        <button
          onClick={handleBackToProjects}
          className="inline-flex items-center gap-2 text-white-50 hover:text-white transition-colors mb-12 group"
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
          <span>Back to Projects</span>
        </button>

        {/* Header */}
        <TitleHeader title={project.title} sub={project.tags.join(" • ")} />

        {/* Hero Image */}
        <div className="project-section mt-12 rounded-xl overflow-hidden border border-white-10">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto max-h-96 object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="project-section mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Description & Details */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-white mb-6">Overview</h2>
              <p className="text-white-50 leading-relaxed text-lg mb-6">
                {project.longDescription}
              </p>
              <p className="text-white-40 text-base">
                <span className="font-semibold text-white">Role:</span> {project.role}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-white mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex gap-4 text-white-50 leading-relaxed"
                  >
                    <span className="text-accent font-semibold mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="mb-12 p-6 rounded-lg bg-gradient-to-r from-accent-10 to-transparent border border-accent-20">
              <h3 className="text-2xl font-semibold text-white mb-3 flex items-center gap-2">
                <span>✨</span> Impact
              </h3>
              <p className="text-white-50 leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Technologies */}
            <div className="sticky top-32 space-y-8">
              <div className="p-6 rounded-lg bg-white-5 border border-white-10">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🛠️</span> Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-white-10 text-white-70 border border-white-20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-dark text-white font-medium text-center hover:shadow-lg hover:shadow-accent/50 transition-all"
                  >
                    View Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 rounded-lg border border-white-20 text-white font-medium text-center hover:bg-white-5 transition-all"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="project-section mt-20 pt-12 border-t border-white-10 text-center">
          <p className="text-white-50 mb-6">
            Interested in more of my work?
          </p>
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-dark text-white font-medium hover:shadow-lg hover:shadow-accent/50 transition-all"
          >
            <span>Back to Projects</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseProjectPage;
