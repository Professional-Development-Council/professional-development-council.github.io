import React,{useEffect} from "react";
import IITGNImg from "../public/assets/images/banner.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import Image from "next/image";
import aboutImg from "../public/assets/images/about.jpeg"
const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='main-container'>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Professional Development Council" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header id="page-header">
        <div className="page-heading">
          <h2>About</h2>
        </div>
      </header>

      <div className="page-container">
        <div className="row page-section">
          <div className="col-md-6" data-aos="fade-up">
            <div className="about-content">
              <h2>About IIT Gandhinagar</h2>
              <p>IIT Gandhinagar was established in 2008 and is located near Palaj, Gandhinagar, Gujarat on the bank of river Sabarmati. Gandhinagar is in proximity to Ahmedabad which is one of the oldest living cities in India, known both for a rich cultural past as well as state-of-the-art infrastructure, thriving industries, and many modern amenities.</p>
            </div>
            <a href='https://iitgn.ac.in/' target='_blank' rel="noreferrer"><button className='section-button'>KNOW MORE ABOUT IIT GANDHINAGAR</button></a>


          </div>
          <div className="col-md-6" data-aos="fade-up">
            <div className="about-content">
              <Image src={IITGNImg} alt='item' className="Image-general"/>
            </div>
          </div>
        </div>


        <div className="row page-section">
          <div className="col-md-6" data-aos="fade-up">
            <div className="about-content">
              <Image src={aboutImg} className="Image-general" alt='item'/>

            </div>


          </div>
          <div className="col-md-6" data-aos="fade-up">
            <div className="about-content">
              <h2>About PDC</h2>
              <p>Welcome to the Professional Development Cell (PDC) at IITGN! Our mission is to provide the student body with a structured framework for their overall professional development. We work towards spreading awareness about the importance of professional skill development and creating avenues for students to enhance their career prospects. Our principles are based on assessing the current performance of IITGN students in professional aspects and creating a platform for improvement. We also strive to promote a healthy culture of professional skill development among our students. Additionally, we act as a communication medium between the Career Development Services (CDS) and the student body, facilitating feedback from companies to students and addressing student concerns with the CDS. Join us in your journey towards a successful and fulfilling professional career!</p>

            </div>
          </div>
        </div>


      </div>



    </div>
  )
}

export default About