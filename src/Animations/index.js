import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const navbarAnim = () => {
  if (sessionStorage.getItem("navbarAnimated")) return;
  gsap.from(".navbar", {
    opacity: 0,
    y: "-100%",
    duration: 0.5,
    scrollTrigger: { trigger: ".navbar" },
  });
  sessionStorage.setItem("navbarAnimated", "true");
};

const heroAnim = () => {
  if (sessionStorage.getItem("heroAnimated")) return;
  const heroTl = gsap.timeline({ scrollTrigger: { trigger: ".hero-section" } });
  heroTl
    .from(".hero-content h1", {
      opacity: 0,
      y: 30,
      duration: 0.4,
    })
    .from(".hero-content h5", {
      opacity: 0,
      y: 30,
      duration: 0.4,
    })
    .from(".hero-btn", {
      opacity: 0,
      y: 30,
      duration: 0.4,
    });
  sessionStorage.setItem("heroAnimated", "true");
};

const aboutAnim = () => {
  if (sessionStorage.getItem("aboutAnimated")) return;
  const aboutTl = gsap.timeline({
    delay: 1,
    scrollTrigger: { trigger: "#about-section" },
  });

  aboutTl.from(
    ".about-content",
    { opacity: 0, y: 30, duration: 0.5 }
  );
  aboutTl.from(
    ".about-image",
    { opacity: 0, y: 30, duration: 0.5 }
  );
  sessionStorage.setItem("aboutAnimated", "true");
};

const servicesAnim = () => {
  if (sessionStorage.getItem("servicesAnimated")) return;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".service-top",
      },
    })
    .from(".service-top h3", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    })
    .from(".service-top h1", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    });

  // Animate service boxes one by one when each enters the viewport
  gsap.utils.toArray(".service-box").forEach((box, index) => {
    gsap.from(box, {
      scrollTrigger: {
        trigger: box,
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      delay: index * 0.1, // small staggered delay
    });
  });
  sessionStorage.setItem("servicesAnimated", "true");
};

const testimonialAnim = () => {
  if (sessionStorage.getItem("testimonialAnimated")) return;
  gsap
    .timeline({
      scrollTrigger: { trigger: "#testimonials-section", start: "top 90%" },
    })
    .from("#testimonials-section", {
      opacity: 0,
      backgroundColor: "white",
      duration: 0.5,
    })
    .from(".testimonials-container", {
      opacity: 0,
      transform: "translateY(30px)",
      duration: 0.5,
    });
  sessionStorage.setItem("testimonialAnimated", "true");
};

const galleryAnim = () => {
  if (sessionStorage.getItem("galleryAnimated")) return;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".gallery-top",
      start: "top 90%",
    },
  });

  tl.fromTo(
    ".gallery-top h3",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.5 }
  ).fromTo(
    ".gallery-top h1",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.5 },
    "+=0.1"
  );

  // Animate images after subtitle is visible
  gsap.fromTo(
    ".gallery-image",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".gallery-bottom",
        start: "top 90%", // Only starts when .gallery-bottom hits viewport
      },
    }
  );
  sessionStorage.setItem("galleryAnimated", "true");
};

const faqAnim = () => {
  if (sessionStorage.getItem("faqAnimated")) return;
  const faqTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#FAQ-section",
    },
  });
  faqTl
    .from(".faq-title", {
      opacity: 0,
      y: 30,
      duration: 0.4,
    })
    .from(
      ".faq-subtitle",
      {
        opacity: 0,
        y: 30,
        duration: 0.4,
      },
      "-=0.3"
    );

  gsap.from(".faq-queries", {
    opacity: 0,
    y: 30,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".faq-queries",
      start: "top 90%",
    },
  });

  gsap.from(".faq-info-box", {
    opacity: 0,
    y: 30,
    duration: 0.4,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".faq-info-box",
      start: "top 90%",
    },
  });
  sessionStorage.setItem("faqAnimated", "true");
};

const contactAnim = () => {
  if (sessionStorage.getItem("contactAnimated")) return;
  gsap.timeline({
    scrollTrigger: {
      trigger: "#contact-section",
      start: "top 90%",
      toggleActions: "play none none none"
    },
  })
    .from(".contact-title h3", { opacity: 0, y: 30, duration: 0.4 })
    .from(".contact-title h1", { opacity: 0, y: 30, duration: 0.4 })
    .from(".contact-form", { autoAlpha: 0, y: 30, duration: 0.4 })
    .from(".google-maps", { opacity: 0, y: 30, duration: 0.4 })
    .from(".contact-details-box", {
      opacity: 0,
      y: 30,
      duration: 0.4,
      stagger: 0.3,
    });
  sessionStorage.setItem("contactAnimated", "true");
};

const quoteAnim = () => {
  if (sessionStorage.getItem("quoteAnimated")) return;
  gsap
    .timeline({
      scrollTrigger: {
        start: "top 90%",
        trigger: "#getquote-section",
      },
    })
    .from(".quote-title h3", {
      opacity: 0,
      y: 30,
      duration: 0.4,
    })
    .from(".contact-form", {
      opacity: 0,
      y: 30,
      duration: 0.4,
    });
  sessionStorage.setItem("quoteAnimated", "true");
};

export {
  navbarAnim,
  heroAnim,
  aboutAnim,
  servicesAnim,
  testimonialAnim,
  galleryAnim,
  faqAnim,
  contactAnim,
  quoteAnim,
};
