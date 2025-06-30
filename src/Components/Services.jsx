import React, { useEffect } from "react";
import "../Styles/Services.css";
import service1 from "../Images/service1.webp";
import service2 from "../Images/service2.webp";
import service3 from "../Images/service3.webp";
import service4 from "../Images/service4.webp";
import service5 from "../Images/service5.webp";
import service6 from "../Images/service6.webp";
import service7 from "../Images/service7.webp";
import service8 from "../Images/service8.webp";
import LazyBackground from "./LazyBackground";
import { Link } from "react-router-dom";
import { servicesAnim } from "../Animations";

function Services() {

  useEffect(() => {
    servicesAnim();
  }, []);

  const services = [
    {
      id: 1,
      title: "Acrylic render and texture",
      description:
        "Having acrylic in the mix means the render is much stronger and more flexible than traditional mixes so it’s less likely to crack after it has been applied.",
      image: service1,
      details:
        "Experience a complete transformation of your property’s exterior with our superior rendering services. We specialize in various rendering techniques, including brick render, foam installation, and Hebel supply. Whether you prefer a polished finish, sand finish, or bag render, our skilled team ensures your vision comes to life. Ideal for both residential and commercial projects, our external rendering not only enhances aesthetic appeal but also adds protective layers to your structure. Trust us to deliver quality craftsmanship that stands the test of time and elevates your property’s value.",
    },
    {
      id: 2,
      title: "Install and supply foam cladding",
      description:
        "We provide and install lightweight foam cladding, offering excellent insulation, durability, and a smooth finish. Ideal for energy-efficient and modern building designs.",
      image: service2,
      details:
        "Breathe new life into your surroundings with our diverse painting services. We offer a wide array of options including oil paint, enamel paint, and emulsion paint for both indoor and outdoor applications. Our expertise extends to plastic paint, anti-corrosive paint, and texture paint, ensuring that every corner of your property reflects your style. Whether it's a residential renovation or a commercial project, our team’s attention to detail guarantees a flawless finish that enhances the visual appeal and durability of your surfaces. Choose us for quality that lasts and meets your unique needs.",
    },
    {
      id: 3,
      title: "Polished render",
      description:
        "Polished render is a premium rendering finish that creates a smooth, sleek, and high-end look for walls. It enhances durability, adds a modern aesthetic, and provides a refined surface that is both stylish and long-lasting. Ideal for residential, commercial, and luxury projects.",
      image: service3,
      details:
        "Transform your luxury home into a masterpiece with our expert renovation services. We understand that every detail matters when it comes to high-end properties. Our skilled team specializes in bespoke renovations tailored to your unique taste and lifestyle. From elegant finishes to innovative designs, we ensure your vision is realized with precision and care. Whether it’s a complete overhaul or a subtle update, our commitment to quality craftsmanship and attention to detail will enhance both the function and beauty of your home. Experience living in a space that truly reflects your status and style.",
    },
    {
      id: 4,
      title: "Install and supply Hebel/Nasahi",
      description:
        "We provide and install Hebel (aerated concrete panels) and Nasahi (lightweight cladding), known for insulation, fire resistance, and durability. Ideal for residential, commercial, and industrial projects, ensuring a strong, energy-efficient, and long-lasting build.",
      image: service4,
      details:
        "Experience the strength and efficiency of cutting-edge construction materials with our expert Hebel and Nasahi installation and supply services. We specialize in working with Hebel—autoclaved aerated concrete panels—and Nasahi—premium lightweight cladding solutions—both renowned for their superior insulation, fire resistance, and long-term durability. Whether you're building or renovating a residential home, commercial property, or industrial facility, our team ensures a seamless and professional installation process. These advanced systems not only reduce energy consumption by maintaining indoor temperatures but also enhance structural integrity while offering a sleek, modern finish. Trust us to deliver high-performance, sustainable building solutions that meet today’s standards and tomorrow’s expectations.",
    },
    {
      id: 5,
      title: "Concrete finish",
      description:
        "A smooth or textured surface applied to concrete, giving it a sleek, durable look. Ideal for floors, walls, and outdoor spaces.",
      image: service5,
      details:
        "Elevate the appearance and performance of your surfaces with our expertly crafted concrete finishes. Whether you desire a smooth, polished look or a more textured, tactile surface, our concrete finishing services deliver both style and strength. Perfect for interior floors, feature walls, patios, driveways, and other outdoor areas, concrete finishes offer a modern aesthetic while standing up to heavy use and harsh elements. Our skilled team ensures precision in every detail, creating a sleek and resilient surface that enhances the overall appeal of any space. Durable, low-maintenance, and visually striking—our concrete finishes are the ideal solution for both residential and commercial projects.",
    },
    {
      id: 6,
      title: "Sand and Cement finish",
      description:
        "A textured surface created by mixing sand and cement, providing a rough, durable finish. Ideal for outdoor walls and surfaces.",
      image: service6,
      details:
        "Achieve a classic, robust look with our sand and cement finish—an enduring choice for exterior walls and surfaces. This textured render is created by blending high-quality sand and cement, resulting in a tough, weather-resistant coating that offers long-lasting protection against the elements. Ideal for outdoor applications, the sand and cement finish adds a natural, rustic aesthetic while reinforcing the structure beneath. Whether applied to residential facades, boundary walls, or commercial exteriors, our expert application ensures a consistent and durable surface that stands the test of time. Trust our team to deliver a finish that combines strength, character, and timeless appeal.",
    },
    {
      id: 7,
      title: "Interior house painting",
      description:
        "The process of applying paint to walls, ceilings, and other indoor surfaces to enhance the aesthetic appeal and protect the surfaces. It provides a fresh, vibrant look while also improving durability and cleanliness.",
      image: service7,
      details:
        "Transform your living spaces with our professional interior house painting services, designed to breathe new life into your home while offering lasting protection. From walls and ceilings to trims and doors, we meticulously apply high-quality paints that elevate the aesthetic of each room. Whether you're aiming for a bold, modern update or a soft, classic feel, our skilled painters deliver smooth, flawless finishes that reflect your personal style. Beyond enhancing visual appeal, interior painting adds a protective layer that shields surfaces from wear, moisture, and stains—promoting cleanliness and durability. Ideal for new builds, renovations, or simple refreshes, our interior painting service brings comfort, elegance, and renewed energy to every corner of your home.",
    },
    {
      id: 8,
      title: "Exterior house painting",
      description:
        "The process of applying paint to the outer surfaces of a building, such as walls, doors, and trim. It enhances curb appeal, protects against weather damage, and increases the longevity of your property’s exterior.",
      image: service8,
      details:
        "Revitalize your property’s exterior with our expert exterior house painting services, designed to enhance curb appeal while providing essential protection against the elements. We meticulously coat all outer surfaces—including walls, doors, trim, and eaves—with high-performance, weather-resistant paints that withstand harsh sun, rain, and temperature fluctuations. Whether you're refreshing an existing finish or updating your home’s look, our professional team ensures a flawless, long-lasting result that boosts both beauty and value. Exterior painting not only transforms the appearance of your home but also seals and protects surfaces from moisture, cracking, and fading. Ideal for residential properties of all styles, our service combines aesthetic excellence with structural preservation, giving your home a fresh and enduring finish.",
    },
  ];
  return (
    <section id="services-section">
      <div className="services-container container">
        <div className="service-top">
          <h3 className="sc-title">rendering and Painting services</h3>
          <h1 className="sc-subtitle">
            Transform your spaces with our expert finishes.
          </h1>
        </div>
        <div className="service-bottom">
          {services &&
            services.map((service) => (
              <Link
                to="/service-details"
                state={{ service }}
                className="service-box"
                key={service.id}
              >
                <div className="service-wrapper">
                  <div className="service-img">
                    <LazyBackground src={service.image} />
                  </div>
                  <div className="service-content">
                    <h1>
                      {service.title}{" "}
                      <svg
                        fill="none"
                        viewBox="0 0 10 17"
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow-icon"
                      >
                        <path
                          d="M1.25111 16.0843c-.320261 0-.640343-.1222-.88465-.3663-.488613-.4886-.488613-1.2807 0-1.7693l5.90679-5.90664L.36646 2.13545c-.488613-.48844-.488613-1.28069 0-1.769124.488434-.488435 1.28069-.488435 1.76912 0L8.92684 7.15759c.48844.48843.48844 1.28068 0 1.7693L2.13558 15.7181c-.24412.244-.56421.3662-.88447.3662Z"
                          fill="#000"
                        />
                      </svg>
                    </h1>
                    <p>{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
