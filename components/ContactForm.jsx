import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzBRnny_qNITq1-RDvcTLFiEclq0Wqy2qxTbDHREpApT2rIXfoNsPIWeI5HzLAlpTLMvg/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.Name.trim()) return "Name is required";
    if (!formData.Email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.Email))
      return "Please enter a valid email";
    if (!formData.Subject.trim()) return "Subject is required";
    if (!formData.Message.trim()) return "Message is required";
    if (formData.Message.length < 10)
      return "Message should be at least 10 characters long";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError("");

    const formDataToSend = new FormData();
    formDataToSend.append("SheetName", "feedback");
    formDataToSend.append("Name", formData.Name);
    formDataToSend.append("Email", formData.Email);
    formDataToSend.append("Subject", formData.Subject);
    formDataToSend.append("Message", formData.Message);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setMessage(
          "✅ Your message has been sent successfully! We'll get back to you within 24-48 hours.",
        );
        setFormData({
          Name: "",
          Email: "",
          Subject: "",
          Message: "",
        });
        setTimeout(() => {
          setMessage("");
        }, 5000);
      } else {
        setError(
          "Failed to send message. Please try again or contact us directly.",
        );
      }
    } catch (error) {
      console.error("Error!", error.message);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-us-form">
      {message && <div className="success-message">{message}</div>}

      {error && (
        <div
          style={{
            background: "rgba(239, 68, 68, 0.1)",
            color: "var(--error)",
            padding: "var(--space-md)",
            borderRadius: "var(--radius-md)",
            marginBottom: "var(--space-lg)",
            border: "1px solid rgba(239, 68, 68, 0.2)",
            fontSize: "0.875rem",
          }}
        >
          ⚠️ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: "var(--space-md)" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              marginBottom: "var(--space-xs)",
              fontWeight: "500",
              color: "var(--gray-700)",
              fontSize: "0.875rem",
            }}
          >
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            name="Name"
            placeholder="Enter your full name"
            value={formData.Name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div style={{ marginBottom: "var(--space-md)" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "var(--space-xs)",
              fontWeight: "500",
              color: "var(--gray-700)",
              fontSize: "0.875rem",
            }}
          >
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            name="Email"
            placeholder="your.email@example.com"
            value={formData.Email}
            onChange={handleChange}
            className="form-control"
            required
          />
          <small
            style={{
              color: "var(--gray-500)",
              fontSize: "0.75rem",
              marginTop: "var(--space-xs)",
              display: "block",
            }}
          >
            💡 Use your @iitgn.ac.in email for faster response
          </small>
        </div>

        <div style={{ marginBottom: "var(--space-md)" }}>
          <label
            htmlFor="subject"
            style={{
              display: "block",
              marginBottom: "var(--space-xs)",
              fontWeight: "500",
              color: "var(--gray-700)",
              fontSize: "0.875rem",
            }}
          >
            Subject *
          </label>
          <select
            id="subject"
            name="Subject"
            value={formData.Subject}
            onChange={handleChange}
            className="form-control"
            required
            style={{ cursor: "pointer" }}
          >
            <option value="">Select a topic...</option>
            <option value="Career Guidance">🧭 Career Guidance</option>
            <option value="Resume Review">📄 Resume Review</option>
            <option value="Placement Support">💼 Placement Support</option>
            <option value="Event Inquiry">🎪 Event Inquiry</option>
            <option value="Partnership">🤝 Partnership Opportunity</option>
            <option value="Technical Support">🔧 Technical Support</option>
            <option value="Feedback">💬 Feedback</option>
            <option value="Other">❓ Other</option>
          </select>
        </div>

        <div style={{ marginBottom: "var(--space-lg)" }}>
          <label
            htmlFor="message"
            style={{
              display: "block",
              marginBottom: "var(--space-xs)",
              fontWeight: "500",
              color: "var(--gray-700)",
              fontSize: "0.875rem",
            }}
          >
            Message *
          </label>
          <textarea
            id="message"
            name="Message"
            placeholder="Please provide details about your inquiry. The more specific you are, the better we can assist you."
            value={formData.Message}
            onChange={handleChange}
            className="form-control"
            rows="6"
            required
            style={{ resize: "vertical", minHeight: "120px" }}
          ></textarea>
          <small
            style={{
              color: "var(--gray-500)",
              fontSize: "0.75rem",
              marginTop: "var(--space-xs)",
              display: "block",
            }}
          >
            {formData.Message.length}/500 characters (minimum 10 required)
          </small>
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={isLoading}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-xs)",
            opacity: isLoading ? 0.7 : 1,
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
        >
          {isLoading ? (
            <>
              <span
                style={{
                  width: "16px",
                  height: "16px",
                  border: "2px solid #ffffff40",
                  borderTop: "2px solid #ffffff",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                  display: "inline-block",
                }}
              ></span>
              Sending Message...
            </>
          ) : (
            <>📤 Send Message</>
          )}
        </button>

        <div
          style={{
            marginTop: "var(--space-md)",
            fontSize: "0.75rem",
            color: "var(--gray-500)",
            textAlign: "center",
          }}
        >
          <p style={{ margin: 0 }}>
            🔒 Your information is secure and will only be used to respond to
            your inquiry.
          </p>
        </div>
      </form>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
