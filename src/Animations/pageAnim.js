import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const scheduleAnim = () => {
  if (sessionStorage.getItem("scheduleAnimated")) return;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".intake",
      },
    })
    .from(".intake-container h3", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    })
    .from(".intake-container h1", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    })
    .from(".contact-form", {
      autoAlpha: 0,
      y: 30,
      duration: 0.5,
    });
  sessionStorage.setItem("scheduleAnimated", "true");
};

const intakePageAnim = () => {
  if (sessionStorage.getItem("intakeAnimated")) return;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".intake",
      },
    })
    .from(".intake-container h3", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    })
    .from(".intake-container h1", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    })
    .from(".contact-form", {
      autoAlpha: 0,
      y: 30,
      duration: 0.5,
    });
  sessionStorage.setItem("intakeAnimated", "true");
};

const careersPageAnim = () => {
  if (sessionStorage.getItem("careersAnimated")) return;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".intake",
      },
    })
    .from(".intake-container h3", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    })
    .from(".intake-container h1", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    })
    .from(".careers-para", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    })
    .from(".contact-form", {
      autoAlpha: 0,
      y: 30,
      duration: 0.5,
    });
  sessionStorage.setItem("careersAnimated", "true");
};

const sdPageAnim = () => {
  if (sessionStorage.getItem("sdPageAnimated")) return;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".service-details",
      },
    })
    .from(".sd-image", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    })
    .from(".sd-content", {
      autoAlpha: 0,
      y: 30,
      duration: 0.5,
    })
    .from(".prefooter-section", {
      backgroundColor: "white",
      duration: 0.5,
    })
    .from(".prefooter-content", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    })
    .from(".prefooter-btn", {
      opacity: 0,
      y: 30,
      duration: 0.5,
    });
  sessionStorage.setItem("sdPageAnimated", "true");
};

export { scheduleAnim, intakePageAnim, careersPageAnim, sdPageAnim };
