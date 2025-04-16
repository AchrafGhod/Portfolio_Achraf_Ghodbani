import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <a href="https://www.mongym.ca/" target="_blank" rel="nopener noreferrer" ref={rydeRef} className="first-project-wrapper block">
            <div className="image-wrapper">
              <img src="/images/project5.png" alt="MonGym App Interface" />
            </div>
            <div className="text-content">
              <h2>MonGym App</h2>
              <p className="text-white-50 md:text-xl">
                A mobile fitness app built with React Native. Custom UI designed on Figma, workout tracking, API integration. Professional project completed during an internship.
              </p>
              <Button
                text="See More Projects"
                href="https://www.linkedin.com/in/achraf-ghodbani/details/projects/"
                className="mt-10 mx-auto"
              />
            </div>
          </a>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project7.png"
                  alt="RooMate App Interface"
                />
              </div>
              <h2>RooMate Plateform</h2>
              <p className="text-white-50 md:text-xl">
                Smart roommate matching platform. Personalized matching system and admin dashboards using Python + React for cross-platform frontend. Ongoing startup project..</p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="UniShop" />
              </div>
              <h2>UniShop</h2>
              <p className="text-white-50 md:text-xl">
                A university-focused marketplace for buying and selling school materials. Web app with listings, search filters, and chat functionality. Built using a fullstack approach (React + Firebase)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;