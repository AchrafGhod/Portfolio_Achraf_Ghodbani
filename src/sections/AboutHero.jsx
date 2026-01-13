import { useState } from "react";
import { aboutHeroData } from "../constants";
import TitleHeader from "../components/TitleHeader";
import CardContainer from "../components/CardContainer";
import CardTitleSection from "../components/CardTitleSection";
import CardContentGrid from "../components/CardContentGrid";
import ProfileImage from "../components/ProfileImage";
import ContentSection from "../components/ContentSection";

const AboutHero = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { imageSrc, headline, badges, subtitle, sections } = aboutHeroData;
  
  return (
    <>
      <section className="section-padding flex items-center justify-center">
        <TitleHeader title="First, discover my profile" sub="👤 Who I Am & My Journey" />
      </section>

      <section id="about-hero" className="flex items-center justify-center py-12 md:py-16 lg:py-20">
        <CardContainer>
          <CardTitleSection 
            headline={headline} 
            badges={badges} 
            subtitle={subtitle} 
          />
          
          <CardContentGrid>
            <ProfileImage src={imageSrc} alt="Profile" />
            <ContentSection 
              sections={sections} 
              isExpanded={isExpanded} 
              onToggle={() => setIsExpanded(!isExpanded)}
            />
          </CardContentGrid>
        </CardContainer>
      </section>
    </>
  );
};

export default AboutHero;
