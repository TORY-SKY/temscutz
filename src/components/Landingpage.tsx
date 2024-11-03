import heroImg from "../assets/images/pngwing.com.png";
import Tems from "../assets/Temshaircut/hair1.jpg";
const Landingpage = () => {
  return (
    <div className="landingpage-container">
      <div className="contents">
        <img
          src={heroImg}
          alt="hero-image"
          style={{ width: "200px", height: "auto" }}
        />
        <div className="contents-words">
          <h1 className="hero-text">
            Redefine Your Look, Elevate Your Confidence
          </h1>
          <p>
            Experience precision cuts and timeless grooming. Step into
            confidence with every visit.
          </p>
        </div>
      </div>
      {/* section two */}
      <section className="content-two">
        <div className="content-two-container">
          <div className="content-two-left-side">
            <h1 className="hero-text-two">
              Tailored Grooming for the Mordern Gentlemen
            </h1>
            <p>
              Where classic techniques meet modern style. Discover a grooming
              experience designed for your unique look and comfort.
            </p>
            <button
              className="about-us-btn"
              style={{
                border: "1px solid wheat",
                padding: "8px",
                width: "120px",
              }}
            >
              About Us
            </button>
          </div>
          <div className="content-two-right-side">
            <img src={Tems} alt="tems at work" style={{ width: "20rem" }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landingpage;
