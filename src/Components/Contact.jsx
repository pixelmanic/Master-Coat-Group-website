import React, { useEffect, useState } from "react";
import "../Styles/Contact.css";
import emailjs from "@emailjs/browser";
import { contactAnim } from "../Animations";

function Contact() {
  useEffect(() => {
    contactAnim();
  }, []);

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
      title: "Request for Assistance",
      date: "Not required for contact",
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
    <section id="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-left">
            <div className="contact-title">
              <h3 className="sc-title">get in touch</h3>
              <h1 className="sc-subtitle">We're here to assist you!</h1>
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
                  I allow this website to store my submission so they can
                  respond to my inquiry. <strong className="star">*</strong>
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
          <div className="contact-right">
            <div className="google-maps">
              <iframe
                title="Melbourne City Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12616.062341650823!2d144.9631!3d-37.8136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778b3fce1691c0!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1713329820000!5m2!1sen!2sau"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="contact-details">
              <div className="contact-details-box">
                <h3>Get in touch</h3>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width="24"
                    height="24"
                    style={{ marginRight: "10px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h0a2.25 2.25 0 002.25-2.25v-2.166a1.5 1.5 0 00-1.272-1.48l-3.375-.563a1.5 1.5 0 00-1.591.868l-.675 1.458a11.25 11.25 0 01-5.25-5.25l1.458-.675a1.5 1.5 0 00.868-1.591l-.563-3.375A1.5 1.5 0 007.416 4.5H5.25A2.25 2.25 0 003 6.75v0z"
                    />
                  </svg>{" "}
                  <a
                    href="tel:0460934212"
                    style={{ color: "black", opacity: ".7" }}
                  >
                    046-093-4212
                  </a>
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width="24"
                    height="24"
                    style={{ marginRight: "10px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.918l-7.5 4.5a2.25 2.25 0 01-2.36 0l-7.5-4.5a2.25 2.25 0 01-1.07-1.918V6.75"
                    />
                  </svg>
                  <a
                    href="mailto:info@mastercoatgroup.com.au"
                    style={{ color: "black", opacity: ".7" }}
                  >
                    info@mastercoatgroup.com.au
                  </a>
                </p>
              </div>
              <div className="contact-details-box">
                <h3>Location</h3>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width="24"
                    height="24"
                    style={{ marginRight: "10px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <a
                    href="https://www.google.com/maps/place/melbourne+melbourne+VIC+AU"
                    style={{ color: "black", opacity: ".7" }}
                  >
                    melbourne, VIC AU
                  </a>
                </p>
              </div>
              <div className="contact-details-box">
                <h3>Hours</h3>
                <ul className="time-table">
                  <li>
                    <span>Monday</span> 7:00am <span>-</span> 6:00pm
                  </li>
                  <li>
                    <span>Tuesday</span> 7:00am <span>-</span> 6:00pm
                  </li>
                  <li>
                    <span style={{ paddingRight: "30px" }}>Wednesday</span>{" "}
                    7:00am <span>-</span> 6:00pm
                  </li>
                  <li>
                    <span>Thursday</span> 7:00am <span>-</span> 6:00pm
                  </li>
                  <li>
                    <span>Friday</span> 7:00am <span>-</span> 6:00pm
                  </li>
                  <li>
                    <span>Saturday</span> 7:00am <span>-</span> 3:00pm
                  </li>
                  <li>
                    <span>Sunday</span> 9:00am <span>-</span> 3:00pm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
