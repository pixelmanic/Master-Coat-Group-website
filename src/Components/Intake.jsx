import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Intake.css";
import { Helmet } from "react-helmet";
import { intakePageAnim } from "../Animations/pageAnim";

function Intake() {
  useEffect(() => {
    intakePageAnim();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [selected_services, setSelectedServices] = useState([]);
  const [selected_render, setSelectedRender] = useState([]);
  const [selected_paint, setSelectedPaint] = useState([]);
  const [projectSize, setProjectSize] = useState("Not sure");
  const [projectTimeline, setProjectTimeline] = useState("Not sure");
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
      budget: budget ? `$${budget}` : "Not specified",
      message: message || "No message provided",
      title: "Full Intake Form",

      selected_services: selected_services.length
        ? selected_services.join(", ")
        : "None selected",
      selected_render: selected_render.length
        ? selected_render.join(", ")
        : "None selected",
      selected_paint: selected_paint.length
        ? selected_paint.join(", ")
        : "None selected",

      project_size: projectSize,
      project_timeline: projectTimeline,
      time,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setBudget("");
        setMessage("");
        setPhone("");
        setSelectedServices([]);
        setSelectedRender([]);
        setSelectedPaint([]);
        setProjectSize("Not sure");
        setProjectTimeline("Not sure");
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
          <title>Request a Quote | MasterCoat Group</title>
          <meta
            name="description"
            content="Fill out the intake form to request a quote or consultation from MasterCoat Group. Fast and professional painting & coating services."
          />
          <meta
            property="og:title"
            content="Request a Quote | MasterCoat Group"
          />
          <meta
            property="og:description"
            content="Use our online form to schedule a consultation or get a price estimate. Serving residential, commercial, and industrial clients."
          />
          <meta
            property="og:url"
            content="https://mastercoatgroup.com/intake-form"
          />
          <meta property="og:type" content="website" />
        </Helmet>

        <h3 className="intake-title sc-title">Complete Intake</h3>
        <h1 className="sc-subtitle">Help us serve you better</h1>
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
            What type of service are you interested in?
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
            What type of render are you interested in?
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
            What type of paint are you interested in?
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

          {/* Choose Size of Project */}
          <label className="form-label">
            What is the size of your project?
          </label>
          <select
            id="project-size"
            name="project-size"
            className="form-select"
            value={projectSize}
            disabled={isSubmitted ? true : false}
            onChange={(e) => setProjectSize(e.target.value)}
          >
            <option value="Not sure">Not sure</option>
            <option value="Small (Less than 1000 sq ft)">
              Small (Less than 1000 sq ft)
            </option>
            <option value="medium (1000 - 3000 sq ft)">
              medium (1000 - 3000 sq ft)
            </option>
            <option value="Large (More than 3000 sq ft)">
              Large (More than 3000 sq ft)
            </option>
          </select>

          {/* Choose timeline of project */}
          <label className="form-label">
            What is your preferred timeline for the project?
          </label>
          <select
            id="project-timeline"
            name="project-timeline"
            className="form-select"
            value={projectTimeline}
            disabled={isSubmitted ? true : false}
            onChange={(e) => setProjectTimeline(e.target.value)}
          >
            <option value="Not sure">Not sure</option>
            <option value="Immediately">Immediately</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1 to 3 months">1 to 3 months</option>
            <option value="More than 3 months">More than 3 months</option>
          </select>

          {/* Choose budget */}
          <label className="form-label">
            Do you have a specific budget in mind?
          </label>
          <input
            type="number"
            name="budget"
            disabled={isSubmitted ? true : false}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
          <label>Additional questions or comments</label>
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
            <input
              type="checkbox"
              name="consent"
              required
              disabled={isSubmitted ? true : false}
            />{" "}
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

export default Intake;
