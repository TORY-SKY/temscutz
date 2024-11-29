import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./CSS/Error.css"; // Import custom CSS

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    window.history.back();
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <motion.div
      className="error-page"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        className="error-content"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Page Not Found</h2>
        <p className="error-message">
          Oops! It looks like you’re lost. Let’s get you back on track.
        </p>
        <div className="button-group">
          <button className="error-button" onClick={goBack}>
            Go Back
          </button>
          <button className="error-button secondary" onClick={goHome}>
            Go Home
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ErrorPage;
