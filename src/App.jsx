import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import ShowcaseHub from "./sections/ShowcaseHub";
import ShowcaseCategoryPage from "./sections/ShowcaseCategoryPage";
import ShowcaseMonGym from "./sections/ShowcaseMonGym";
import ShowcaseRooMate from "./sections/ShowcaseRooMate";
import ShowcaseUniShop from "./sections/ShowcaseUniShop";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import LinkedInSection from "./sections/LinkedInSection";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import AcademicSection from "./sections/AcademicSection";
import AboutHero from "./sections/AboutHero";

// Home page layout
const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutHero />
      <ShowcaseHub />
      
      <ExperienceSection />
      <TechStack />
      <AcademicSection />
      <Testimonials />
      <LogoSection />
      <LinkedInSection />
      <FeatureCards />
      <Contact />
      <Footer />
    </>
  );
};

// Project detail page layout
const ProjectPage = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />

        {/* Category routes - shows all projects in that category */}
        <Route
          path="/showcase/:categoryId"
          element={
            <ProjectPage>
              <ShowcaseCategoryPage />
            </ProjectPage>
          }
        />

        {/* Project detail routes */}
        <Route
          path="/project/mongym"
          element={
            <ProjectPage>
              <ShowcaseMonGym />
            </ProjectPage>
          }
        />
        <Route
          path="/project/roomate"
          element={
            <ProjectPage>
              <ShowcaseRooMate />
            </ProjectPage>
          }
        />
        <Route
          path="/project/unishop"
          element={
            <ProjectPage>
              <ShowcaseUniShop />
            </ProjectPage>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
