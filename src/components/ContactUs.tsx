import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./CSS/contactus.css";

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_dyth752", // Replace with your EmailJS Service ID
          "template_4ajj7x6", // Replace with your EmailJS Template ID
          form.current,
          "BXR08gKJf_aum3eR6yvqN" // Replace with your EmailJS User ID
        )
        .then(
          (result) => {
            alert(`Message sent successfully! ${result}`);
          },
          (error) => {
            alert(`An error occurred, please try again later. ${error}`);
          }
        );
    }
  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" required />

        <label>Email</label>
        <input type="email" name="user_email" required />

        <label>Message</label>
        <textarea name="message" required />

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
