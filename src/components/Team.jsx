import React from "react";

function Team() {
  const team = [
    {
      name: "Yesha Ahir",
      role: "Founder & Nail Artist",
      image: "https://via.placeholder.com/180"
    },
    {
      name: "Creative Expert",
      role: "Nail Art Specialist",
      image: "https://via.placeholder.com/180"
    },
    {
      name: "Beauty Expert",
      role: "Gel Polish Specialist",
      image: "https://via.placeholder.com/180"
    }
  ];

  return (
    <section
      style={{
        padding: "70px 20px",
        textAlign: "center",
        background: "#ffffff"
      }}
    >
      <h2
        style={{
          color: "#d63384",
          fontSize: "38px",
          marginBottom: "40px"
        }}
      >
        Meet Our Team 💖
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap"
        }}
      >
        {team.map((member, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              padding: "20px",
              borderRadius: "20px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
