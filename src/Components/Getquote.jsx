import React, { useEffect, useState } from "react";
import "../Styles/Getquote.css";
import emailjs from "@emailjs/browser";
import { quoteAnim } from "../Animations";

function Getquote() {
  useEffect(() => {
    quoteAnim();
  }, [])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const now = new Date();
  const time = now.toLocaleString(); // Example: "4/19/2025, 1:15:30 PM"

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICEID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATEID_CONTACT;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLICKEY;

    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      title: "Request for a Free Quote",
      date: "Not required for quote",
      time,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send your message. Please try again later.");
      });
  };
  return (
    <section id="getquote-section">
      <div className="quote-container container">
        <div className="contact-title quote-title">
          <h3 className="sc-title">get a free quote</h3>
        </div>
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="contact-form"
        >
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
            Email <span className="star">*</span>
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
          <label>Message</label>
          <textarea
            name="message"
            required
            disabled={isSubmitted ? true : false}
            placeholder="Your message here..."
            style={{
                resize: 'vertical',
                maxHeight: '200px',
                minHeight: '100px',
                width: '100%',
                overflowY: 'auto',
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
    </section>
  );
}

export default Getquote;
