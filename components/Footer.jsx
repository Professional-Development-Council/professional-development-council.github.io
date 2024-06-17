import React from 'react'

import logo from "../public/assets/images/IITGN Logo-Trans.png"
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 ">

          </div>
          <div className="footer-content pt-5 pb-1">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Image src={logo} className="img-fluid Image-general" alt="logo" />
                  </div>
                  <div className="footer-text">
                    <p>The Professional Development Council (PDC) is dedicated to providing the student body with a structured framework for their overall professional development. We aim to spread awareness about the importance of professional development and create avenues for students to enhance their skills and knowledge in various areas. </p>
                  </div>

                </div>
              </div>
              <div className="col-xl-2 col-lg-4 mb-50">

              </div>
              <div className="col-xl-6 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><Link href="/" >Home</Link></li>
                    <li><Link href="/about" >About Us</Link></li>
                    <li><Link href="/events" >Events</Link></li>
                    {/* <li><Link href="/material/placement-talks" >Placement Talks Videos</Link></li> */}
                    {/* <li><Link href="/blogs" >Blogs</Link></li> */}
                    <li><Link href="/annuity" >Annuity</Link></li>
                    <li><Link href="/tedxiitgn" >TEDxIITGandhinagar</Link></li>
                    <li><Link href="/team" >Our Team</Link></li>
                    <li><Link href="/contact" >Contact us</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 ">
                <div className="footer-social-icon">
                  <div className="footer-widget-heading">
                    <h3>Follow us</h3>
                  </div>
                  <ul className="social_icon">
                    <li><a href="https://www.facebook.com/pdcIITGN/" target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook" style={{fontSize: '22px'}}></i></a>
                    </li>
                    <li><a href="https://www.instagram.com/pdc_iitgn?igsh=bmVvcTkzbjdtazZn" target="_blank" rel="noreferrer">
                      <i className="fab fa-instagram" style={{fontSize: '22px'}}></i></a>
                    </li>
                    <li><a href="https://www.linkedin.com/company/professional-development-council-iit-gandhinagar/" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin" style={{fontSize: '22px'}}></i></a>
                    </li>
                    {/* <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                      <i className="fab fa-youtube" style={{fontSize: '22px'}}></i></a>
                    </li> */}
                    <li><a href="mailto:pdc.secretary@iitgn.ac.in" target="_blank" rel="noreferrer">
                      <i className="fas fa-envelope" style={{fontSize: '22px'}}></i></a>
                    </li>
                  </ul>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright &copy; 2023, All Right Reserved <Link href="/" >Professional Development Council</Link></p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li><Link href="/" >Home</Link></li>
                    <li><Link href="/" >Terms</Link></li>
                    <li><Link href="/" >Privacy</Link></li>
                    <li><Link href="/" >Policy</Link></li>
                    <li><Link href="/contact" >Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer