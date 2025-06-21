import React from "react";

const Scroll2 = ({ title, cards }) => {
  return (
    <section style={{ padding: "1rem 2rem" }}>
      <h2 style={{ color: "white", marginBottom: "1rem" }}>{title}</h2>
      <div style={{ display: "flex", overflowX: "auto", gap: "1rem" }}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              minWidth: "100px",
              height: "100%",
              width: "350px",
              backgroundColor: "#222",
              borderRadius: "8px",
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Scroll2;
