import React from "react";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <section id="footer">
      <div className="footer-container container">
        <div className="footer-top">
          <Link to="/scheduling" className="footer-btn hover-effect">Schedule Appointment</Link>
          <Link to="/intake-form" className="footer-btn hover-effect">Complete Intake</Link>
          <Link to="/careers" className="footer-btn hover-effect">Careers</Link>
        </div>
        <div className="footer-bottom">
          <a href="https://www.mastercoatgroup.com/">
            MasterCoat Group {year} {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ marginLeft: "5px" }}
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 
      0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-13c-2.76 
      0-5 2.24-5 5s2.24 5 5 5c1.38 0 2.63-.56 3.54-1.46l-1.42-1.42A2.99 
      2.99 0 0112 15c-1.66 0-3-1.34-3-3s1.34-3 3-3c.83 0 1.58.34 
      2.12.88l1.42-1.42A4.978 4.978 0 0012 7z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
