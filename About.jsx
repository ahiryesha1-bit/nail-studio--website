import React from "react";

function About() {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "40px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px" }}>
          <img
            src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=700"
            alt="Nail Studio"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2
            style={{
              color: "#d63384",
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            About Nailsbyyeshu 💖
          </h2>

          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
              fontSize: "18px",
            }}
          >
            Welcome to <strong>Nailsbyyeshu</strong>, where beauty meets
            creativity. We specialize in premium nail extensions, gel polish,
            nail art, manicures, and custom nail designs using high-quality,
            hygienic products.
          </p>

          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
              fontSize: "18px",
              marginTop: "15px",
            }}
          >
            Our mission is to make every client feel confident with beautiful,
            stylish, and long-lasting nails in a relaxing environment.
          </p>

          <button
            style={{
              marginTop: "25px",
              background: "#d63384",
              color: "#fff",
              border: "none",
              padding: "14px 30px",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;