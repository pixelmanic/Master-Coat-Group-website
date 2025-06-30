import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Styles/Testimonials.css";
import { testimonialAnim } from "../Animations";

function Testimonials() {
  useEffect(() => {
    testimonialAnim();
  }, []);

  return (
    <section id="testimonials-section">
      <div className="testimonials-container container">
        <div className="test-top sc-title" style={{ color: "white" }}>
          Testimonials
        </div>
        <div className="test-middle">
          <div className="test-middle-cont sc-subtitle">
            What some recent clients say about their experience with mastercoat
            group
          </div>
        </div>
        <div className="test-bottom">
          <Swiper
            key={Date.now()}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000, // autoplay every 3 seconds
              disableOnInteraction: true,
            }}
            loop={true}
            slidesPerView={1}
            slidesPerGroup={1}
            allowTouchMove={true}
            grabCursor={true}
            spaceBetween={30}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  Working with Mastercoat Group was a fantastic experience from
                  start to finish. Their attention to detail and commitment to
                  quality truly set them apart from other service providers.
                  They transformed our commercial space with their expert
                  rendering and painting services, making it a vibrant and
                  inviting place for our customers. After 20 years in business,
                  it’s clear that they know what they’re doing! I highly
                  recommend them for any renovation or new project.
                </p>
                <p className="testimonial-author">Chris</p>
                <h6 className="testimonial-passion">Metricon</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  I recently hired Mastercoat Group to render my home and was
                  blown away by their professionalism and skill. They guided me
                  through the entire process, ensuring I was happy with every
                  decision. The team worked diligently and completed the job
                  within the timeframe they promised. The final result is
                  stunning, and I've received numerous compliments from friends
                  and family. I couldn’t be more pleased and will definitely use
                  them again in the future!
                </p>
                <p className="testimonial-author">Brandon Vega</p>
                <h6 className="testimonial-passion">Private Residence</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  Mastercoat Group handled the painting and rendering for a
                  large government project we undertook, and their expertise was
                  evident throughout the process. The team was incredibly
                  responsive and worked seamlessly with our project timeline,
                  ensuring all requirements were met. We appreciated their
                  willingness to adapt to changes and their commitment to
                  quality. The finished project looks amazing, and we look
                  forward to collaborating with them again on future projects.
                </p>
                <p className="testimonial-author">Karen Weiss</p>
                <h6 className="testimonial-passion">city council</h6>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="arrow-btns">
            <button className="custom-prev" aria-label="Previous"></button>
            <button className="custom-next" aria-label="Next"></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
