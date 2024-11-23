import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // EmailJS for sending emails
import "./ReservationModal.css"; // Import custom CSS for styling

// Define the props for the modal component
interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    service: "haircut",
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Function to send reservation details via WhatsApp
  const sendWhatsApp = () => {
    const phoneNumber = "08121766402"; // Replace the number
    const whatsappMessage = `Hello, I would like to make a reservation:\n\nName: ${formData.name}\nDate: ${formData.date}\nTime: ${formData.time}\nService: ${formData.service}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank"); // Open WhatsApp in a new tab
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send reservation details via WhatsApp
    sendWhatsApp();
    // Close the modal after submission
    onClose();
  };

  // Prevent rendering when modal is closed
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Make a Reservation</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <label htmlFor="service">Services:</label>
          <select id="service" value={formData.service} onChange={handleChange}>
            <option value="haircut">Haircut</option>
            <option value="beard-trim">Beard Trim</option>
            <option value="shave">Shave & Facial</option>
          </select>

          <button
            // type="submit"
            onClick={sendWhatsApp}
            className="submit-button"
          >
            Reserve
          </button>
        </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ReservationModal;
