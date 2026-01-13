import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link) => {
    // If we're on a detail page and link is an anchor, navigate to home and scroll
    if (location.pathname !== "/" && link.startsWith("#")) {
      navigate(`/${link}`);
    } else if (link.startsWith("#")) {
      // If we're on home page, scroll to the section
      const target = document.querySelector(link);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname !== "/") {
              navigate("/");
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="logo"
        >
          Achraf | Ghodbani
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a 
                  href={link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link);
                  }}
                >
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
          className="contact-btn group"
        >
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;