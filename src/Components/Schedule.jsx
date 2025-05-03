import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Intake.css";
import { Helmet } from "react-helmet";
import { scheduleAnim } from "../Animations/pageAnim";

function Schedule() {
  useEffect(() => {
    scheduleAnim();
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const now = new Date();
  const time = now.toLocaleString(); // Example: "4/19/2025, 1:15:30 PM"

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID_CONTACT;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLICKEY;

    const templateParams = {
      name,
      email,
      message: message || "No message provided",
      title: "Request for a Meeting",
      phone: phone,
      date: date,
      time,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log(
          "Email sent successfully!",
          response.status,
          response.text,
          templateParams
        );
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setDate("");
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
          <title>Schedule an Appointment</title>
        </Helmet>
        <h3 className="intake-title sc-title">Meeting request form</h3>
        <h1 className="sc-subtitle">We look forward to meeting with you</h1>
        <form method="POST" onSubmit={handleSubmit} className="contact-form">
          <label>
            Name <span className="star">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Marston"
            disabled={isSubmitted ? true : false}
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
            placeholder="email@example.com"
            disabled={isSubmitted ? true : false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* choose a Date */}
          <label>
            Choose a Date for meeting <span className="star">*</span>
          </label>
          <input
            type="date"
            name="date"
            required
            disabled={isSubmitted ? true : false}
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Your message here..."
            disabled={isSubmitted ? true : false}
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

export default Schedule;
