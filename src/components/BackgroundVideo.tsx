import React from "react";
import "../index.css";

const BackgroundVideo: React.FC = () => {
  return (
    <video autoPlay loop muted playsInline className="background-video">
      <source src="{video}" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
