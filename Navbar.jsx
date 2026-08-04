import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        background: "#fff",
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h2 style={{ color: "#d63384" }}>
        Nailsbyyeshu 💅
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          fontSize: "17px",
        }}
      >
        <span>Home</span>
        <span>Services</span>
        <span>About</span>
        <span>Gallery</span>
        <span>Contact</span>
      </div>

      <button
        style={{
          background: "#d63384",
          color: "white",
          border: "none",
          padding: "12px 25px",
          borderRadius: "30px",
          cursor: "pointer",
        }}
      >
        Book Now
      </button>
    </nav>
  );
}

export default Navbar;