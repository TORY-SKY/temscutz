import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./CSS/contactus.css";

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID!, // Use your Service ID
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID!, // Use your Template ID
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY! // Use your Public Key
        )
        .then(
          (result) => {
            alert("Message sent successfully!");
            console.log("Email result:", result);
          },
          (error) => {
            alert("An error occurred, please try again later.");
            console.error("Email error:", error);
          }
        );
      form.current.reset(); // Clear the form after sending
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" required placeholder="Your Name" />

        <label>Email</label>
        <input type="email" name="user_email" required placeholder="Your Email" />

        <label>Message</label>
        <textarea name="message" required placeholder="Your Message"></textarea>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

