import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { EventsData } from "../../data/EventsData";

const Events = () => {
  const [yearFilter, setYearFilter] = useState("2024-25");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 12;

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Filter events based on the selected year and search query
  const filteredEvents = EventsData.filter((event) => {
    const matchesYear = event.year === yearFilter;
    const matchesSearch =
      event.EventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesSearch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleYearChange = (e) => {
    setYearFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Generate a list of unique years from the data
  const uniqueYears = [...new Set(EventsData.map((event) => event.year))]
    .sort()
    .reverse();

  // Get upcoming and recent events for highlights
  const upcomingEvents = EventsData.filter(
    (event) => event.announce === "true",
  ).slice(0, 3);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    // Handle various date formats
    if (dateString.includes("-")) {
      return dateString; // Already formatted
    }
    return dateString;
  };

  const getEventTypeIcon = (eventName, description) => {
    const name = eventName.toLowerCase();
    const desc = description.toLowerCase();

    if (name.includes("webinar") || name.includes("session")) return "🎥";
    if (name.includes("workshop") || name.includes("bootcamp")) return "🔧";
    if (name.includes("coding") || name.includes("contest")) return "💻";
    if (name.includes("talk") || name.includes("guidance")) return "🎤";
    if (name.includes("placement") || name.includes("internship")) return "💼";
    if (name.includes("finance") || name.includes("investment")) return "💰";
    if (name.includes("competition") || name.includes("challenge")) return "🏆";
    if (name.includes("orientation") || name.includes("introduction"))
      return "🎯";
    return "📅";
  };

  return (
    <div className="main-container">
      <Head>
        <title>Events | PDC IIT Gandhinagar</title>
        <meta
          name="description"
          content="Explore professional development events, workshops, webinars, and placement talks organized by PDC IIT Gandhinagar. Join us for career-focused learning opportunities."
        />
        <meta
          name="keywords"
          content="PDC events, IIT Gandhinagar workshops, career development, placement talks, professional skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header id="page-header">
        <div className="page-heading">
          <h2>Events & Workshops</h2>
          <h3>Professional development opportunities for your career growth</h3>
        </div>
      </header>

      <div className="page-container">
        {/* Event Stats */}
        <section className="page-section" data-aos="fade-up">
          <div className="stats-section">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>{EventsData.length}+</h3>
                <p>Events Organized</p>
              </div>
              <div className="stat-item">
                <h3>{uniqueYears.length}</h3>
                <p>Years of Service</p>
              </div>
              <div className="stat-item">
                <h3>5000+</h3>
                <p>Students Reached</p>
              </div>
              <div className="stat-item">
                <h3>100+</h3>
                <p>Industry Experts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured/Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <section className="page-section" data-aos="fade-up">
            <div className="section-heading">
              <h1>🌟 Featured Events</h1>
            </div>
            <div className="row">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="col-md-4">
                  <div
                    className="card-modern"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        marginBottom: "var(--space-md)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "2rem",
                          marginBottom: "var(--space-sm)",
                        }}
                      >
                        {getEventTypeIcon(event.EventName, event.description)}
                      </div>
                      <span
                        style={{
                          background: "var(--gradient-primary)",
                          color: "white",
                          padding: "var(--space-xs) var(--space-sm)",
                          borderRadius: "var(--radius-md)",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          textTransform: "uppercase",
                        }}
                      >
                        Featured
                      </span>
                    </div>
                    <h3
                      style={{
                        color: "var(--primary-600)",
                        textAlign: "center",
                      }}
                    >
                      {event.EventName}
                    </h3>
                    <p
                      style={{
                        color: "var(--gray-500)",
                        textAlign: "center",
                        fontSize: "0.875rem",
                        marginBottom: "var(--space-md)",
                      }}
                    >
                      📅 {formatDate(event.date)}
                    </p>
                    <p style={{ textAlign: "center", fontSize: "0.9rem" }}>
                      {event.description.substring(0, 120)}...
                    </p>
                    <div
                      style={{
                        textAlign: "center",
                        marginTop: "var(--space-lg)",
                      }}
                    >
                      <Link
                        href={`/events/${encodeURIComponent(event.EventName)}`}
                        className="btn btn-primary"
                        style={{ fontSize: "0.875rem" }}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Filters */}
        <section className="page-section" data-aos="fade-up">
          <div className="filter-container">
            <div className="filter-container-item">
              <label htmlFor="year-filter" style={{ fontWeight: "600" }}>
                📅 Academic Year:
              </label>
              <select
                id="year-filter"
                className="publication-filter"
                value={yearFilter}
                onChange={handleYearChange}
              >
                {uniqueYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="search-container">
              <label htmlFor="search-input" style={{ fontWeight: "600" }}>
                🔍 Search Events:
              </label>
              <input
                id="search-input"
                type="text"
                placeholder="Search by event name or description..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="page-section" data-aos="fade-up">
          <div className="section-heading">
            <h1>All Events - {yearFilter}</h1>
            <p style={{ color: "var(--gray-600)", fontSize: "1rem" }}>
              Showing {currentItems.length} of {filteredEvents.length} events
            </p>
          </div>

          <div className="timeline-container">
            {currentItems.length ? (
              currentItems.map((item, index) => (
                <div
                  className="timeline-item"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="row">
                    <div className="col-md-2">
                      <div
                        style={{
                          textAlign: "center",
                          padding: "var(--space-md)",
                          background: "var(--gradient-secondary)",
                          borderRadius: "var(--radius-lg)",
                          border: "2px solid var(--primary-200)",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "2rem",
                            marginBottom: "var(--space-sm)",
                          }}
                        >
                          {getEventTypeIcon(item.EventName, item.description)}
                        </div>
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "var(--primary-600)",
                            fontWeight: "600",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.year}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="timeline-content">
                        <h3 style={{ color: "var(--primary-600)" }}>
                          {item.EventName || "Event Name Missing"}
                        </h3>

                        <div
                          style={{
                            display: "flex",
                            gap: "var(--space-lg)",
                            marginBottom: "var(--space-md)",
                            flexWrap: "wrap",
                          }}
                        >
                          {item.date && (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "var(--space-xs)",
                              }}
                            >
                              <span>📅</span>
                              <span
                                style={{
                                  color: "var(--gray-600)",
                                  fontSize: "0.875rem",
                                }}
                              >
                                {formatDate(item.date)}
                              </span>
                            </div>
                          )}
                          {item.location && (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "var(--space-xs)",
                              }}
                            >
                              <span>📍</span>
                              <span
                                style={{
                                  color: "var(--gray-600)",
                                  fontSize: "0.875rem",
                                }}
                              >
                                {item.location}
                              </span>
                            </div>
                          )}
                        </div>

                        <p
                          style={{
                            lineHeight: "1.7",
                            marginBottom: "var(--space-lg)",
                          }}
                        >
                          {item.description || "Description Missing"}
                        </p>

                        <div
                          style={{
                            display: "flex",
                            gap: "var(--space-sm)",
                            flexWrap: "wrap",
                            alignItems: "center",
                          }}
                        >
                          <Link
                            href={`/events/${encodeURIComponent(item.EventName)}`}
                            passHref
                          >
                            <button
                              className="btn btn-primary"
                              style={{ fontSize: "0.875rem" }}
                            >
                              📖 Read More
                            </button>
                          </Link>

                          {item.registration && (
                            <a
                              href={item.registration}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-secondary"
                              style={{ fontSize: "0.875rem" }}
                            >
                              📝 Register
                            </a>
                          )}

                          {item.resources && (
                            <a
                              href={item.resources}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-secondary"
                              style={{ fontSize: "0.875rem" }}
                            >
                              📚 Resources
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="card-modern text-center">
                <div
                  style={{ fontSize: "3rem", marginBottom: "var(--space-md)" }}
                >
                  🔍
                </div>
                <h3>No events found</h3>
                <p>
                  No events match your current filters. Try adjusting the year
                  or search terms.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setYearFilter("2024-25");
                    setCurrentPage(1);
                  }}
                  className="btn btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination-section">
              {/* Previous button */}
              {currentPage > 1 && (
                <button
                  className="pagination-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  ← Previous
                </button>
              )}

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => {
                const pageNum = i + 1;
                // Show first page, last page, current page, and pages around current
                if (
                  pageNum === 1 ||
                  pageNum === totalPages ||
                  (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={i}
                      className={`pagination-btn ${currentPage === pageNum ? "active" : ""}`}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </button>
                  );
                } else if (
                  pageNum === currentPage - 2 ||
                  pageNum === currentPage + 2
                ) {
                  return (
                    <span key={i} style={{ padding: "0 var(--space-xs)" }}>
                      ...
                    </span>
                  );
                }
                return null;
              })}

              {/* Next button */}
              {currentPage < totalPages && (
                <button
                  className="pagination-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next →
                </button>
              )}
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="page-section" data-aos="fade-up">
          <div className="feature-section text-center">
            <h2>Stay Updated with PDC Events</h2>
            <p>
              Don&apos;t miss out on valuable professional development
              opportunities. Follow us on social media and join our community to
              get notified about upcoming events.
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
                📧 Subscribe to Updates
              </Link>
              <a
                href="https://www.linkedin.com/company/professional-development-council-iit-gandhinagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                💼 Follow on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
