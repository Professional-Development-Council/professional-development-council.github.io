import React from "react";
import logo from "../public/assets/images/IITGN Logo-Trans.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/events", label: "Events" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact Us" },
  ];

  const resources = [
    { href: "/material/prep-mat", label: "PrepMat", loginRequired: true },
    {
      href: "/material/placement-talks",
      label: "Placement Talks",
      loginRequired: true,
    },
    { href: "/resume_review", label: "Resume Review" },
    {
      href: "https://kishan-ved.github.io/resume_generator/resumegenerator.html",
      label: "Resume Builder",
      external: true,
    },
  ];

  const divisions = [
    { href: "/annuity", label: "Annuity Club" },
    { href: "/tedxiitgn", label: "TEDxIITGandhinagar" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/pdcIITGN/",
      icon: "fab fa-facebook-f",
      label: "Facebook",
      color: "#4267b2",
    },
    {
      href: "https://www.instagram.com/pdc_iitgn?igsh=bmVvcTkzbjdtazZn",
      icon: "fab fa-instagram",
      label: "Instagram",
      color: "#e4405f",
    },
    {
      href: "https://www.linkedin.com/company/professional-development-council-iit-gandhinagar/",
      icon: "fab fa-linkedin-in",
      label: "LinkedIn",
      color: "#0077b5",
    },
    {
      href: "mailto:pdc.secretary@iitgn.ac.in",
      icon: "fas fa-envelope",
      label: "Email",
      color: "#ea4335",
    },
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            {/* About Section */}
            <div className="col-md-4">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Image
                    src={logo}
                    className="img-fluid"
                    alt="IIT Gandhinagar Logo"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="footer-text">
                  <p>
                    The Professional Development Council (PDC) at IIT
                    Gandhinagar is dedicated to empowering students with
                    comprehensive career development resources, industry
                    connections, and professional skills training.
                  </p>
                  <p>
                    <strong>🎯 Mission:</strong> Bridging the gap between
                    academic excellence and industry readiness.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-md-2">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Resources */}
            <div className="col-md-2">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Resources</h3>
                </div>
                <ul>
                  {resources.map((resource, index) => (
                    <li key={index}>
                      {resource.external ? (
                        <a
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {resource.label}
                        </a>
                      ) : (
                        <Link href={resource.href}>
                          {resource.label}
                          {resource.loginRequired && (
                            <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                              {" "}
                              *
                            </span>
                          )}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--gray-400)",
                    marginTop: "var(--space-sm)",
                  }}
                >
                  * Login required for access
                </p>
              </div>
            </div>

            {/* Divisions */}
            <div className="col-md-2">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Our Divisions</h3>
                </div>
                <ul>
                  {divisions.map((division, index) => (
                    <li key={index}>
                      <Link href={division.href}>{division.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="col-md-2">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Connect With Us</h3>
                </div>
                <div className="footer-contact-info">
                  <div style={{ marginBottom: "var(--space-md)" }}>
                    <p
                      style={{
                        color: "var(--gray-300)",
                        fontSize: "0.875rem",
                        marginBottom: "var(--space-xs)",
                      }}
                    >
                      📧 Email
                    </p>
                    <a
                      href="mailto:pdc.secretary@iitgn.ac.in"
                      style={{ color: "var(--gray-400)", fontSize: "0.875rem" }}
                    >
                      pdc.secretary@iitgn.ac.in
                    </a>
                  </div>
                  <div style={{ marginBottom: "var(--space-md)" }}>
                    <p
                      style={{
                        color: "var(--gray-300)",
                        fontSize: "0.875rem",
                        marginBottom: "var(--space-xs)",
                      }}
                    >
                      📍 Location
                    </p>
                    <p
                      style={{ color: "var(--gray-400)", fontSize: "0.875rem" }}
                    >
                      IIT Gandhinagar, Gujarat
                    </p>
                  </div>
                </div>
                <div className="footer-social-icon">
                  <span>Follow Us</span>
                  <ul className="social_icon">
                    {socialLinks.map((social, index) => (
                      <li key={index}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Follow us on ${social.label}`}
                          title={social.label}
                        >
                          <i className={social.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

       

        {/* Copyright Section */}
        <div className="copyright-area">
          <div className="row">
            <div className="col-md-6 text-center text-md-left">
              <div className="copyright-text">
                <p>
                  Copyright © {currentYear} Professional Development Council,
                  IIT Gandhinagar. All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="footer-menu">
                <ul>
                  <li>
                    <Link href="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="/contact">Support</Link>
                  </li>
                  <li>
                    <a
                      href="https://iitgn.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IIT Gandhinagar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
