import React, { useState, useEffect, useCallback, useMemo } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";

const PrepMat = () => {
  const [data, setData] = useState([]);
  const [yearFilter, setYearFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(12);
  const { data: session } = useSession();
  const [completedItems, setCompletedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwVZ7kHNm81gFN6M1XBu6oteGUxJZNpYj8_T0Z0R9E7vUKV6NOA7y6T4a_8JYDhcSeq/exec";

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(scriptURL);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, []);

  const fetchUserData = useCallback(async () => {
    if (session?.user) {
      try {
        const response = await fetch(
          `https://ap-south-1.aws.data.mongodb-api.com/app/application-0-gqhlryg/endpoint/getData?email=${session.user.email}`,
          {
            headers: {
              Authorization: `Bearer ${session.user.accessToken}`,
            },
          },
        );

        const userData = await response.json();
        setCompletedItems(userData.completedPDFList || []);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  }, [session]);

  useEffect(() => {
    const synchronizeData = async () => {
      await fetchData();
      await fetchUserData();
    };

    synchronizeData();
  }, [fetchData, fetchUserData, session]);

  useEffect(() => {
    if (session?.user?.email) {
      const storedCompletedItems = localStorage.getItem(
        `${session.user.email}-completedItems`,
      );
      if (storedCompletedItems) {
        setCompletedItems(JSON.parse(storedCompletedItems));
      }
    }
  }, [session]);

  const postCompletedItem = async (email, completedPDFList) => {
    try {
      await fetch(
        "https://ap-south-1.aws.data.mongodb-api.com/app/application-0-gqhlryg/endpoint/updateData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.user.accessToken}`,
          },
          body: JSON.stringify({
            email,
            completedPDFCount: completedPDFList.length,
            completedPDFList,
          }),
        },
      );
    } catch (error) {
      console.error("Error posting completed item:", error);
    }
  };

  const handleCheckboxChange = (itemId) => {
    setCompletedItems((currentItems) => {
      const updatedCompletedItems = currentItems.includes(itemId)
        ? currentItems.filter((item) => item !== itemId)
        : [...currentItems, itemId];
      if (session?.user?.email) {
        localStorage.setItem(
          `${session.user.email}-completedItems`,
          JSON.stringify(updatedCompletedItems),
        );
        postCompletedItem(session.user.email, updatedCompletedItems);
      }
      return updatedCompletedItems;
    });
  };

  const uniqueYears = useMemo(() => {
    return [...new Set(data.map((article) => article.Year))].sort(
      (a, b) => b - a,
    );
  }, [data]);

  const filteredArticles = useMemo(() => {
    return data.filter(
      (article) =>
        (yearFilter === "All" || article.Year === yearFilter) &&
        article.CompanyName.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [data, yearFilter, searchQuery]);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = useMemo(() => {
    return filteredArticles.slice(indexOfFirstData, indexOfLastData);
  }, [filteredArticles, indexOfFirstData, indexOfLastData]);

  const totalPages = Math.ceil(filteredArticles.length / dataPerPage);
  const progressPercentage = (completedItems.length / 264) * 100;

  const paginate = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  if (loading) {
    return (
      <div className="main-container">
        <motion.div
          className="prepmat-loading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loading-spinner"></div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Loading your preparation materials...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <Head>
        <title>PrepMat - Professional Preparation Platform</title>
        <meta
          name="description"
          content="Advanced preparation material for placements and internships with progress tracking"
        />
        <meta
          name="keywords"
          content="placements, internships, preparation, material, coding, interviews"
        />
      </Head>

      <motion.section
        className="prepmat-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content-wrapper">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="hero-title">
              PrepMat
              <span className="hero-subtitle-badge">Professional</span>
            </h1>
            <p className="hero-description">
              Master your placement and internship preparation with our
              comprehensive, company-specific materials designed for success.
            </p>
          </motion.div>
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {[
              { value: data.length, label: "Companies" },
              { value: uniqueYears.length, label: "Years Covered" },
              { value: completedItems.length, label: "Completed" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="stat-number"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  {stat.value}
                </motion.span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <div className="page-container">
        <motion.div
          className="progress-dashboard"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="dashboard-header-section">
            <div className="user-welcome">
              <h2>Welcome back, {session?.user?.name || "Student"}!</h2>
              <p>Continue your preparation journey</p>
            </div>
            <div className="achievement-badge">
              <span className="badge-icon">🎯</span>
              <div className="badge-content">
                <span className="badge-title">Progress</span>
                <span className="badge-subtitle">
                  {Math.round(progressPercentage)}% Complete
                </span>
              </div>
            </div>
          </div>

          <div className="progress-visualization">
            <div className="progress-header">
              <h3>Your Learning Progress</h3>
              <span className="progress-text">
                {completedItems.length} of 264 modules completed
              </span>
            </div>
            <div className="progress-bar-advanced">
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="progress-glow"></div>
                </div>
              </div>
              <div className="progress-milestones">
                {[25, 50, 75, 100].map((milestone) => (
                  <div
                    key={milestone}
                    className={`milestone ${progressPercentage >= milestone ? "completed" : ""}`}
                    style={{ left: `${milestone}%` }}
                  >
                    <span className="milestone-label">{milestone}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="filters-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="filters-header">
            <h3>Find Your Materials</h3>
            <div className="view-toggle">
              <button
                className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />
                </svg>
              </button>
              <button
                className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
                aria-label="List view"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="filters-controls">
            <div className="search-section">
              <div className="search-input-wrapper">
                <svg
                  className="search-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search companies, technologies, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input-advanced"
                />
                {searchQuery && (
                  <button
                    className="search-clear"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6 6l12 12m0-12L6 18" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <div className="filter-dropdowns">
              <div className="filter-group">
                <label htmlFor="year-filter">Year</label>
                <select
                  id="year-filter"
                  className="filter-select"
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                >
                  <option value="All">All Years</option>
                  {uniqueYears.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="results-summary">
              <span className="results-count">
                {filteredArticles.length}{" "}
                {filteredArticles.length === 1 ? "company" : "companies"} found
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`materials-container ${viewMode}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {currentData.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📚</div>
              <h3>No materials found</h3>
              <p>Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            <div className={`materials-${viewMode}`}>
              <AnimatePresence>
                {currentData.map((item, index) => (
                  <motion.div
                    className="material-card"
                    key={item.Id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                    layout
                  >
                    <div className="card-header">
                      <div className="company-info">
                        <h4 className="company-name">{item.CompanyName}</h4>
                        <div className="card-meta">
                          <span className="year-badge">{item.Year}</span>
                          <span className="separator">•</span>
                          <span className="material-count">
                            {
                              [
                                item.MaterialForPlacement,
                                item.MaterialForInternship,
                              ].filter(Boolean).length
                            }{" "}
                            materials
                          </span>
                        </div>
                      </div>
                      <div className="completion-indicator">
                        <input
                          type="checkbox"
                          id={`complete-${item.Id}`}
                          checked={completedItems.includes(item.Id)}
                          onChange={() => handleCheckboxChange(item.Id)}
                          className="completion-checkbox"
                        />
                        <label
                          htmlFor={`complete-${item.Id}`}
                          className="completion-label"
                        >
                          <svg
                            className="check-icon"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M20 6L9 17l-5-5"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </label>
                      </div>
                    </div>

                    <div className="card-actions">
                      {item.MaterialForPlacement && (
                        <a
                          href={item.MaterialForPlacement}
                          target="_blank"
                          rel="noreferrer"
                          className="action-btn primary"
                        >
                          <svg
                            className="btn-icon"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Placement Material
                        </a>
                      )}
                      {item.MaterialForInternship && (
                        <a
                          href={item.MaterialForInternship}
                          target="_blank"
                          rel="noreferrer"
                          className="action-btn secondary"
                        >
                          <svg
                            className="btn-icon"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Internship Material
                        </a>
                      )}
                    </div>

                    {completedItems.includes(item.Id) && (
                      <div className="completion-badge">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Completed
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>

        {totalPages > 1 && (
          <motion.div
            className="pagination-advanced"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="pagination-info">
              Showing {indexOfFirstData + 1}-
              {Math.min(indexOfLastData, filteredArticles.length)} of{" "}
              {filteredArticles.length} companies
            </div>
            <div className="pagination-controls">
              <button
                className="pagination-btn nav-btn"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Previous
              </button>

              <div className="page-numbers">
                {getVisiblePages().map((page, index) => (
                  <React.Fragment key={index}>
                    {page === "..." ? (
                      <span className="pagination-dots">...</span>
                    ) : (
                      <button
                        className={`pagination-btn page-btn ${currentPage === page ? "active" : ""}`}
                        onClick={() => paginate(page)}
                      >
                        {page}
                      </button>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <button
                className="pagination-btn nav-btn"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                Next
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PrepMat;
