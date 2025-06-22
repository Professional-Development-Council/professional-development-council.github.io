import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TEDxLogo from "../public/assets/images/TEDx_Logo_Short.png";

const TEDxIITGandhinagar = () => {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const speakers = [
    {
      name: "Dr. Raghunath Anant Mashelkar",
      title: "Former Director General, CSIR",
      topic: "Innovation for Inclusion",
      image: "/assets/images/speaker-placeholder.jpg",
      bio: "Renowned scientist and innovation expert",
    },
    {
      name: "Kiran Mazumdar-Shaw",
      title: "Executive Chairperson, Biocon",
      topic: "Biotechnology & Healthcare Innovation",
      image: "/assets/images/speaker-placeholder.jpg",
      bio: "Pioneer in biotechnology and healthcare",
    },
    {
      name: "Nandan Nilekani",
      title: "Co-founder, Infosys",
      topic: "Digital India & Technology",
      image: "/assets/images/speaker-placeholder.jpg",
      bio: "Technology visionary and digital transformation leader",
    },
  ];

  const events = [
    {
      year: "2024",
      theme: "Ideas Worth Spreading",
      date: "March 15, 2024",
      speakers: 12,
      audience: 500,
      status: "completed",
    },
    {
      year: "2023",
      theme: "Reimagining Tomorrow",
      date: "February 18, 2023",
      speakers: 10,
      audience: 450,
      status: "completed",
    },
    {
      year: "2022",
      theme: "Innovation Unleashed",
      date: "March 20, 2022",
      speakers: 8,
      audience: 400,
      status: "completed",
    },
  ];

  const stats = [
    { number: "5+", label: "Years of Impact", icon: "🎯" },
    { number: "30+", label: "Inspiring Speakers", icon: "🎤" },
    { number: "2000+", label: "Lives Touched", icon: "❤️" },
    { number: "1M+", label: "Video Views", icon: "👁️" },
  ];

  const values = [
    {
      title: "Ideas Worth Spreading",
      description:
        "We curate and share powerful ideas that have the potential to change perspectives and inspire action.",
      icon: "💡",
    },
    {
      title: "Innovation & Creativity",
      description:
        "We celebrate innovative thinking and creative solutions to the world&apos;s most pressing challenges.",
      icon: "🚀",
    },
    {
      title: "Community Building",
      description:
        "We bring together diverse minds to create a vibrant community of thinkers and change-makers.",
      icon: "🤝",
    },
    {
      title: "Knowledge Sharing",
      description:
        "We facilitate the exchange of knowledge across disciplines, cultures, and generations.",
      icon: "📚",
    },
  ];

  return (
    <div className="main-container">
      <Head>
        <title>TEDxIITGandhinagar | Ideas Worth Spreading</title>
        <meta
          name="description"
          content="TEDxIITGandhinagar brings together brilliant minds to share ideas worth spreading. Join us for inspiring talks, innovative thinking, and transformative experiences."
        />
        <meta
          name="keywords"
          content="TEDx, IIT Gandhinagar, ideas worth spreading, innovation, speakers, events"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="TEDxIITGandhinagar | Ideas Worth Spreading"
        />
        <meta
          property="og:description"
          content="Join us for inspiring talks and transformative experiences"
        />
      </Head>

      {/* Hero Section */}
      <section className="tedx-hero">
        <div className="tedx-hero-overlay"></div>
        <div className="tedx-hero-content">
          <div className="tedx-logo-container" data-aos="zoom-in">
            <div className="tedx-logo-text">
              <span className="ted-text">TED</span>
              <span className="x-text">x</span>
              <span className="location-text">IITGandhinagar</span>
            </div>
          </div>
          <h1 data-aos="fade-up" data-aos-delay="300">
            Ideas Worth Spreading
          </h1>
          <p data-aos="fade-up" data-aos-delay="500">
            Where brilliant minds converge to share transformative ideas that
            shape our future
          </p>
          <div
            className="tedx-hero-actions"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <a
              href="https://tedxiitgandhinagar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn tedx-btn-primary"
            >
              Visit Official Website
            </a>
          </div>
        </div>
        <div
          className="tedx-scroll-indicator"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      <div className="page-container">
        {/* Navigation Tabs */}
        <section className="tedx-nav-section" data-aos="fade-up">
          <div className="tedx-nav-tabs">
            {[
              { id: "about", label: "About TEDx", icon: "" },
              { id: "events", label: "Our Events", icon: "" },
              { id: "speakers", label: "Speakers", icon: "" },
              { id: "impact", label: "Our Impact", icon: "" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`tedx-nav-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        

        {/* About Section */}
        {activeTab === "about" && (
          <section
            id="about"
            className="tedx-content-section"
            data-aos="fade-up"
          >
            <div className="section-heading">
              <h1>About TEDx</h1>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="tedx-content-card">
                  <h2>What is TED?</h2>
                  <p>
                    TED is a nonprofit organization devoted to Ideas Worth
                    Spreading. Started as a four-day conference in California 30
                    years ago, TED has grown to support its mission with
                    multiple initiatives.
                  </p>
                  <p>
                    The two annual TED Conferences invite the world&apos;s
                    leading thinkers and doers to speak for 18 minutes or less.
                    Many of these talks are then made available, free, at
                    TED.com. speak for 18 minutes or less. Many of these talks
                    are then made available, free, at TED.com.
                  </p>
                  <div className="tedx-highlight-box">
                    <h4>🎯 Our Mission</h4>
                    <p>
                      To spread ideas that matter and inspire positive change in
                      our community and beyond.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="tedx-content-card">
                  <h2>TEDxIITGandhinagar</h2>
                  <p>
                    In the spirit of ideas worth spreading, TEDx is a program of
                    local, self-organized events that bring people together to
                    share a TED-like experience.
                  </p>
                  <p>
                    At TEDxIITGandhinagar, we combine TED Talks videos and live
                    speakers to spark deep discussion and connection within our
                    academic community and beyond.
                  </p>
                  <div className="tedx-image-container">
                    <Image
                      src={TEDxLogo}
                      className="tedx-main-image"
                      alt="TEDxIITGandhinagar Event"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="tedx-values-section">
              <h2>Our Core Values</h2>
              <div className="tedx-values-grid">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="tedx-value-card"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="value-icon">{value.icon}</div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Events Section */}
        {activeTab === "events" && (
          <section className="tedx-content-section" data-aos="fade-up">
            <div className="section-heading">
              <h1>Our Events</h1>
            </div>

            <div className="tedx-events-timeline">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`tedx-event-card ${event.status}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="event-year">{event.year}</div>
                  <div className="event-content">
                    <h3>{event.theme}</h3>
                    <div className="event-details">
                      <span className="event-date">📅 {event.date}</span>
                      <span className="event-speakers">
                        🎤 {event.speakers} Speakers
                      </span>
                      <span className="event-audience">
                        👥 {event.audience} Attendees
                      </span>
                    </div>
                    <div className={`event-status ${event.status}`}>
                      {event.status === "upcoming"
                        ? "🔥 Upcoming"
                        : "✅ Completed"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Speakers Section */}
        {activeTab === "speakers" && (
          <section className="tedx-content-section" data-aos="fade-up">
            <div className="section-heading">
              <h1>Our Speakers</h1>
            </div>

            <div className="tedx-speakers-grid">
              {speakers.map((speaker, index) => (
                <div
                  key={index}
                  className="tedx-speaker-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="speaker-image-placeholder">
                    <div className="speaker-initial">
                      {speaker.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <div className="speaker-info">
                    <h3>{speaker.name}</h3>
                    <p className="speaker-title">{speaker.title}</p>
                    <p className="speaker-topic">
                      &ldquo;{speaker.topic}&rdquo;
                    </p>
                    <p className="speaker-bio">{speaker.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="tedx-speaker-cta">
              <h3>Want to speak at TEDxIITGandhinagar?</h3>
              We&apos;re always looking for inspiring speakers with ideas worth
              spreading. We&apos;re always looking for inspiring speakers with
              ideas worth
              <p>
                We&apos;re always looking for inspiring speakers with ideas worth
                spreading.
              </p>
              <a
                href="mailto:tedxiitgandhinagar@iitgn.ac.in?subject=Speaker Application"
                className="btn tedx-btn-primary"
              >
                Apply to Speak
              </a>
            </div>
          </section>
        )}

        {/* Impact Section */}
        {activeTab === "impact" && (
          <section className="tedx-content-section" data-aos="fade-up">
            <div className="section-heading">
              <h1>Our Impact</h1>
            </div>

            <div className="tedx-impact-grid">
              <div className="tedx-impact-card" data-aos="fade-right">
                <h2>🌍 Global Reach</h2>
                <p>
                  Our talks have reached audiences worldwide, inspiring change
                  across continents. Through online platforms, our ideas
                  continue to spread long after the event ends.
                </p>
                <div className="impact-metrics">
                  <div className="metric">
                    <span className="metric-number">1M+</span>
                    <span className="metric-label">Video Views</span>
                  </div>
                  <div className="metric">
                    <span className="metric-number">50+</span>
                    <span className="metric-label">Countries Reached</span>
                  </div>
                </div>
              </div>

              <div className="tedx-impact-card" data-aos="fade-left">
                <h2>🎓 Student Engagement</h2>
                <p>
                  We&apos;ve inspired thousands of students to pursue their
                  passions, start initiatives, and become leaders in their
                  fields. Our events catalyze action and innovation. and become
                  leaders in their fields. Our events catalyze action and
                  innovation.
                </p>
                <div className="impact-metrics">
                  <div className="metric">
                    <span className="metric-number">2000+</span>
                    <span className="metric-label">Students Inspired</span>
                  </div>
                  <div className="metric">
                    <span className="metric-number">100+</span>
                    <span className="metric-label">Projects Started</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tedx-testimonials">
              <h2>What People Say</h2>
              <div className="testimonials-grid">
                <div className="testimonial-card" data-aos="fade-up">
                  <p>
                    &ldquo;TEDxIITGandhinagar opened my mind to possibilities I
                    never imagined. The speakers were truly inspiring.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <strong>- Priya Sharma</strong>
                    <span>B.Tech Student, IIT Gandhinagar</span>
                  </div>
                </div>
                <div
                  className="testimonial-card"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <p>
                    &ldquo;The ideas shared here have influenced my research
                    direction and career path significantly.&rdquo;
                  </p>
                  <div className="testimonial-author">
                    <strong>- Dr. Rajesh Kumar</strong>
                    <span>Professor, IIT Gandhinagar</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Connect Section */}
        <section className="tedx-connect-section" data-aos="fade-up">
          <div className="tedx-connect-card">
            <h2>Connect With Us</h2>
            <p>
              Join our community of thinkers, innovators, and change-makers.
              Stay updated with our latest events and inspiring content.
            </p>

            <div className="tedx-social-links">
              <a
                href="https://www.facebook.com/TEDxIITGn"
                target="_blank"
                rel="noopener noreferrer"
                className="tedx-social-link facebook"
              >
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/tedx.iitgandhinagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="tedx-social-link instagram"
              >
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/tedxiitgandhinagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="tedx-social-link linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.youtube.com/@tedxiitgandhinagar"
                target="_blank"
                rel="noopener noreferrer"
                className="tedx-social-link youtube"
              >
                <i className="fab fa-youtube"></i>
                <span>YouTube</span>
              </a>
              <a
                href="mailto:tedxiitgandhinagar@iitgn.ac.in"
                className="tedx-social-link email"
              >
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </a>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default TEDxIITGandhinagar;
