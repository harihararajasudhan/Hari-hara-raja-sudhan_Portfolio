import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/contact", {
        name,
        email,
        message,
      });
      setSuccess("Message sent successfully! I'll get back to you soon.");
      setError("");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Error sending message");
      setSuccess("");
      console.error(err);
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <div className="contact-container">
      <h1>Get In Touch</h1>
      <p style={{ textAlign: "center", color: "#cbd5e1", marginBottom: "30px" }}>
        Have a project in mind? Feel free to reach out!
      </p>

      {success && (
        <div style={{ 
          textAlign: "center", 
          padding: "15px", 
          background: "rgba(100, 181, 246, 0.2)", 
          borderRadius: "8px", 
          marginBottom: "20px",
          border: "1px solid rgba(100, 181, 246, 0.5)"
        }}>
          ✅ {success}
        </div>
      )}

      {error && (
        <div style={{ 
          textAlign: "center", 
          padding: "15px", 
          background: "rgba(244, 67, 54, 0.06)", 
          borderRadius: "8px", 
          marginBottom: "20px",
          border: "1px solid rgba(244, 67, 54, 0.2)",
          color: "#b91c1c"
        }}>
          ❌ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message..."
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
