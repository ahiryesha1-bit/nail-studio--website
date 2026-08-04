import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">

        <div className="contact-info">
          <h2>Contact Us 💅</h2>
          <p>We'd love to hear from you. Book your appointment today!</p>

          <div className="info-box">
            <h3>📍 Address</h3>
            <p>Chikhli, Gujarat, India</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+91 7041912111</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>nailsbyyeshu@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>🕒 Working Hours</h3>
            <p>Monday - Saturday</p>
            <p>10:00 AM - 7:00 PM</p>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Chikhli,Gujarat&output=embed"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "20px" }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;