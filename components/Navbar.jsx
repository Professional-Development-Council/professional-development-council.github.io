import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Logo from "../public/assets/images/PDC IITGN.jpg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleClick = () => {
    setClick(!click);
  };

  const closeMenu = () => {
    setClick(false);
  };

  const handleSignIn = () => {
    signIn("google", { callbackUrl: router.asPath });
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
    closeMenu();
  };

  const handleProtectedNavigation = (e, href) => {
    e.preventDefault();
    if (!session) {
      signIn("google", { callbackUrl: href });
    } else {
      router.push(href);
      closeMenu();
    }
  };

  const isActivePage = (path) => {
    if (path === "/" && router.pathname === "/") return true;
    if (path !== "/" && router.pathname.startsWith(path)) return true;
    return false;
  };

  const isActiveDropdown = (paths) => {
    return paths.some((path) => router.pathname.startsWith(path));
  };

  return (
    <div className="nav_container">
      <nav className="main_navbar">
        <div className="nav-logo">
          <Link href="/" className="logo-image" onClick={closeMenu}>
            <Image
              src={Logo}
              alt="PDC IIT Gandhinagar Logo"
              className="nav-logo-img"
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>

        <div
          className="nav-icon"
          onClick={handleClick}
          aria-label="Toggle navigation menu"
        >
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <div className={click ? "nav-menu nav-menu-active" : "nav-menu"}>
          <div className="nav-item">
            <Link
              href="/"
              className={`nav-links ${isActivePage("/") ? "nav-links-active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </div>

          <div className="nav-item">
            <Link
              href="/about"
              className={`nav-links ${isActivePage("/about") ? "nav-links-active" : ""}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </div>

          <div className="nav-item nav-dropdown">
            <button
              className={`nav-dropbtn ${isActiveDropdown(["/team"]) ? "nav-dropbtn-active" : ""}`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Team
            </button>
            <div className="dropdown-content" role="menu">
              <Link
                href="/team"
                className={`drop-nav-links ${isActivePage("/team") && !router.pathname.includes("past") ? "drop-nav-links-active" : ""}`}
                onClick={closeMenu}
                role="menuitem"
              >
                Current Team
              </Link>
              <Link
                href="/team/past-team"
                className={`drop-nav-links ${router.pathname.includes("past-team") ? "drop-nav-links-active" : ""}`}
                onClick={closeMenu}
                role="menuitem"
              >
                Past Secretaries
              </Link>
            </div>
          </div>

          <div className="nav-item">
            <Link
              href="/events"
              className={`nav-links ${isActivePage("/events") ? "nav-links-active" : ""}`}
              onClick={closeMenu}
            >
              Events
            </Link>
          </div>

          <div className="nav-item nav-dropdown">
            <button
              className={`nav-dropbtn ${isActiveDropdown(["/material"]) ? "nav-dropbtn-active" : ""}`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Material
            </button>
            <div className="dropdown-content" role="menu">
              {session ? (
                <Link
                  href="/material/prep-mat"
                  className={`drop-nav-links ${router.pathname.includes("prep-mat") ? "drop-nav-links-active" : ""}`}
                  onClick={closeMenu}
                  role="menuitem"
                >
                  📚 PrepMat
                </Link>
              ) : (
                <button
                  className="drop-nav-links"
                  onClick={(e) =>
                    handleProtectedNavigation(e, "/material/prep-mat")
                  }
                  role="menuitem"
                  style={{
                    border: "none",
                    background: "transparent",
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  📚 PrepMat (Login Required)
                </button>
              )}
              {session ? (
                <Link
                  href="/material/placement-talks"
                  className={`drop-nav-links ${router.pathname.includes("placement-talks") ? "drop-nav-links-active" : ""}`}
                  onClick={closeMenu}
                  role="menuitem"
                >
                  🎥 Placement Talks
                </Link>
              ) : (
                <button
                  className="drop-nav-links"
                  onClick={(e) =>
                    handleProtectedNavigation(e, "/material/placement-talks")
                  }
                  role="menuitem"
                  style={{
                    border: "none",
                    background: "transparent",
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  🎥 Placement Talks (Login Required)
                </button>
              )}
              <a
                target="_blank"
                href="https://docs.google.com/spreadsheets/d/1-iZFun1vFNNxXMxtIJM4Sl53TIJQUsXHe6U4nGDqIx0/edit#gid=0"
                className="drop-nav-links"
                onClick={closeMenu}
                rel="noopener noreferrer"
                role="menuitem"
              >
                🔗 External Opportunities
              </a>
            </div>
          </div>

          <div className="nav-item nav-dropdown">
            <button
              className={`nav-dropbtn ${isActiveDropdown(["/annuity", "/tedxiitgn"]) ? "nav-dropbtn-active" : ""}`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Divisions
            </button>
            <div className="dropdown-content" role="menu">
              <Link
                href="/annuity"
                className={`drop-nav-links ${isActivePage("/annuity") ? "drop-nav-links-active" : ""}`}
                onClick={closeMenu}
                role="menuitem"
              >
                💰 Annuity Club
              </Link>
              <Link
                href="/tedxiitgn"
                className={`drop-nav-links ${isActivePage("/tedxiitgn") ? "drop-nav-links-active" : ""}`}
                onClick={closeMenu}
                role="menuitem"
              >
                🎤 TEDxIITGandhinagar
              </Link>
            </div>
          </div>

          <div className="nav-item">
            <Link
              href="/contact"
              className={`nav-links ${isActivePage("/contact") ? "nav-links-active" : ""}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>

          <div className="nav-item nav-dropdown">
            <button
              className={`nav-dropbtn ${router.pathname.includes("resume") ? "nav-dropbtn-active" : ""}`}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Resume Corner
            </button>
            <div className="dropdown-content" role="menu">
              <Link
                href="/resume_review"
                className={`drop-nav-links ${router.pathname.includes("resume_review") ? "drop-nav-links-active" : ""}`}
                onClick={closeMenu}
                role="menuitem"
              >
                📝 Resume Review
              </Link>
              <a
                target="_blank"
                href="https://kishan-ved.github.io/resume_generator/resumegenerator.html"
                className="drop-nav-links"
                onClick={closeMenu}
                rel="noopener noreferrer"
                role="menuitem"
              >
                🔧 Resume Builder
              </a>
            </div>
          </div>

          <div className="nav-item nav-auth-item">
            {session?.user ? (
              <div className="profile-section">
                <div className="profile-img">
                  <Image
                    src={session.user.image}
                    width={40}
                    height={40}
                    className="profile-avatar"
                    alt={`${session.user.name} profile picture`}
                  />
                  <div className="profile-data">
                    <div className="profile-info">
                      <p>
                        <strong>👤 {session.user.name}</strong>
                      </p>
                      <p>📧 {session.user.email}</p>
                    </div>
                    <button
                      className="login-btn logout-btn"
                      onClick={handleSignOut}
                    >
                      🚪 Logout
                    </button>
                  </div>
                </div>
                <button className="phone_logout_btn" onClick={handleSignOut}>
                  🚪 Logout
                </button>
              </div>
            ) : (
              <button className="login-btn" onClick={handleSignIn}>
                {status === "loading" ? "⏳ Loading..." : "🔐 Sign In"}
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
