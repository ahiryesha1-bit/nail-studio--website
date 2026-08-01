import React from 'react';
import './Services.css';
<section id="services"></section>
const services = [
  {
    title: 'Nail Extensions 💅',
    text: 'Premium extensions with beautiful finishing. Lasts 3-4 weeks.'
  },
  {
    title: 'Gel Polish ✨',
    text: 'Long lasting shiny gel polish. Chip-proof and glossy.'
  },
  {
    title: 'Nail Art 🎨',
    text: 'Custom designs, glitter, stones, french. Your nails, your art.'
  },
  {
    title: 'Manicure + Pedicure 🌸',
    text: 'Spa treatment with massage. Hands and feet care package.'
  }
];

function Services() {
  return (
    <section className="services-section">
      <h2 className="section-title">Our Premium Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a href="#booking" className="service-btn">
              Book Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;