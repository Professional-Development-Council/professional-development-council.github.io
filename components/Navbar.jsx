import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import Logo from "../public/assets/images/PDC IITGN.jpg"
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState();


  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);



  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });



  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          const email = res.data.email;
          if (email.endsWith('@iitgn.ac.in')) {
            setProfile(res.data);
            localStorage.setItem('profile', JSON.stringify(res.data));
          } else {
            alert('Only users with "@iitgn.ac.in" email domain are allowed');
            googleLogout();
          }
        })
        .catch((err) => console.log(err));
    }
  }, [user]);


  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem('profile');
  };


  return (
    <div className='nav_container'>
      <div className="main_navbar">
          <div className="nav-logo">
            <Link href="/" className="logo-image">
              <Image src={Logo} alt="logo" className='Image-general' />
            </Link>
          </div>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>



        <div className={click ? "nav-menu nav-menu-active" : "nav-menu"}>
          <div className="nav-item">
            <Link href="/" className="nav-links" onClick={handleClick}  >
              Home
            </Link>
          </div>

          <div className="nav-item">
            <Link href="/about" className="nav-links" onClick={handleClick} >
              About
            </Link>
          </div>

          <div className="nav-item">
            <button className="nav-dropbtn">
              Team <i className="fa fa-angle-down" aria-hidden="true"></i>
            </button>

            <div className="dropdown-content">
              <Link href="/team" className="drop-nav-links" onClick={handleClick}>
                Current Team
              </Link>

              <Link href="/team/past-team" className="drop-nav-links" onClick={handleClick}>
                Past Secretaries
              </Link>

            </div>
          </div>

          <div className="nav-item">
            <Link
              href="/events" className="nav-links" onClick={handleClick} >
              Events
            </Link>
          </div>

          {/* <div className="nav-item">
            <Link
              href="/blogs" className="nav-links" onClick={handleClick} >
              Blogs
            </Link>
          </div> */}

          <div className="nav-item">
            <button className="nav-dropbtn">
              Material <i className="fa fa-angle-down" aria-hidden="true"></i>
            </button>

            <div className="dropdown-content">
              {profile ? (
                <Link href="/material/prep-mat" className="drop-nav-links" onClick={handleClick} >
                  PrepMat
                </Link>
              ) : (
                <Link href="/" className="drop-nav-links" onClick={() => login()} >
                  PrepMat
                </Link>
              )}

              {profile ? (
                <Link href="/material/placement-talks" className="drop-nav-links" onClick={handleClick}>
                  Placement Talks Videos
                </Link>
              ) : (
                <Link href="/" className="drop-nav-links" onClick={() => login()}>
                  Placement Talks Videos
                </Link>
              )}

            </div>
          </div>

          <div className="nav-item">
            <button className="nav-dropbtn">
              Divisions <i className="fa fa-angle-down" aria-hidden="true"></i>
            </button>

            <div className="dropdown-content">
              <Link href="/annuity" className="drop-nav-links">
                Annuity Club
              </Link>

              <Link href="/tedxiitgn" className="drop-nav-links">
                TEDxIITGandhinagar
              </Link>

            </div>
          </div>

          <div className="nav-item">
            <Link href="/contact" className="nav-links" onClick={handleClick} >
              Contact Us
            </Link>
          </div>

          <div className="nav-item">
            <Link href="/resume_review" className="nav-links" onClick={handleClick} >
              Resume Review
            </Link>
          </div>

          <div className="nav-item">
            {profile ? (
              <div className='profile-img'>
                <Image src={profile.picture} width={100} height={100} className='Image-general' alt="user profile" />
                <div className="profile-data">
                  <p>Name: {profile.name}</p>
                  <p>Email: {profile.email}</p>
                  <p><button className="login-btn" onClick={logOut} >Logout</button></p>
                </div>
                <button className="phone_logout_btn" onClick={logOut} >Logout</button>
              </div>
            ) : (
              <button className="login-btn" onClick={() => login()}>Login In </button>
            )}
          </div>

        </div>
      </div>
    </div>

  )
}

export default Navbar