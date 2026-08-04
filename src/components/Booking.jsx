import { useState } from "react";
import axios from "axios";

export default function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", time: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/bookings", form);
      setMsg(res.data.message);
      setForm({ name: "", phone: "", service: "", date: "", time: "" });
    } catch (err) {
      setMsg("Kuch gadbad ho gayi. Fir se try karo");
    }
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #fde6f0 0%, #fce4ec 100%)",
      padding: "60px 20px",
      minHeight: "100vh",
      fontFamily: "Georgia, serif"
    }}>
      <div style={{
        maxWidth: "500px",
        margin: "0 auto",
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 40px rgba(233, 30, 99, 0.15)",
        border: "1px solid #f8bbd0"
      }}>
        <h2 style={{ textAlign: "center", color: "#ad1457", fontSize: "32px", marginBottom: "10px" }}>
          Book Your Luxury Appointment
        </h2>
        <p style={{ textAlign: "center", color: "#888", marginBottom: "30px" }}>
          Get the royal treatment you deserve ✨
        </p>

        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required
            style={inputStyle} />
          
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" required
            style={inputStyle} />

          <select name="service" value={form.service} onChange={handleChange} required style={inputStyle}>
            <option value="">Select Service</option>
            <option value="Gel Nails">Gel Nails - ₹1200</option>
            <option value="Acrylic">Acrylic Nails - ₹1500</option>
            <option value="Nail Art">Nail Art - ₹800</option>
          </select>

          <input name="date" type="date" value={form.date} onChange={handleChange} required style={inputStyle} />
          <input name="time" type="time" value={form.time} onChange={handleChange} required style={inputStyle} />

          <button type="submit" style={{
            width: "100%",
            padding: "15px",
            background: "linear-gradient(135deg, #e91e63, #ad1457)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "10px"
          }}>
            Book Now
          </button>
          <section id="booking"></section>
        </form>

        {msg && <div style={{
          marginTop: "20px",
          padding: "15px",
          background: "#e8f5e9",
          color: "#2e7d32",
          borderRadius: "10px",
          textAlign: "center",
          fontWeight: "bold"
        }}>{msg}</div>}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  margin: "10px 0",
  border: "1px solid #f8bbd0",
  borderRadius: "10px",
  fontSize: "16px",
  boxSizing: "border-box"
}
