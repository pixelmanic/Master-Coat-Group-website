import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LazyBackground from "./LazyBackground";
import "../Styles/ServiceDetails.css";
import { sdPageAnim } from "../Animations/pageAnim";

function ServiceDetails() {
  useEffect(() => {
    sdPageAnim();
  }, []);

  const location = useLocation();
  const { service } = location.state || {};

  if (!service) return <p>Services not found</p>;
  return (
    <>
      <section className="service-details">
        <div className="sd-wrapper container">
          <div className="sd-image">
            <LazyBackground src={service.image} />
          </div>

          <div className="sd-content">
            <h1 className="sc-title">{service.title}</h1>
            <p>{service.details}</p>
            <Link to="/scheduling" className="sd-btn">
              Schedule appointment
            </Link>
          </div>
        </div>
      </section>
      <section className="prefooter-section">
        <div className="prefooter-container container">
          <div className="prefooter-content">
            <h1>Let's talk</h1>
            <h3>We would love to hear from you!</h3>
          </div>
          <div className="prefooter-btn">
            <Link key="contact" to="/" state={{ scrollToId: "contact-section" }}>
              get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetails;
