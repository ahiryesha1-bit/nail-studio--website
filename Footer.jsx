import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>Nailsbyyeshu 💅</h2>
          <p>
            Premium Nail Studio offering luxury nail extensions,
            gel polish, nail art and manicure services with
            quality and hygiene.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Gallery</a>
          <a href="#">Book Appointment</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📍 Chikhli, Gujarat</p>
          <p>📞 +91 7041912111</p>
          <p>📧 nailsbyyeshu@gmail.com</p>
          <p>🕒 Mon - Sat | 10:00 AM - 7:00 PM</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Nailsbyyeshu. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;