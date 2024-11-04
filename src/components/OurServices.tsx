import React, { useState } from "react";
import haircutIcon from "../assets/images/hairdresser-chair-svgrepo-com.svg";
import beardtrim from "../assets/images/beard-svgrepo-com.svg";
import shave from "../assets/images/cream-svgrepo-com.svg";
const OurServices: React.FC = () => {
  const [loadmore, setLoadMore] = useState<boolean>(false);
  const handleLoadMore = () => {
    setLoadMore((prev) => !prev);
  };
  return (
    <section
      className="Our-services"
      style={{ padding: "20px", textAlign: "center" }}
    >
      <div className="header-container">
        <div className="line"></div>
        <h1 className="services">Our Services</h1>
        <div className="line"></div>
      </div>
      <div
      className="boxes-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div
          className="service"
          style={{
            border: "1px solid #ccc",
            padding: "25px",
            borderRadius: "8px",
            maxWidth: "300px",
            height: "300px",
            margin: "10px",
            backgroundColor: "wheat",
            color: "black",
          }}
        >
          <img src={haircutIcon} alt="hair-cut" />
          <h2>Haircut</h2>
          <p>
            Experience a fresh and stylish haircut tailored to your preference
            by our expert barbers.
          </p>
          <div className="check-out">
            <button style={{ display: "flex", gap: "10px" }}>
              <span>View our Service</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="44px"
                fill="#000"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="service"
          style={{
            border: "1px solid #ccc",
            padding: "25px",
            borderRadius: "8px",
            maxWidth: "300px",
            height: "300px",
            margin: "10px",
            backgroundColor: "wheat",
            color: "black",
          }}
        >
          <img src={beardtrim} alt="hair-cut" />
          <h2>Beard Trim</h2>
          <p>
            Keep your beard looking sharp and well-groomed with our precise
            trimming services.
          </p>
          <div className="check-out">
            <button style={{ display: "flex", gap: "10px" }}>
              <span>View our Service</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="44px"
                fill="#000"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className="service"
          style={{
            border: "1px solid #ccc",
            padding: "25px",
            borderRadius: "8px",
            maxWidth: "300px",
            height: "300px",
            margin: "10px",
            backgroundColor: "wheat",
            color: "black",
          }}
        >
          <img src={shave} alt="hair-cut" />
          <h2>Shave & Facial</h2>
          <p>
            Enjoy a relaxing shave and rejuvenating facial treatment for a clean
            and refreshed look.
          </p>
          <div className="check-out">
            <button style={{ display: "flex", gap: "10px" }}>
              <span>View our Service</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="44px"
                fill="#000"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {loadmore ? (
        <div
        className="boxes-container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div
            className="service"
            style={{
              border: "1px solid #ccc",
              padding: "25px",
              borderRadius: "8px",
              maxWidth: "300px",
              height: "300px",
              margin: "10px",
              backgroundColor: "wheat",
              color: "black",
            }}
          >
            <img src={haircutIcon} alt="hair-cut" />
            <h2>Haircut</h2>
            <p>
              Experience a fresh and stylish haircut tailored to your preference
              by our expert barbers.
            </p>
            <div className="check-out">
              <button style={{ display: "flex", gap: "10px" }}>
                <span>View our Service</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="44px"
                  fill="#000"
                >
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="service"
            style={{
              border: "1px solid #ccc",
              padding: "25px",
              borderRadius: "8px",
              maxWidth: "300px",
              height: "300px",
              margin: "10px",
              backgroundColor: "wheat",
              color: "black",
            }}
          >
            <img src={beardtrim} alt="hair-cut" />
            <h2>Beard Trim</h2>
            <p>
              Keep your beard looking sharp and well-groomed with our precise
              trimming services.
            </p>
            <div className="check-out">
              <button style={{ display: "flex", gap: "10px" }}>
                <span>View our Service</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="44px"
                  fill="#000"
                >
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="service"
            style={{
              border: "1px solid #ccc",
              padding: "25px",
              borderRadius: "8px",
              maxWidth: "300px",
              height: "300px",
              margin: "10px",
              backgroundColor: "wheat",
              color: "black",
            }}
          >
            <img src={shave} alt="hair-cut" />
            <h2>Shave & Facial</h2>
            <p>
              Enjoy a relaxing shave and rejuvenating facial treatment for a
              clean and refreshed look.
            </p>
            <div className="check-out">
              <button style={{ display: "flex", gap: "10px" }}>
                <span>View our Service</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="44px"
                  fill="#000"
                >
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={handleLoadMore}
          style={{ border: "1px solid wheat", padding: "8px", margin: "8px" }}
        >
          Load more
        </button>
      )}
    </section>
  );
};

export default OurServices;
