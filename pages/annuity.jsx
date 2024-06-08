import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import Image from "next/image";
import Annuity_club from "../public/assets/images/Annuity_club.jpeg"


const Clubs = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='main-container'>
      <Head>
        <title>Clubs</title>
        <meta name="description" content="Professional Development Council" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <header id="page-header">
        <div className="page-heading">
          <img src="./assets/images/annuity-logo.png" alt="Logo" style={{ width: '100px' }} />
          <h2>Annuity Club</h2>
        </div>
      </header>


      <div className="page-container">
        <div className="blog-content">
          <div className="row">
            <div className="col-md-6">
              <div className="section-heading">
                {/* <h1>{Club.ClubName}</h1> */}
              </div>

              <div className="para-contaent">
                <p>Finance remains one of the few non-core engineering fields that interest students a lot. However, due to the short number of courses available at IITGN and the caps that they have, a lot of people fail to explore this field in detail. The IIT Gandhinagar community has many finance enthusiasts, however, we lack a platform that would serve as a promoter of these interests and developing curiosity. With a view to establishing a peer-assisted learning environment for learning and exploring different domains of finance, including but not restricted to budgeting, stocks, trading, etc, Annuity serves as the Finance Club of IIT Gandhinagar.</p>
              </div>
              <div className="para-contaent">
                <p>Finance is one of the few sectors of the world that have an impact on every other sector. It is thus necessary to get students acquainted with at least a basic understanding of the subject. We believe we can achieve this through the structure of a club, which promotes peer-assisted learning and gaining a taste of the applications of finance in the real world by participating in events and workshops.
                </p>
              </div>


            </div>
            <div className="col-md-6" style={{ marginBottom: '2rem' }}>
              <Image src={Annuity_club} className="Image-general" alt="Club Logo" />
            </div>
          </div>
          <div className="para-contaent">
            <p>Club members will find themselves immersed in a rich tapestry of opportunities to engage with a diverse array of individuals, from fellow students and esteemed alumni to seasoned professionals within the finance sector. From delving into the fundamentals of corporate finance to unraveling the intricacies of stock market dynamics, members will traverse a comprehensive landscape of financial knowledge. Workshops and events dedicated to finance basics, such as understanding financial statements and valuation techniques, will serve as foundational pillars in their learning journey. Furthermore, the exploration of recent trends in the stock market and quant trading will provide members with a nuanced understanding of contemporary financial landscapes. As active participants in organizing and hosting finance-related activities, members will not only refine their leadership skills but will contribute to the dissemination of financial literacy within the IITGN community.
            </p>
          </div>
          <section id="team" className="team-area">
            <div className="row team-items" style={{justifyContent: "center"}}>
                  <div className="col-md-3 single-item" data-aos="fade-up">
                    <div className="item">
                      <div className="thumb">
                        <img className="team-image" src="./assets/images/Samyak_Gosalia.jpg" alt="Thumb" />
                        <div className="overlay">
                          <h4>Samyak Gosalia</h4>
                          <p>
                          </p>
                        </div>
                      </div>
                      <div className="info">
                        <span className="message">
                            <a href="https://www.linkedin.com/in/samyak-gosalia-a42a20255/" target="_blank"><i className="fab fa-linkedin" style={{ fontSize: "25px" }}></i></a>
                            <a href={`mailto:gosalia.samyak@iitgn.ac.in`} target="_blank"><i className="fas fa-envelope-open" style={{ fontWeight: "500" }}></i></a>
                            <a href="https://github.com/Samyak312" target="_blank"><i className="fab fa-github" style={{ fontSize: "25px" }}></i></a>
                        </span>
                        <h4>Samyak Gosalia</h4>
                        <span>Annuity Secretary</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 single-item" data-aos="fade-up">
                    <div className="item">
                      <div className="thumb">
                        <img className="team-image" src="./assets/images/Farhan_Obaid.jpg" alt="Thumb" />
                        <div className="overlay">
                          <h4>Farhan Obaid</h4>
                          <p>
                          </p>
                        </div>
                      </div>
                      <div className="info">
                        <span className="message">
                            <a href="https://www.linkedin.com/in/farhan-obaid-19b289262/" target="_blank"><i className="fab fa-linkedin" style={{ fontSize: "25px" }}></i></a>
                            <a href={`mailto:farhan.obaid@iitgn.ac.in`} target="_blank"><i className="fas fa-envelope-open" style={{ fontWeight: "500" }}></i></a>
                        </span>
                        <h4>Farhan Obaid</h4>
                        <span>Annuity Co-ordinator</span>
                      </div>
                    </div>
                  </div>
            </div>

          </section>
          <div className="footer-social-icon">
            <div className="footer-widget-heading">
              <h3 style={{ color: 'black' }}>Follow us</h3>
            </div>
            <ul className="social_icon">
              <li><a href="https://www.instagram.com/annuity_iitgn?igsh=dWx1N2E1b3l4aGVn" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram" style={{ fontSize: '22px' }}></i></a>
              </li>
              {/* <li><a href="https://www.linkedin.com/company/professional-development-council-iit-gandhinagar/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin" style={{ fontSize: '22px' }}></i></a>
              </li> */}
              <li><a href="mailto:annuity@iitgn.ac.in" target="_blank" rel="noreferrer">
                <i className="fas fa-envelope" style={{ fontSize: '22px' }}></i></a>
              </li>
            </ul>
          </div>

        </div>












      </div>
    </div>
  )
}

export default Clubs