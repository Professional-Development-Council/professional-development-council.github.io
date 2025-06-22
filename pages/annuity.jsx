import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Image from "next/image";
import AnnuityClubImg from "../public/assets/images/Annuity_club.jpeg";

const AnnuityClub = () => {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

 

  const services = [
    {
      title: "Financial Literacy",
      description:
        "Comprehensive workshops on personal finance, budgeting, and financial planning for students.",
      features: [
        "Budgeting Basics",
        "Investment Planning",
        "Tax Optimization",
        "Financial Goals",
      ],
    },
    {
      title: "Stock Market Training",
      description:
        "Hands-on experience with stock analysis, trading strategies, and market fundamentals.",
      features: [
        "Technical Analysis",
        "Fundamental Analysis",
        "Risk Management",
        "Portfolio Building",
      ],
    },
    {
      title: "Corporate Finance",
      description:
        "Deep dive into corporate financial concepts, valuation techniques, and case studies.",
      features: [
        "Financial Statements",
        "Valuation Models",
        "M&A Analysis",
        "Corporate Strategy",
      ],
    },
    {
      title: "Quantitative Trading",
      description:
        "Advanced algorithmic trading strategies and quantitative analysis techniques.",
      features: [
        "Algo Trading",
        "Statistical Models",
        "Python/R Programming",
        "Backtesting",
      ],
    },
  ];

  const team = [
    {
      name: "Samyak Gosalia",
      position: "Annuity Secretary",
      image: "/assets/images/Samyak_Gosalia.jpg",
      contact: "+91 83202 76538",
      email: "gosalia.samyak@iitgn.ac.in",
      linkedin: "https://www.linkedin.com/in/samyak-gosalia-a42a20255/",
      github: "https://github.com/Samyak312",
      bio: "Passionate about quantitative finance and algorithmic trading",
    },
    {
      name: "Farhan Obaid",
      position: "Annuity Co-ordinator",
      image: "/assets/images/Farhan_Obaid.jpg",
      contact: "+91 76673 36359",
      email: "farhan.obaid@iitgn.ac.in",
      linkedin: "https://www.linkedin.com/in/farhan-obaid-19b289262/",
      bio: "Focused on financial markets and investment strategies",
    },
  ];

  const events = [
    {
      title: "FinFest 2024",
      date: "March 2024",
      type: "Annual Festival",
      description:
        "Our flagship finance festival featuring competitions, workshops, and industry expert sessions.",
      status: "upcoming",
    },
    {
      title: "Stock Market Simulation",
      date: "Monthly",
      type: "Competition",
      description:
        "Virtual trading competition to test and improve investment skills.",
      status: "ongoing",
    },
    {
      title: "Industry Connect Series",
      date: "Quarterly",
      type: "Networking",
      description:
        "Sessions with finance professionals and alumni working in top financial institutions.",
      status: "ongoing",
    },
  ];

  const achievements = [
    "Winner of Inter-IIT Finance Competition 2023",
    "Managed successful student investment portfolio",
    "100% placement rate in finance roles",
    "Featured in Economic Times for innovative workshops",
  ];

  return (
    <div className="main-container">
      <Head>
        <title>Annuity Club | Finance Club of IIT Gandhinagar</title>
        <meta
          name="description"
          content="Annuity Club - The premier finance club of IIT Gandhinagar. Learn trading, investment, corporate finance, and quantitative analysis with hands-on experience."
        />
        <meta
          name="keywords"
          content="Annuity Club, finance club, IIT Gandhinagar, stock market, trading, investment, corporate finance"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Annuity Club | Finance Club of IIT Gandhinagar"
        />
        <meta
          property="og:description"
          content="Master the world of finance with hands-on experience and expert guidance"
        />
      </Head>

      {/* Hero Section */}
      <section className="annuity-hero">
        <div className="annuity-hero-overlay"></div>
        <div className="annuity-hero-content">
          <div className="annuity-logo-container" data-aos="zoom-in">
            <div className="annuity-brand">
              <div className="brand-text">
                <span className="annuity-text">ANNUITY</span>
                <span className="club-text">Finance Club</span>
              </div>
            </div>
          </div>
          <h1 data-aos="fade-up" data-aos-delay="300">
            Master the World of Finance
          </h1>
          <p data-aos="fade-up" data-aos-delay="500">
            Where financial literacy meets practical expertise. Join IIT
            Gandhinagar&apos;s premier finance community.
          </p>
          <div
            className="annuity-hero-actions"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <a
              href="mailto:annuity@iitgn.ac.in"
              className="btn annuity-btn-primary"
            >
              Join Our Community
            </a>
            <a
              href="#about"
              className="btn annuity-btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          className="annuity-scroll-indicator"
          data-aos="fade-in"
          data-aos-delay="1000"
        >
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      <div className="page-container">
        {/* Navigation Tabs */}
        <section className="annuity-nav-section" data-aos="fade-up">
          <div className="annuity-nav-tabs">
            {[
              { id: "about", label: "About Club" },
              { id: "services", label: "What We Offer" },
              { id: "events", label: "Events & Activities" },
              { id: "team", label: "Our Team" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`annuity-nav-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>


        {/* About Section */}
        {activeTab === "about" && (
          <section
            id="about"
            className="annuity-content-section"
            data-aos="fade-up"
          >
            <div className="section-heading">
              <h1>About Annuity Club</h1>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="annuity-content-card">
                  <h2>Our Vision</h2>
                  <p>
                    Finance remains one of the most dynamic and impactful
                    sectors that influences every aspect of the global economy.
                    At Annuity Club, we bridge the gap between theoretical
                    knowledge and practical application.
                  </p>
                  <p>
                    With a view to establishing a peer-assisted learning
                    environment, we explore different domains of finance
                    including budgeting, stocks, trading, corporate finance, and
                    quantitative analysis.
                  </p>
                  <div className="annuity-highlight-box">
                    <h4>Our Mission</h4>
                    <p>
                      To create financially literate engineers who can make
                      informed decisions and excel in the finance sector.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="annuity-content-card">
                  <h2>Why Join Us?</h2>
                  <p>
                    Club members immerse themselves in a rich tapestry of
                    opportunities to engage with fellow students, esteemed
                    alumni, and seasoned finance professionals.
                  </p>
                  <p>
                    From corporate finance fundamentals to stock market
                    dynamics, members traverse a comprehensive landscape of
                    financial knowledge through workshops, competitions, and
                    real-world projects.
                  </p>
                  <div className="annuity-image-container">
                    <Image
                      src={AnnuityClubImg}
                      className="annuity-main-image"
                      alt="Annuity Club Activities"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="annuity-achievements-section">
              <h2>Our Achievements</h2>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="achievement-item"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="achievement-icon"></div>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        {activeTab === "services" && (
          <section className="annuity-content-section" data-aos="fade-up">
            <div className="section-heading">
              <h1>What We Offer</h1>
            </div>

            <div className="annuity-services-grid">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="annuity-service-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  <div className="service-header">
                    <div className="service-icon"></div>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                  <div className="service-features">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="annuity-cta-section">
              <h2>Ready to Start Your Finance Journey?</h2>
              <p>
                Join our community of aspiring finance professionals and start
                building your expertise today.
              </p>
              <div className="cta-buttons">
                <a
                  href="mailto:annuity@iitgn.ac.in"
                  className="btn annuity-btn-primary"
                >
                  Join Now
                </a>
                <a
                  href="https://www.linkedin.com/company/annuity-finance-club-iit-gandhinagar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn annuity-btn-secondary"
                >
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Events Section */}
        {activeTab === "events" && (
          <section className="annuity-content-section" data-aos="fade-up">
            <div className="section-heading">
              <h1>Events & Activities</h1>
            </div>

            <div className="annuity-events-grid">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`annuity-event-card ${event.status}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="event-header">
                    <h3>{event.title}</h3>
                    <span className={`event-status ${event.status}`}>
                      {event.status === "upcoming"
                        ? "Upcoming"
                        : event.status === "ongoing"
                          ? "Ongoing"
                          : "Completed"}
                    </span>
                  </div>
                  <div className="event-details">
                    <span className="event-date">{event.date}</span>
                    <span className="event-type">{event.type}</span>
                  </div>
                  <p>{event.description}</p>
                </div>
              ))}
            </div>

            <div className="upcoming-workshops">
              <h2>Regular Activities</h2>
              <div className="workshops-grid">
                <div className="workshop-item" data-aos="fade-right">
                  <h4>Weekly Trading Sessions</h4>
                  <p>
                    Live market analysis and trading discussions every Friday
                  </p>
                </div>
                <div className="workshop-item" data-aos="fade-up">
                  <h4>Finance Case Studies</h4>
                  <p>
                    Real-world corporate finance case analysis and solutions
                  </p>
                </div>
                <div className="workshop-item" data-aos="fade-left">
                  <h4>Investment Challenges</h4>
                  <p>
                    Monthly portfolio management and investment competitions
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Team Section */}
        {activeTab === "team" && (
          <section className="annuity-content-section" data-aos="fade-up">
            <div className="section-heading">
              <h1>Meet Our Team</h1>
            </div>

            <div className="annuity-team-grid">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="annuity-team-card"
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <div className="team-image-container">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="team-member-image"
                    />
                    <div className="team-overlay">
                      <div className="team-social">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href={`mailto:${member.email}`}>
                          <i className="fas fa-envelope"></i>
                        </a>
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-github"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <p className="team-position">{member.position}</p>
                    <p className="team-bio">{member.bio}</p>
                    <div className="team-contact">
                      <span>{member.contact}</span>
                      <span>{member.email}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="join-team-section">
              <h2>Want to Join Our Team?</h2>
              <p>
                We&apos;re always looking for passionate individuals to help grow our
                finance community.
              </p>
              <a
                href="mailto:annuity@iitgn.ac.in?subject=Team Application"
                className="btn annuity-btn-primary"
              >
                Apply to Join
              </a>
            </div>
          </section>
        )}

        {/* Connect Section */}
        <section className="annuity-connect-section" data-aos="fade-up">
          <div className="annuity-connect-card">
            <h2>Connect With Annuity</h2>
            <p>
              Join our growing community of finance enthusiasts and stay updated
              with the latest market trends, workshops, and opportunities.
            </p>

            <div className="annuity-social-links">
              <a
                href="https://www.instagram.com/annuity_iitgn"
                target="_blank"
                rel="noopener noreferrer"
                className="annuity-social-link instagram"
              >
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/annuity-finance-club-iit-gandhinagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="annuity-social-link linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:annuity@iitgn.ac.in"
                className="annuity-social-link email"
              >
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </a>
            </div>

            <div className="annuity-newsletter">
              <h3>Stay Updated</h3>
              <p>
                Get notified about upcoming workshops, market insights, and
                exclusive opportunities.
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AnnuityClub;
