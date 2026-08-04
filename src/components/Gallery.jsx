import React from "react";
import "./Gallery.css";

import nail1 from "../assets/nail1.png";
import nail2 from "../assets/nail2.png";
import nail3 from "../assets/nail3.png";
import nail4 from "../assets/nail4.png";
import nail5 from "../assets/nail5.png";
import nail6 from "../assets/nail6.png";
import nail7 from "../assets/nail7.png";

function Gallery() {

  const images = [
    nail1,
    nail2,
    nail3,
    nail4,
    nail5,
    nail6,
    nail7
  ];

  return (
    <section className="gallery">

      <div className="gallery-title">
        <h2>Luxury Nail Gallery 💅</h2>
        <p>Premium Nail Art • Extensions • Gel Polish</p>
      </div>

      <div className="gallery-grid">

        {images.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img 
              src={image} 
              alt={`Nail Design ${index + 1}`}
            />
          </div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;
