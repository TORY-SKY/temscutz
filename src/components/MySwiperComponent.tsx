import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Import modules directly from "swiper"
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import your images
import img1 from "../assets/Temshaircut/img_1.jpg";
import img2 from "../assets/Temshaircut/img_2.jpg";
// import img4 from "../assets/Temshaircut/img_4.jpg";

const MySwiperComponent: React.FC = () => {
  // useRef to store the Swiper instance once it's available
  const swiperRef = useRef<any>(null);

  return (
    <div>
      <div
        className="btn-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={!swiperRef.current}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => swiperRef.current?.slideNext()}
          disabled={!swiperRef.current}
        >
          Next
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        breakpoints={{
          0: { slidesPerView: 1 }, // 1 slide on small screens
          768: { slidesPerView: 2 }, // 2 slides on tablets
          1024: { slidesPerView: 3 }, // 3 slides on desktops
        }}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true, type: "fraction" }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiperInstance) => {
          swiperRef.current = swiperInstance;
        }}
      >
        <SwiperSlide>
          <div className="img-container">
            <img src={img1} className="team_member" alt="team member 1" />
            <div className="sometext">
              <h1>FERNANDES ERIC</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                possimus.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <img src={img2} className="team_member" alt="team member 2" />
            <div className="sometext">
              <h1>FERNANDES ERIC</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                possimus.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-container">
            <img src={img2} className="team_member" alt="team member 3" />
            <div className="sometext">
              <h1>FERNANDES ERIC</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                possimus.
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </div>
  );
};

export default MySwiperComponent;
