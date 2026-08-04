import React from "react";

function FAQ() {
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
          marginBottom: "30px",
        }}
      >
        Frequently Asked Questions 💅
      </h2>

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          textAlign: "left",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h3>💖 How long do nail extensions last?</h3>
          <p>Usually 3–4 weeks with proper care.</p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>💅 Do I need an appointment?</h3>
          <p>Yes, appointments are recommended for better service.</p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>✨ Which products do you use?</h3>
          <p>We use premium quality and hygienic nail products.</p>
        </div>

        <div>
          <h3>🎨 Can I choose my own nail design?</h3>
          <p>Yes! You can select any design or share your reference image.</p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
