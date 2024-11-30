import React from "react";
import "./CSS/gallery.css"; // Import custom CSS

// Sample gallery images (replace with actual images)
const galleryImages = [
  "https://via.placeholder.com/300", // Replace with real image URLs
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
];

const GalleryPage: React.FC = () => {
  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Our Luxurious Styles</h1>
      <p className="gallery-subtitle">
        Explore a collection of expertly crafted styles tailored for the modern
        gentleman.
      </p>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
