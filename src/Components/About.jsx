import React, { useEffect } from "react";
import "../Styles/About.css";
import { Link } from "react-scroll";
import aboutImg from "../Images/about-image.webp";
import LazyBackground from "./LazyBackground";
import { aboutAnim } from "../Animations";

function About() {

  useEffect(() => {
    aboutAnim();
  }, []);

  return (
    <section id="about-section">
      <div className="about-container">
        <div className="about-content">
          <h3>about us</h3>
          <h1>20 years of excellence in coating services</h1>
          <p>
            Mastercoat Group has been Melbourne's trusted partner for premium
            exterior finishes for two decades. As specialists in architectural
            rendering and protective coatings, we bring unparalleled expertise
            to residential, commercial, governmental and heritage projects
            across Victoria.
          </p>
          <p>Our commitment to excellence is built on:</p>
          <ul>
            <li className="about-bullet">
              <span>Technical Mastery:</span> Advanced application techniques
              honed over 20 years
            </li>
            <li className="about-bullet">
              <span>Material Excellence:</span> Partnerships with leading
              coating manufacturers
            </li>
            <li className="about-bullet">
              <span>Project Integrity:</span> Meticulous attention to detail
              from surface preparation to final inspection
            </li>
          </ul>
          <p>
            We take pride in enhancing Melbourne's architectural landscape while
            protecting structures against Australia's demanding climate
            conditions.
          </p>
          <Link
            key="contact"
            to="contact-section"
            smooth={true}
            duration={800}
            offset={-70}
            className="about-btn"
          >
            Get in touch
          </Link>
        </div>
        <div className="about-image">
          <LazyBackground src={aboutImg} />
        </div>
      </div>
    </section>
  );
}

export default About;
