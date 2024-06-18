import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import Image from "next/image";
import TEDx from "../public/assets/images/tedxiitgn.jpg"


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
          <h2>TEDxIITGandhinagar</h2>
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
                <p>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world&apos;s leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman. The annual TED Conference takes place each spring in Vancouver, British Columbia.</p>
              </div>
              <div className="para-contaent">
                <p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
                </p>
                <div>
                  <a href="https://www.tedxiitgandhinagar.in/" target="_blank" rel="noreferrer" className="tedxiitgn-website-btn">
                    Visit Our <span style={{color: "red", fontWeight: "600"}}>TEDx</span>IITGandhinagar Website
                  </a>
                </div>
              </div>


            </div>
            <div className="col-md-6">
              <Image src={TEDx} className="Image-general" alt="Club Logo" />
            </div>
          </div>

        </div>
        <div className="footer-social-icon">
          <div className="footer-widget-heading">
            <h3 style={{ color: 'black' }}>Follow us</h3>
          </div>
          <ul className="social_icon">
            <li><a href="https://www.facebook.com/TEDxIITGn" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook" style={{ fontSize: '22px' }}></i></a>
            </li>
            <li><a href="https://www.instagram.com/tedx.iitgandhinagar/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram" style={{ fontSize: '22px' }}></i></a>
            </li>
            <li><a href="https://www.linkedin.com/company/tedxiitgandhinagar/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin" style={{ fontSize: '22px' }}></i></a>
            </li>
            <li><a href="https://www.youtube.com/@tedxiitgandhinagar" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube" style={{ fontSize: '22px' }}></i></a>
            </li>
            <li><a href="mailto:tedxiitgandhinagar@iitgn.ac.in" target="_blank" rel="noreferrer">
              <i className="fas fa-envelope" style={{ fontSize: '22px' }}></i></a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Clubs