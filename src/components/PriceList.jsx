import React from "react";

function PriceList() {
  const prices = [
    { service: "Gel Polish", price: "₹299" },
    { service: "Temporary Nail Extension", price: "₹499" },
    { service: "Acrylic Nail Extension", price: "₹999" },
    { service: "Nail Art", price: "₹399" },
    { service: "Manicure", price: "₹599" },
    { service: "Pedicure", price: "₹699" }
  ];

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
        Our Price List 💅
      </h2>

      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          background: "#fff",
          borderRadius: "20px",
          padding: "25px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        {prices.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <span>{item.service}</span>
            <strong>{item.price}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PriceList;
