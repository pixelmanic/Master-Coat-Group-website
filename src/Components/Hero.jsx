import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import "../Styles/Hero.css"
import { heroAnim } from '../Animations';

function Hero() {
  useEffect(() => {
    heroAnim();
  }, []);
  return (
    <section className='hero-section' style={{minHeight:"65vh"}}>
      <div className="hero-background"></div>
      <div className="hero-content">
                <h1>Transform your space <br /> with mastercoat group</h1>
                <h5>Your vision our mastery</h5>
                <Link
                  key="services"
                  to="services-section"
                  span={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="hero-btn"
                >
                  view services
                </Link>
      </div>
    </section>
  )
}

export default Hero
