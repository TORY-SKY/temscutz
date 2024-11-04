import React from "react";

const Test: React.FC = () => {
  return (
    <section style={{ padding: "20px", textAlign: "center" }}>
      <h1>Our Services</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            maxWidth: "300px",
            margin: "10px",
          }}
        >
          <h2>Haircut</h2>
          <p>
            Experience a fresh and stylish haircut tailored to your preference
            by our expert barbers.
          </p>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            maxWidth: "300px",
            margin: "10px",
          }}
        >
          <h2>Beard Trim</h2>
          <p>
            Keep your beard looking sharp and well-groomed with our precise
            trimming services.
          </p>
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            maxWidth: "300px",
            margin: "10px",
          }}
        >
          <h2>Shave & Facial</h2>
          <p>
            Enjoy a relaxing shave and rejuvenating facial treatment for a clean
            and refreshed look.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Test;
