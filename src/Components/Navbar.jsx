import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { navbarAnim } from "../Animations";

function Navbar() {
  const [isCrossed, setIsCrossed] = useState(false);
  
  useEffect(() => {
    navbarAnim();
  }, []);
  
  const handleClick = () => {
    setIsCrossed(!isCrossed);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" state={{ scrollToId: "hero-section" }} className="logo">
          mastercoat Group
        </Link>

        <div className={`nav-links`}>
          <Link
            key="hero"
            to="/"
            state={{ scrollToId: "hero-section" }}
            className="nav-link hover-effect"
          >
            Home
          </Link>
          <Link
            key="about"
            to="/"
            state={{ scrollToId: "about-section" }}
            className="nav-link hover-effect"
          >
            About
          </Link>
          <Link
            key="services"
            to="/"
            state={{ scrollToId: "services-section" }}
            className="nav-link hover-effect"
          >
            Services
          </Link>
          <Link
            key="testimonials"
            to="/"
            state={{ scrollToId: "testimonials-section" }}
            className="nav-link hover-effect"
          >
            Testimonials
          </Link>
          <Link
            key="gallery"
            to="/"
            state={{ scrollToId: "gallery-section" }}
            className="nav-link hover-effect"
          >
            Gallery
          </Link>
          <Link
            key="FAQ"
            to="/"
            state={{ scrollToId: "FAQ-section" }}
            className="nav-link hover-effect"
          >
            FAQ
          </Link>
        </div>
        <div className="nav-third">
          <Link
            key="contact"
            to="/"
            state={{ scrollToId: "contact-section" }}
            className="nav-link hover-effect"
          >
            Contact
          </Link>
        </div>

        {/* main-menu section starts */}

        <button
          className={`menu-toggle ${isCrossed ? "crossed" : ""}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`main-menu ${isCrossed ? "crossed" : ""}`}>
          <div className="menu-links">
            <Link
              key="hero"
              to="/"
              state={{ scrollToId: "hero-section" }}
              className="menu-btns"
              onClick={handleClick}
            >
              Home
            </Link>
            <hr />
            <Link
              key="about"
              to="/"
              state={{ scrollToId: "about-section" }}
              className="menu-btns"
              onClick={handleClick}
            >
              about
            </Link>
            <hr />
            <Link
              key="services"
              to="/"
              state={{ scrollToId: "services-section" }}
              className="menu-btns"
              onClick={handleClick}
            >
              services
            </Link>
            <hr />
            <Link
              key="testimonials"
              to="/"
              state={{ scrollToId: "testimonials-section" }}
              className="menu-btns"
              onClick={handleClick}
            >
              testimonials
            </Link>
            <hr />
            <Link
            key="gallery"
            to="/"
            state={{ scrollToId: "gallery-section" }}
            className="menu-btns"
            onClick={handleClick}
          >
            Gallery
          </Link>
            <hr />
            <Link
              key="FAQ"
              to="/"
              state={{ scrollToId: "FAQ-section" }}
              className="menu-btns"
              onClick={handleClick}
            >
              FAQ
            </Link>
            <hr />
            <Link
              key="contact"
              to="/"
              state={{ scrollToId: "contact-section" }}
              className="menu-btns"
              onClick={handleClick}
            >
              contact
            </Link>
          </div>
        </div>
        {/* main-menu section ends */}
      </div>
    </nav>
  );
}

export default Navbar;
