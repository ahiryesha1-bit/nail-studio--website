import React from "react";

function Location() {
  return (
    <section
      style={{
        padding: "70px 20px",
        background: "#fff5f8",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#d63384",
          fontSize: "38px",
          marginBottom: "20px",
        }}
      >
        Visit Our Studio 📍
      </h2>

      <p style={{ marginBottom: "25px" }}>
        Chikhli, Gujarat, India
      </p>

      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Chikhli,Gujarat&output=embed"
        width="100%"
        height="350"
        style={{
          border: 0,
          borderRadius: "20px",
        }}
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default Location;
