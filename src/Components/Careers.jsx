import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Intake.css";
import { Helmet } from "react-helmet";
import { careersPageAnim } from "../Animations/pageAnim";

function Careers() {
  useEffect(() => {
    careersPageAnim();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selected_services, setSelectedServices] = useState([]);
  const [selected_render, setSelectedRender] = useState([]);
  const [selected_paint, setSelectedPaint] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const now = new Date();
  const time = now.toLocaleString(); // Example: "4/19/2025, 1:15:30 PM"

  const handleCheckboxChangeGeneric = (value, setFunction, currentState) => {
    if (currentState.includes(value)) {
      setFunction(currentState.filter((item) => item !== value));
    } else {
      setFunction([...currentState, value]);
    }
  };

  const serviceOptionsList = [
    "External Rendering",
    "Painting",
    "Renovation",
    "Commercial Work",
    "Residential Work",
    "Luxury Homes",
    "Governmental Work",
  ];

  const renderOptionsList = [
    "Render Brick",
    "Foam Installation and Supply",
    "Hebel Installation and Supply",
    "Polished Render",
    "Sand Finish Render",
    "Bag Render",
    "Other External Render",
  ];

  const paintOptionsList = [
    "Oil Paint",
    "Enamel Paint",
    "Emulsion Paint",
    "Plastic Paint",
    "Anti-Corrosive Paint",
    "Texture Paint",
    "Paint on Texture",
    "Other Painting Options",
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLICKEY;

    const templateParams = {
      name,
      email,
      phone,
      budget: "Not required for Careers",
      message: message || "No message provided",
      title: "Careers Inquiry",

      selected_services: selected_services.length
        ? selected_services.join(", ")
        : "None selected",
      selected_render: selected_render.length
        ? selected_render.join(", ")
        : "None selected",
      selected_paint: selected_paint.length
        ? selected_paint.join(", ")
        : "None selected",

      project_size: "Not required for Careers",
      project_timeline: "Not required for Careers",
      time,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setSelectedServices([]);
        setSelectedRender([]);
        setSelectedPaint([]);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send your message. Please try again later.");
      });
  };
  return (
    <div className="intake">
      <div className="intake-container container">
        <Helmet>
          <title>Careers page</title>
        </Helmet>
        <h3 className="intake-title sc-title">Join Our Team</h3>
        <h1 className="sc-subtitle">Explore opportunities. Grow with us.</h1>
        <p className="careers-para">
          At Mastercoat Group, we’re always on the lookout for passionate,
          skilled, and motivated individuals to join our growing team. Whether
          you're a seasoned professional or just starting your career in
          rendering, painting, or construction services, we offer a supportive
          environment where your talent can thrive. Join us in delivering
          quality craftsmanship and transforming spaces across Australia.
        </p>
        <form method="POST" onSubmit={handleSubmit} className="contact-form">
          <label>
            Name <span className="star">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            disabled={isSubmitted ? true : false}
            placeholder="John Marston"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>
            Email Address <span className="star">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            disabled={isSubmitted ? true : false}
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>
            Phone Number <span className="star">*</span>
          </label>
          <input
            type="text"
            name="phone"
            required
            disabled={isSubmitted ? true : false}
            placeholder="555-555-5555"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {/* Choose service */}
          <label className="form-label" style={{ marginTop: "0" }}>
            Which area would you like to work in?
          </label>
          {serviceOptionsList.map((option) => (
            <label className="form-checkbox" key={option}>
              <input
                type="checkbox"
                disabled={isSubmitted ? true : false}
                checked={selected_services.includes(option)}
                onChange={() =>
                  handleCheckboxChangeGeneric(
                    option,
                    setSelectedServices,
                    selected_services
                  )
                }
              />
              <span>{option}</span>
            </label>
          ))}

          {/* Choose Render */}
          <label className="form-label">
            What rendering areas do you specialize in?
          </label>
          {renderOptionsList.map((option) => (
            <label className="form-checkbox" key={option}>
              <input
                type="checkbox"
                disabled={isSubmitted ? true : false}
                checked={selected_render.includes(option)}
                onChange={() =>
                  handleCheckboxChangeGeneric(
                    option,
                    setSelectedRender,
                    selected_render
                  )
                }
              />
              <span>{option}</span>
            </label>
          ))}

          {/* Choose Render */}
          <label className="form-label">
            What painting styles do you specialize in?
          </label>
          {paintOptionsList.map((option) => (
            <label className="form-checkbox" key={option}>
              <input
                type="checkbox"
                disabled={isSubmitted ? true : false}
                checked={selected_paint.includes(option)}
                onChange={() =>
                  handleCheckboxChangeGeneric(
                    option,
                    setSelectedPaint,
                    selected_paint
                  )
                }
              />
              <span>{option}</span>
            </label>
          ))}

          <label style={{ marginTop: "20px" }}>
            Additional questions or comments
          </label>
          <textarea
            name="message"
            disabled={isSubmitted ? true : false}
            placeholder="Enter any additional questions or comments..."
            style={{
              resize: "vertical",
              maxHeight: "200px",
              minHeight: "100px",
              width: "100%",
              overflowY: "auto",
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label className="form-checkbox">
            <input type="checkbox" name="consent" required disabled={isSubmitted ? true : false}/>{" "}
            <span>
              I allow this website to store my submission so they can respond to
              my inquiry. <strong className="star">*</strong>
            </span>
          </label>
          <button
            type="submit"
            className={`submit-btn ${isSubmitted ? "submitted" : ""}`}
            disabled={isSubmitted ? true : false}
          >
            {isSubmitted
              ? "Thanks! We'll get back to you shortly..."
              : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Careers;
