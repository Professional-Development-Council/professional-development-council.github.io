import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      contact: "pdc.secretary@iitgn.ac.in",
      action: "mailto:pdc.secretary@iitgn.ac.in",
    },
    {
      icon: "📍",
      title: "Visit Us",
      description: "Find us at the IIT Gandhinagar campus",
      contact: "IIT Gandhinagar, Palaj, Gandhinagar, Gujarat 382355",
      action: "https://goo.gl/maps/YourLocationLink",
    },
    {
      icon: "🕒",
      title: "Office Hours",
      description: "We're available during these hours",
      contact: "Monday - Friday: 9:00 AM - 6:00 PM",
      action: null,
    },
  ];

  const teamContacts = [
    {
      role: "PDC Secretary",
      name: "PDC Team",
      email: "pdc.secretary@iitgn.ac.in",
      description: "General inquiries and support",
    },
    {
      role: "Career Guidance",
      name: "Career Team",
      email: "pdc.secretary@iitgn.ac.in",
      description: "Career counseling and guidance",
    },
    {
      role: "Events & Workshops",
      name: "Events Team",
      email: "pdc.secretary@iitgn.ac.in",
      description: "Workshop registration and event queries",
    },
  ];

  const faqs = [
    {
      question: "How can I access PrepMat resources?",
      answer:
        "You need to sign in with your @iitgn.ac.in email address to access PrepMat and other exclusive resources.",
    },
    {
      question: "How do I submit my resume for review?",
      answer:
        "Visit our Resume Review page and fill out the form with your resume attached. Our team will provide feedback within 3-5 business days.",
    },
    {
      question: "When are placement talks scheduled?",
      answer:
        "Placement talks are scheduled regularly throughout the academic year. Check our Events page or follow our announcements for the latest schedules.",
    },
    {
      question: "How can I join PDC events?",
      answer:
        "Most events are open to all IIT Gandhinagar students. Registration links are shared via email and on our website's events section.",
    },
  ];

  return (
    <div className="main-container">
      <Head>
        <title>Contact Us | PDC IIT Gandhinagar</title>
        <meta
          name="description"
          content="Get in touch with the Professional Development Council at IIT Gandhinagar. We're here to support your career journey with guidance, resources, and opportunities."
        />
        <meta
          name="keywords"
          content="contact PDC, IIT Gandhinagar, career support, student services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id="page-header">
        <div className="page-heading">
          <h2>Contact Us</h2>
          <h3>We&apos;re here to support your career journey</h3>
        </div>
      </header>

      <div className="page-container">
        {/* Introduction */}
        <section className="page-section" data-aos="fade-up">
          <div className="card-modern text-center">
            <h2>Let&apos;s Connect</h2>
            <p>
              Have questions about career development, need guidance on
              placements, or want to know more about our programs? Our dedicated
              team is here to help you succeed. Reach out to us through any of
              the channels below.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="page-section" data-aos="fade-up">
          <div className="section-heading">
            <h1>Get in Touch</h1>
          </div>
          <div className="features-grid">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="icon">
                  <span>{method.icon}</span>
                </div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
                <div style={{ marginTop: "var(--space-md)" }}>
                  {method.action ? (
                    <a
                      href={method.action}
                      target={
                        method.action.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        method.action.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="btn btn-primary"
                      style={{
                        fontSize: "0.875rem",
                        padding: "var(--space-sm) var(--space-md)",
                      }}
                    >
                      {method.contact}
                    </a>
                  ) : (
                    <p
                      style={{
                        color: "var(--primary-600)",
                        fontWeight: "600",
                        fontSize: "0.875rem",
                        margin: 0,
                      }}
                    >
                      {method.contact}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="page-section" data-aos="fade-up">
          <div className="row">
            <div className="col-md-8">
              <div className="card-modern">
                <h2>Send us a Message</h2>
                <p>
                  Fill out the form below and we&apos;ll get back to you as soon
                  as Fill out the form below and we&apos;ll get back to you as soon
                  as possible. For urgent matters, please email us directly.
                </p>
                <ContactForm />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-modern">
                <h3>Quick Support</h3>
                <div style={{ marginBottom: "var(--space-lg)" }}>
                  {teamContacts.map((contact, index) => (
                    <div
                      key={index}
                      style={{
                        marginBottom: "var(--space-lg)",
                        paddingBottom: "var(--space-md)",
                        borderBottom:
                          index < teamContacts.length - 1
                            ? "1px solid var(--gray-200)"
                            : "none",
                      }}
                    >
                      <h4
                        style={{
                          color: "var(--primary-600)",
                          fontSize: "1rem",
                          marginBottom: "var(--space-xs)",
                        }}
                      >
                        {contact.role}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          marginBottom: "var(--space-xs)",
                          color: "var(--gray-600)",
                        }}
                      >
                        {contact.description}
                      </p>
                      <a
                        href={`mailto:${contact.email}`}
                        style={{
                          color: "var(--primary-600)",
                          fontSize: "0.875rem",
                          fontWeight: "500",
                        }}
                      >
                        📧 {contact.email}
                      </a>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 style={{ marginBottom: "var(--space-md)" }}>Follow Us</h4>
                  <div
                    style={{
                      display: "flex",
                      gap: "var(--space-sm)",
                      flexWrap: "wrap",
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/company/professional-development-council-iit-gandhinagar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{
                        fontSize: "0.75rem",
                        padding: "var(--space-xs) var(--space-sm)",
                      }}
                    >
                      💼 LinkedIn
                    </a>
                    <a
                      href="https://www.instagram.com/pdc_iitgn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{
                        fontSize: "0.75rem",
                        padding: "var(--space-xs) var(--space-sm)",
                      }}
                    >
                      📸 Instagram
                    </a>
                    <a
                      href="https://www.facebook.com/pdcIITGN/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{
                        fontSize: "0.75rem",
                        padding: "var(--space-xs) var(--space-sm)",
                      }}
                    >
                      📘 Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="page-section" data-aos="fade-up">
          <div className="section-heading">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="row">
            {faqs.map((faq, index) => (
              <div key={index} className="col-md-6">
                <div
                  className="card-modern"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h4
                    style={{
                      color: "var(--primary-600)",
                      fontSize: "1.125rem",
                      marginBottom: "var(--space-md)",
                    }}
                  >
                    ❓ {faq.question}
                  </h4>
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      color: "var(--gray-600)",
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="page-section" data-aos="fade-up">
          <div className="feature-section text-center">
            <h2>Still have questions?</h2>
            <p>
              Can&apos;t find what you&apos;re looking for? Our team is always
              ready to help. Don&apos;t hesitate to reach out for personalized
              assistance.
            </p>
            <div
              style={{
                display: "flex",
                gap: "var(--space-md)",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "var(--space-lg)",
              }}
            >
              <a
                href="mailto:pdc.secretary@iitgn.ac.in?subject=Inquiry from Website"
                className="btn btn-primary"
              >
                📧 Send Direct Email
              </a>
              <a
                href="https://www.linkedin.com/company/professional-development-council-iit-gandhinagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                💼 Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Office Hours and Location */}
        <section className="page-section" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6">
              <div className="card-modern">
                <h3>🏛️ Visit Our Office</h3>
                <div style={{ marginBottom: "var(--space-lg)" }}>
                  <h4 style={{ color: "var(--primary-600)", fontSize: "1rem" }}>
                    Location
                  </h4>
                  <p>
                    Professional Development Council
                    <br />
                    IIT Gandhinagar
                    <br />
                    Palaj, Gandhinagar
                    <br />
                    Gujarat 382355, India
                  </p>
                </div>
                <div>
                  <h4 style={{ color: "var(--primary-600)", fontSize: "1rem" }}>
                    Office Hours
                  </h4>
                  <p>
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-modern">
                <h3>💡 Pro Tips</h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <li
                    style={{
                      marginBottom: "var(--space-md)",
                      padding: "var(--space-sm)",
                      background: "var(--gray-50)",
                      borderRadius: "var(--radius-md)",
                      borderLeft: "4px solid var(--primary-500)",
                    }}
                  >
                    <strong>🎯 Be Specific:</strong> Include details about your
                    query to get faster, more accurate responses.
                  </li>
                  <li
                    style={{
                      marginBottom: "var(--space-md)",
                      padding: "var(--space-sm)",
                      background: "var(--gray-50)",
                      borderRadius: "var(--radius-md)",
                      borderLeft: "4px solid var(--primary-500)",
                    }}
                  >
                    <strong>📧 Use IITGN Email:</strong> Contact us from your
                    @iitgn.ac.in email for faster verification.
                  </li>
                  <li
                    style={{
                      padding: "var(--space-sm)",
                      background: "var(--gray-50)",
                      borderRadius: "var(--radius-md)",
                      borderLeft: "4px solid var(--primary-500)",
                    }}
                  >
                    <strong>⏰ Response Time:</strong> We typically respond
                    within 24-48 hours during working days.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
