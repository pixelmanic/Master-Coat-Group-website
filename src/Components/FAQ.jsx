import React, { useEffect } from "react";
import "../Styles/FAQ.css";
import { faqAnim } from "../Animations";

function FAQ() {
  useEffect(() => {
    faqAnim();
  }, [])
  return (
    <section id="FAQ-section">
      <div className="faq-container container">
        <div className="faq-title">
          <div className="sc-title">common queries</div>
        </div>
        <div className="faq-subtitle sc-subtitle">
          <em>why choose MasterCoat Group </em>
        </div>
        <div className="faq-queries">
          <p className="faq-queries-one">
            ✅<span>Over 20 Years of Industry Experience </span>
            – A trusted name in Melbourne and beyond
            <br />✅<span>Expertise in Rendering & Painting </span>
            – High-quality, long-lasting finishes
            <br />✅<span>Diverse Project Experience </span>
            – Residential, commercial, luxury homes, renovations & government
            work
            <br />✅<span>Reliable & On-Time Delivery </span>
            – Precision-driven results without delays
            <br />✅<span>Serving All of Victoria </span>
            – Melbourne, Geelong, Ballarat, Bendigo & regional areas
            <br />✅<span>10-Year Guarantee </span>
            – Assurance of quality and durability
            <br />✅<span>Competitive Pricing </span>
            – Premium quality at the best value
            <br />
          </p>
          <p className="faq-queries-two">
            At
            <span> MasterCoat Group</span>
            , we Stand by our promise:
            <br />
            <span>"Your vision, Our Mastery."</span>
          </p>
          <p className="faq-queries-three">
            Let's bring your project to life.
            <span> Contact us today!</span>
          </p>
        </div>
        <div className="faq-bottom">
          <div className="faq-info-wrapper">
            <div className="faq-info-box">
              <div>
                <div className="info-box-title">
                  What types of rendering services do you offer?
                </div>
                <div className="info-box-desc">
                  At Mastercoat Group, we specialize in a comprehensive range of
                  external rendering services tailored to meet your specific
                  needs. Our expertise includes brick rendering, foam
                  installation and supply, Hebel installation, and various
                  finishes such as polished, sand finish, and bag render. We
                  pride ourselves on delivering high-quality results for both
                  residential and commercial projects. Whether you're looking to
                  enhance the appearance of your luxury home, renovate an
                  existing structure, or require government building solutions,
                  our skilled team is ready to help you achieve the perfect
                  finish.
                </div>
              </div>
            </div>
            <div className="faq-info-box">
              <div>
                <div className="info-box-title">
                  What painting services are available?
                </div>
                <div className="info-box-desc">
                  Mastercoat Group offers an extensive selection of painting
                  services to suit any project. Our skilled painters are
                  proficient in various types of paints, including oil paint,
                  enamel paint, emulsion paint, plastic paint, anti-corrosive
                  paint, and texture paint. We also provide specialized
                  techniques like painting on texture to ensure a stunning
                  finish every time. Whether it’s a commercial building,
                  residential home, or a luxury renovation, our team is
                  dedicated to delivering impeccable results that elevate your
                  space and enhance its overall aesthetic.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
