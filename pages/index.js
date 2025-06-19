import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageCarousel from "../components/ImageCarousel";
import CareerIMG from "../public/assets/images/carrer.jpg";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });

    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const features = [
    {
      icon: "🎯",
      title: "Career Guidance",
      description:
        "Get personalized career guidance from industry experts and alumni to help you make informed decisions about your professional future.",
    },
    {
      icon: "📚",
      title: "Preparation Materials",
      description:
        "Access curated study materials, interview questions, and company-specific resources to ace your placements and internships.",
    },
    {
      icon: "🤝",
      title: "Industry Connect",
      description:
        "Connect with leading companies and professionals through our extensive network and placement opportunities.",
    },
    {
      icon: "💼",
      title: "Resume Building",
      description:
        "Get expert help in building professional resumes that stand out to recruiters and hiring managers.",
    },
    {
      icon: "🎪",
      title: "Events & Workshops",
      description:
        "Participate in regular workshops, seminars, and skill development sessions conducted by industry professionals.",
    },
    {
      icon: "📈",
      title: "Skill Development",
      description:
        "Enhance your technical and soft skills through our comprehensive training programs and mentorship.",
    },
  ];

  const stats = [
    { number: "500+", label: "Students Placed" },
    { number: "150+", label: "Partner Companies" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Events Conducted" },
  ];

  return (
    <div className="main-container">
      <Head>
        <title>PDC IIT Gandhinagar | Professional Development Council</title>
        <meta
          name="description"
          content="Professional Development Council at IIT Gandhinagar - Your gateway to career success. Get industry-ready with our comprehensive placement preparation, career guidance, and skill development programs."
        />
        <meta
          name="keywords"
          content="PDC, IIT Gandhinagar, placements, career development, professional skills, internships, job preparation"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="PDC IIT Gandhinagar | Professional Development Council"
        />
        <meta
          property="og:description"
          content="Your gateway to career success at IIT Gandhinagar"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <header id="head">
        <div className={`hero-content ${isVisible ? "fade-in-up" : ""}`}>
          <h1>Professional Development Council</h1>
          <p className="subtitle">
            Your Gateway to Career Success at IIT Gandhinagar
          </p>
          <div className="hero-cta">
            <Link href="/material/prep-mat" className="btn btn-primary">
              Explore PrepMat
            </Link>
            <Link href="/about" className="btn btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </header>

      <div className="page-container">
        {/* About Section */}
        <section className="page-section" data-aos="fade-up">
          <div className="row">
            <div className="col-md-8">
              <div className="about-content">
                <div className="section-heading">
                  <h1>Empowering Your Professional Journey</h1>
                </div>
                <p>
                  The Professional Development Council (PDC) at IIT Gandhinagar
                  is your dedicated partner in achieving career excellence. We
                  provide comprehensive support through structured frameworks,
                  industry connections, and skill development programs designed
                  to make you job-ready.
                </p>
                <p>
                  From placement preparation to career guidance, we bridge the
                  gap between academic learning and industry requirements. Our
                  mission is to ensure every student at IIT Gandhinagar has the
                  tools, knowledge, and confidence to succeed in their chosen
                  career path.
                </p>
                <Link href="/about" className="btn btn-primary">
                  Discover Our Story
                </Link>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-left" data-aos-delay="200">
              <div className="about-content">
                <Image
                  className="Image-general"
                  src={CareerIMG}
                  alt="Career development and professional growth"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section" data-aos="fade-up">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-item"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="page-section" data-aos="fade-up">
          <div className="section-heading">
            <h1>What We Offer</h1>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="icon">
                  <span>{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="page-section" data-aos="fade-up">
          <div className="section-heading">
            <h1>Quick Access</h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div
                className="card-modern"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3>📋 Resume Review</h3>
                <p>
                  Get your resume reviewed by our experts and improve your
                  chances of getting shortlisted by top companies.
                </p>
                <Link href="/resume_review" className="btn btn-primary">
                  Submit Resume
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card-modern"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>📖 Preparation Material</h3>
                <p>
                  Access company-specific preparation materials, interview
                  experiences, and placement resources.
                </p>
                <Link href="/material/prep-mat" className="btn btn-primary">
                  Access PrepMat
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card-modern"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>🎥 Placement Talks</h3>
                <p>
                  Watch recorded sessions from successful alumni sharing their
                  placement experiences and tips.
                </p>
                <Link
                  href="/material/placement-talks"
                  className="btn btn-primary"
                >
                  Watch Videos
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="feature-section" data-aos="fade-up">
          <div className="row">
            <div className="col-md-8">
              <h2>Ready to kickstart your career journey?</h2>
              Join thousands of IIT Gandhinagar students who have successfully
              launched their careers with PDC&apos;s support. Get access to
              exclusive resources, mentorship, and opportunities. launched their
              careers with PDC&apos;s support. Get access to
              <p>
                Join thousands of IIT Gandhinagar students who have successfully
                launched their careers with PDC&apos;s support. Get access to
                exclusive resources, mentorship, and opportunities.
              </p>
            </div>
            <div className="col-md-4">
              <div
                style={{
                  display: "flex",
                  gap: "var(--space-md)",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/contact" className="btn btn-primary">
                  Get in Touch
                </Link>
                <Link href="/events" className="btn btn-secondary">
                  View Events
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Announcements */}
        <section className="announcements" data-aos="fade-up">
          <div className="section-heading">
            <h1>Latest Announcements</h1>
          </div>
          <ImageCarousel />
          <div className="text-center">
            <Link href="/events" className="btn btn-secondary">
              View All Events
            </Link>
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="page-section" data-aos="fade-up">
          <div className="section-heading">
            <h1>Our Divisions</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card-modern" data-aos="fade-right">
                <h3>💰 Annuity Club</h3>
                <p>
                  Our finance division focuses on financial literacy, investment
                  strategies, and career opportunities in the finance sector.
                  Join workshops, competitions, and networking events with
                  finance professionals.
                </p>
                <Link href="/annuity" className="btn btn-primary">
                  Explore Annuity
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-modern" data-aos="fade-left">
                <h3>🎤 TEDxIITGandhinagar</h3>
                <p>
                  Experience inspiring talks from thought leaders, innovators,
                  and change-makers. TEDxIITGandhinagar brings world-class
                  speakers to share ideas worth spreading with our community.
                </p>
                <Link href="/tedxiitgn" className="btn btn-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="page-section" data-aos="fade-up">
          <div className="card-modern text-center">
            <h2>Have Questions?</h2>
            <p>
              Our team is here to support you at every step of your professional
              journey. Reach out for guidance, feedback, or partnership
              opportunities.
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
                href="mailto:pdc.secretary@iitgn.ac.in"
                className="btn btn-primary"
              >
                📧 Email Us
              </a>
              <Link href="/contact" className="btn btn-secondary">
                📍 Contact Page
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
