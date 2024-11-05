import React, { useState } from "react";
import "./ReservationModal.css"; // Import custom CSS for styling

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Make a Reservation</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" required />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" required />

          <label htmlFor="services">Services:</label>
          <select id="services">
            <option value="haircut">Haircut</option>
            <option value="beard-trim">Beard Trim</option>
            <option value="shave">Shave & Facial</option>
          </select>

          <button type="submit" className="submit-button">
            Reserve
          </button>
        </form>
        <button className="close-button " onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ReservationModal;
