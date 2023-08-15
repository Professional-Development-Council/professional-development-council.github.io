import Head from 'next/head'
import CarrerIMG from "../public/assets/images/carrer.jpg"
import AOS from 'aos';
import { useEffect } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className='main-container'>
      <Head>
        <title>PDC | IIT Gandhinagar</title>
        <meta name="description" content="Professional Development Council" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

      </main>
      <header id='head' >
        <div className="banner-content">
          <h1>Professional Development Council</h1>
        </div>
      </header>



      <div className="page-container">
        <div className="page-section" data-aos="fade-up">
          <div className="about-content">
            <div className="section-heading">
              <h1>Professional Development Council</h1>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p>


                      Professional Development Council (PDC) is a dedicated division within the student council that strives to provide the student body with a structured framework for overall professional development. PDC dedicates its work to helping college students develop the skills and knowledge they need to succeed in their professional careers. The council is responsible for spreading awareness about developing professional skills and providing opportunities to enhance and test their skills. Apart from developing professional skills, PDC also acts as a medium of direct communication between <a href="https://cds.iitgn.ac.in/" target="_blank" rel="noreferrer"> <strong> Career Development Services (CDS)</strong></a>, the institute&apos;s placement cell, and the student body by facilitating feedback from companies to students and various concerns and grievances of the student body. PDC also aims to raise awareness among the student body and assist them in achieving career independence. Through informational sessions featuring alums and other professionals, workshops on resume building and interview preparation, and mock tests, PDC provides the support and resources necessary for students to achieve their dream jobs.
                      Join us in our mission to promote professional development and achieve success in your chosen career path.

                </p>



              </div>

              <div className="col-md-4">
                <Image className='Image-general' src={CarrerIMG} alt="carrer" />

              </div>
            </div>




          </div>
        </div>


        <div className="announcements" data-aos="fade-up">
          <div className="section-heading">
            <h1>Announcements <i className="fa fa-bullhorn" aria-hidden="true"></i></h1>
          </div>

          <ImageCarousel />
          <div className="announcements-btn">
            <Link href="/events"><button className="read-button">Read More</button></Link>
          </div>
        </div>
      </div>




    </div>
  )
}
