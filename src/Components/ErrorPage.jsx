import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-container container">
        <h3 className="sc-title">404 Error</h3>
        <h1 className="sc-subtitle">Page not found</h1>
        <p>The page you are looking for isn't available</p>
        <Link
          key="contact"
          to="/"
          span={true}
          smooth={true}
          duration={800}
          className="about-btn"
        >
            Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
