import { useGSAP } from "@gsap/react";
import { useMemo, useEffect } from "react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import LinkedInCard from "../components/LinkedInCard";
import { socialImgs } from "../constants";

const LinkedInSection = () => {
  const linkedinIcon = useMemo(() => 
    socialImgs.find(s => s.name === 'linkedin')?.imgPath || '/images/linkedin.png',
    []
  );

  useEffect(() => {
    if (!document.querySelector('script[src="https://platform.linkedin.com/in.js"]')) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/in.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".linkedin-content",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#linkedin",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="linkedin" className="flex-center section-padding">
      <div className="w-full h-full padding-x">
        <TitleHeader
          title="Stay Connected on LinkedIn"
          sub="💼 Latest Updates & Insights"
        />
        <div className="linkedin-content px-5 md:px-10 xl:px-20 mt-10">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 xl:gap-6">
            <LinkedInCard
              key="reflexion-2025"
              icon={linkedinIcon}
              title="Réflexion 2025"
              desc="Clap de fin : 2025 a été une année dense et riche en expériences professionnelles"
              type="post"
              link="https://www.linkedin.com/feed/update/urn:li:activity:7414608017826004992/"
            />
            <LinkedInCard
              key="lvmh-accessibilite"
              icon={linkedinIcon}
              title="LVMH & Accessibilité"
              desc="Exploration de l'accessibilité chez LVMH et Sephora"
              type="post"
              link="https://www.linkedin.com/posts/achraf-ghodbani_lvmh-sephora-accessibility-activity-7391501076593811456-W1UG"
            />
            <LinkedInCard
              key="developpeur-junior"
              icon={linkedinIcon}
              title="Développeur Junior"
              desc="Mon parcours en tant que junior software engineer, tech for good et design to code"
              type="post"
              link="https://www.linkedin.com/posts/achraf-ghodbani_juniorsoftwareengineer-techforgood-designtocode-activity-7320883432757071873--hpM"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInSection;