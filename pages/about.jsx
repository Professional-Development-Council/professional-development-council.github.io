import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import IITGNImg from "../public/assets/images/banner.jpg";
import aboutImg from "../public/assets/images/about.jpeg";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from career guidance to skill development programs.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description:
        "We believe in the power of collaboration between students, alumni, and industry professionals.",
    },
    {
      icon: "🌟",
      title: "Innovation",
      description:
        "We continuously innovate our approaches to meet the evolving needs of the professional landscape.",
    },
    {
      icon: "💡",
      title: "Empowerment",
      description:
        "We empower students with knowledge, skills, and confidence to achieve their career goals.",
    },
  ];

  const achievements = [
    { number: "500+", label: "Students Mentored", icon: "👥" },
    { number: "95%", label: "Placement Success Rate", icon: "📈" },
    { number: "150+", label: "Industry Partners", icon: "🏢" },
    { number: "50+", label: "Events Organized", icon: "🎪" },
  ];

  const services = [
    {
      title: "Career Counseling",
      description:
        "One-on-one career guidance sessions with experienced counselors and industry professionals.",
      icon: "🧭",
    },
    {
      title: "Placement Preparation",
      description:
        "Comprehensive preparation materials and mock interviews for placements and internships.",
      icon: "📚",
    },
    {
      title: "Industry Connect",
      description:
        "Direct connections with leading companies through placement drives and networking events.",
      icon: "🔗",
    },
    {
      title: "Skill Development",
      description:
        "Workshops and training sessions on technical and soft skills required in the industry.",
      icon: "⚡",
    },
    {
      title: "Resume & Profile Building",
      description:
        "Professional assistance in creating compelling resumes and LinkedIn profiles.",
      icon: "📄",
    },
    {
      title: "Alumni Network",
      description:
        "Access to our extensive alumni network for mentorship and career opportunities.",
      icon: "🌐",
    },
  ];

  return (
    <div className="main-container">
      <Head>
        <title>About Us | PDC IIT Gandhinagar</title>
        <meta
          name="description"
          content="Learn about the Professional Development Council at IIT Gandhinagar. Our mission, vision, and commitment to empowering students for successful careers."
        />
        <meta
          name="keywords"
          content="PDC about, IIT Gandhinagar, career development, student council, professional skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id="page-header">
        <div className="page-heading">
          <h2>About PDC</h2>
          <h3>Empowering careers, building futures</h3>
        </div>
      </header>

      <div className="page-container">
        {/* Mission Statement */}
        <section className="page-section" data-aos="fade-up">
          <div className="card-modern text-center">
            <h1
              style={{
                color: "var(--primary-600)",
                marginBottom: "var(--space-lg)",
              }}
            >
              Our Mission
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                lineHeight: "1.7",
                color: "var(--gray-700)",
              }}
            >
              To provide IIT Gandhinagar students with comprehensive
              professional development resources, industry connections, and the
              skills necessary to excel in their chosen career paths.
            </p>
          </div>
        </section>

        {/* About IIT Gandhinagar */}
        <section className="page-section" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6">
              <div className="about-content">
                <h2>🏛️ About IIT Gandhinagar</h2>
                <p>
                  Established in 2008, IIT Gandhinagar stands as a beacon of
                  academic excellence and innovation. Located on the banks of
                  the Sabarmati River near Palaj, Gandhinagar, our institute
                  represents the perfect blend of cutting-edge education and
                  rich cultural heritage.
                </p>
                <p>
                  With proximity to Ahmedabad - one of India&apos;s most dynamic
                  cities - IIT Gandhinagar offers students unique opportunities
                  to engage with thriving industries, startup ecosystems, and a
                  vibrant professional community.
                </p>
                <Link
                  href="https://iitgn.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  🔗 Explore IIT Gandhinagar
                </Link>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="200">
              <div className="about-content">
                <Image
                  src={IITGNImg}
                  alt="IIT Gandhinagar Campus"
                  className="Image-general"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About PDC */}
        <section className="page-section" data-aos="fade-up">
          <div className="row">
            <div className="col-md-6" data-aos="fade-right">
              <div className="about-content">
                <Image
                  src={aboutImg}
                  className="Image-general"
                  alt="Professional Development Council activities"
                />
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left" data-aos-delay="200">
              <div className="about-content">
                <h2>🚀 About Professional Development Council</h2>
                <p>
                  Welcome to the Professional Development Council (PDC) at IIT
                  Gandhinagar! We are your dedicated partners in transforming
                  academic excellence into professional success.
                </p>
                <p>
                  Our comprehensive approach focuses on bridging the gap between
                  classroom learning and industry requirements. We work closely
                  with Career Development Services (CDS) to ensure students
                  receive the best placement opportunities and career guidance.
                </p>
                <p>
                  Through innovative programs, industry partnerships, and
                  personalized mentorship, we prepare students to not just find
                  jobs, but to build meaningful and successful careers in their
                  chosen fields.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  🤝 Connect With Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Achievement Stats */}
        <section className="stats-section" data-aos="fade-up">
          <div className="stats-grid">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="stat-item"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div
                  style={{ fontSize: "2rem", marginBottom: "var(--space-sm)" }}
                >
                  {achievement.icon}
                </div>
                <h3>{achievement.number}</h3>
                <p>{achievement.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="page-section" data-aos="fade-up">
          <div className="section-heading">
            <h1>Our Core Values</h1>
          </div>
          <div className="features-grid">
            {values.map((value, index) => (
              <div
                key={index}
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="icon">
                  <span>{value.icon}</span>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do */}
        <section className="page-section" data-aos="fade-up">
          <div className="section-heading">
            <h1>What We Do</h1>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-4">
                <div
                  className="card-modern"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      marginBottom: "var(--space-md)",
                      textAlign: "center",
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      color: "var(--primary-600)",
                      textAlign: "center",
                      marginBottom: "var(--space-md)",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ textAlign: "center", margin: 0 }}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Divisions */}
        <section className="page-section" data-aos="fade-up">
          <div className="section-heading">
            <h1>Our Divisions</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card-modern" data-aos="fade-right">
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "var(--space-lg)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "3rem",
                      marginBottom: "var(--space-md)",
                    }}
                  >
                    💰
                  </div>
                  <h3 style={{ color: "var(--primary-600)" }}>Annuity Club</h3>
                </div>
                <p>
                  Our finance division is dedicated to promoting financial
                  literacy and career opportunities in the finance sector.
                  Through workshops, guest lectures, and networking events, we
                  help students understand investment strategies, market
                  dynamics, and career paths in finance.
                </p>
                <ul style={{ marginBottom: "var(--space-lg)" }}>
                  <li>Financial literacy workshops</li>
                  <li>Investment strategy sessions</li>
                  <li>Industry expert interactions</li>
                  <li>Finance career guidance</li>
                </ul>
                <Link href="/annuity" className="btn btn-primary">
                  Explore Annuity Club
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-modern" data-aos="fade-left">
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "var(--space-lg)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "3rem",
                      marginBottom: "var(--space-md)",
                    }}
                  >
                    🎤
                  </div>
                  <h3 style={{ color: "var(--primary-600)" }}>
                    TEDxIITGandhinagar
                  </h3>
                </div>
                <p>
                  Our flagship event platform brings world-class speakers and
                  thought leaders to share ideas worth spreading.
                  TEDxIITGandhinagar showcases innovation, creativity, and
                  inspirational stories that motivate our community to think
                  differently and act boldly.
                </p>
                <ul style={{ marginBottom: "var(--space-lg)" }}>
                  <li>Inspiring speaker sessions</li>
                  <li>Innovation showcases</li>
                  <li>Community engagement</li>
                  <li>Leadership development</li>
                </ul>
                <Link href="/tedxiitgn" className="btn btn-primary">
                  Discover TEDxIITGandhinagar
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="page-section" data-aos="fade-up">
          <div className="feature-section">
            <div className="row">
              <div className="col-md-8">
                <h2>Our Holistic Approach</h2>
                <p>
                  At PDC, we believe that career success requires more than just
                  academic excellence. Our comprehensive approach encompasses:
                </p>
                <div className="approach-grid">
                  <div className="approach-item">
                    <h4>🎯 Personalized Guidance</h4>
                    <p>
                      Tailored career counseling based on individual strengths
                      and aspirations
                    </p>
                  </div>
                  <div className="approach-item">
                    <h4>📈 Skill Development</h4>
                    <p>
                      Continuous learning opportunities to stay relevant in
                      evolving industries
                    </p>
                  </div>
                  <div className="approach-item">
                    <h4>🌐 Industry Connect</h4>
                    <p>Direct access to leading companies and professionals</p>
                  </div>
                  <div className="approach-item">
                    <h4>💼 Practical Experience</h4>
                    <p>Internships, projects, and real-world exposure</p>
                  </div>
                  <div className="approach-item">
                    <h4>🤝 Mentorship</h4>
                    <p>Guidance from successful alumni and industry experts</p>
                  </div>
                  <div className="approach-item">
                    <h4>📊 Continuous Support</h4>
                    <p>Ongoing assistance throughout your career journey</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="approach-cta">
                  <Link
                    href="/material/prep-mat"
                    className="btn btn-primary approach-btn"
                  >
                    📚 Access Resources
                  </Link>
                  <Link
                    href="/events"
                    className="btn btn-secondary approach-btn"
                  >
                    🎪 View Events
                  </Link>
                  <Link href="/team" className="btn btn-secondary approach-btn">
                    👥 Meet Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="page-section" data-aos="fade-up">
          <div className="card-modern text-center">
            <h2>Ready to Transform Your Career?</h2>
            <p>
              Join the PDC community and take the first step towards a
              successful and fulfilling professional journey. Whether you&apos;re
              looking for placement preparation, career guidance, or skill
              development - we&apos;re here to support you.
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
              <Link href="/contact" className="btn btn-primary">
                🚀 Get Started
              </Link>
              <Link href="/material/prep-mat" className="btn btn-secondary">
                📖 Explore Resources
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
