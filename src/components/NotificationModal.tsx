import React, { useState } from "react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const NotificationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    service: "haircut",
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" >
        <h2>Make a Reservation</h2>

        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;
