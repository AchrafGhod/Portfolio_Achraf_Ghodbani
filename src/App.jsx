import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import LinkedInSection from "./sections/LinkedInSection";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import AcademicSection from "./sections/AcademicSection";
import AboutHero from "./sections/AboutHero";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutHero />
      <ShowcaseSection />
      <FeatureCards />
      <TechStack />
      <ExperienceSection />
      <AcademicSection />
      <Testimonials />
      <LogoSection />
      <LinkedInSection />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
