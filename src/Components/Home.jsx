import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Getquote from "./Getquote";
import { Helmet } from "react-helmet";

function Home() {
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollToId) {
      scroller.scrollTo(location.state.scrollToId, {
        smooth: true,
        duration: 500,
        offset: -70,
      });

      // Clear the scroll state after scrolling
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <Helmet>
        <title>MasterCoat Group</title>
      </Helmet>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Getquote />
    </>
  );
}

export default Home;
