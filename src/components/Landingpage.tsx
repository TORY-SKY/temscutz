import { useState } from "react";
import heroImg from "../assets/images/pngwing.com.png";
import Tems from "../assets/Temshaircut/hair1.jpg";
import Tem from "../assets/Temshaircut/hair2.jpg";
import OurServices from "./OurServices";
import ReservationModal from "./Test";
import OurTeam from "./OurTeam";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import testimonials from "./testimonials";
import Footer from "../Footer";

const Landingpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
        <div className="reservation-btn">
          <button
            className="about-us-btn landing-btn"
            style={{
              background: " wheat",
              padding: "8px",
              width: "160px",
            }}
            onClick={openModal}
          >
            Reserve Now
          </button>
          <ReservationModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
      {/* section two */}
      <div className="content-two">
        <section className="">
          <div
            className="content-two-container"
            style={{ margin: "65px 65px" }}
          >
            <div className="content-two-left-side">
              <h1 className="hero-text-two" style={{ marginBottom: "25px" }}>
                Tailored Grooming for the Mordern Gentlemen
              </h1>
              <p style={{ marginBottom: "25px" }}>
                Where classic techniques meet modern style. Discover a grooming
                experience designed for your unique look and comfort.
              </p>
              <button
                className="about-us-btn"
                style={{
                  border: "1px solid wheat",
                  padding: "8px",
                  width: "120px",
                  marginBottom: "65px",
                }}
                onClick={openModal}
              >
                Reserve Now
              </button>
            </div>
            <div className="content-two-right-side">
              <img src={Tems} alt="tems at work" style={{ width: "20rem" }} />
            </div>
          </div>
        </section>
        <section className="our-services-section">
          <OurServices />
        </section>

        <section className="">
          <div
            className="content-two-container"
            style={{ margin: "25px 25px" }}
          >
            <div className="content-two-right-side">
              <img src={Tem} alt="tems at work" style={{ width: "20rem" }} />
            </div>
            <div className="content-two-left-side">
              <h1 className="hero-text-two">Clean Shave For Men</h1>
              <p style={{ marginTop: "25px" }}>
                Feel your best with a clean shave that leaves your skin
                revitalized and refreshed. Experience unparalleled comfort and a
                polished finish that boosts your confidence.
              </p>
              <button
                className="about-us-btn"
                style={{
                  border: "1px solid wheat",
                  padding: "8px",
                  width: "120px",
                  marginTop: "25px",
                }}
              >
                Reserve Now
              </button>
            </div>
          </div>
        </section>
        <OurTeam />
        <section className="testimoy-section">
          <div className="header-container">
            <div className="line"></div>
            <h1 className="services">What People Say</h1>
            <div className="line"></div>
          </div>
          <div className="testimonies">
            <i className="arrow">"</i>
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={true}
              spaceBetween={50}
              speed={600}
              autoplay={{ delay: 5000 }}
              slidesPerView="auto"
              pagination={{
                el: "swiper-pagination",
                type: "bullets",
                clickable: true,
              }}
            >
              {testimonials.map((testimony) => (
                <SwiperSlide key={testimony.id}>
                  <div className="testimony_container">
                    <img src={testimony.img} alt="testimony" />
                    <div className="testi">
                      <p>{testimony.testimony}</p>
                      <h2>{testimony.name}</h2>
                      <p className="occupation">{testimony.occupation}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <i>"</i>
          </div>
        </section>
        <section>
          <div className="header-container">
            <div className="line"></div>
            <h1 className="services">Our Products</h1>
            <div className="line"></div>
          </div>
        </section>
      </div>
      <section
        className="section_to_footer"
        style={{ borderBottom: "2px solid wheat" }}
      >
        <div className="footer-words">
          <h1 className="footer_text">
            Reach out to us for a style that suits you best!
          </h1>
          <div className="reservation-btn">
            <button
              className="about-us-btn landing-btn"
              style={{
                background: " wheat",
                padding: "8px",
                width: "160px",
              }}
              onClick={openModal}
            >
              Reserve Now
            </button>
            <ReservationModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Landingpage;
