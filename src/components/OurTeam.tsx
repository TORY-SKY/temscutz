import React, { useState, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import img1 from "../assets/Temshaircut/img_1.jpg";
import img2 from "../assets/Temshaircut/img_2.jpg";
import img4 from "../assets/Temshaircut/img_4.jpg";
import "./Swiper.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
const OurTeam: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const swiperRef = useRef<any>(null);

  return (
    <div className="carousel-container" style={{ margin: "25px 25px" }}>
      <div className="our-team">
        <div className="team-header">
          <h1 className="hero-text-two">Our Team Member</h1>
          <span></span>
        </div>
        <div className="carousel-controler hideOnMobile">
          <button
            className="control"
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={!swiperRef.current}
          >
            <ArrowBackIosNewOutlinedIcon className="control_arrow" />
          </button>
          <button
            className="control"
            onClick={() => swiperRef.current?.slideNext()}
            disabled={!swiperRef.current}
          >
            <ArrowForwardIosOutlinedIcon className="control_arrow" />
          </button>
        </div>
      </div>
      <div className="team_carousel">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          breakpoints={{
            0: { slidesPerView: 1 }, // 1 slide on small screens (e.g., phones)
            768: { slidesPerView: 2 }, // 2 slides on tablets
            1024: { slidesPerView: 2 }, // 3 slides on desktops and larger screens
          }}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true, type: "fraction" }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiperInstance) => {
            swiperRef.current = swiperInstance;
          }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="img-container">
              <img src={img1} className="team_member" alt="team member" />
              <div className="sometext" style={{ color: "wheat" }}>
                <h1>Terry G</h1>
                <p>Experience 4 years</p>
                <p>Cost 45$</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-container">
              <img src={img4} className="team_member" alt="team member" />
              <div className="sometext" style={{ color: "wheat" }}>
                <h1>Eric Anderson</h1>
                <p>Experience 2 years</p>
                <p>Cost 25$</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-container">
              <img src={img2} className="team_member" alt="team member" />
              <div className="sometext" style={{ color: "wheat" }}>
                <h1>Babatunde Daemon</h1>
                <p>Experience 2 years</p>
                <p>Cost 25$</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-container">
              <img src={img4} className="team_member" alt="team member" />
              <div className="sometext" style={{ color: "wheat" }}>
                <h1>The G.O.A.T</h1>
                <p>Experience 10 years</p>
                <p>Cost 100$</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
