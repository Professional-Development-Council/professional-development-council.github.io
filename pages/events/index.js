import React, { useEffect } from "react";
import { EventsData } from '../../data/EventsData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// import styles from '../../styles/events.css'; // Import the CSS file

const Events = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='main-container'>
      <Head>
        <title>Events</title>
        <meta name="description" content="" />
      </Head>
      <header id="page-header">
        <div className="page-heading">
          <h2>Events</h2>
        </div>
      </header>

      <div className="page-container">
        <div className="timeline-container">
          {EventsData.map((item, index) => (
            <div className="timeline-item" key={index} data-aos="fade-up">
              <div className="timeline-content">
                <h3>{item.EventName}</h3>
                <p>{item.date}</p>
                <p>{item.description}</p>
                <Link href={`/events/${item.EventName}`} passHref>
                  <button>Read more</button>
                </Link>
              </div>
              <div className="timeline-image">
                <Image src={item.image} alt='item' className="Image-general" width={100} height={100}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
