import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Events = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    AOS.init();

    // Fetch and parse the CSV data
    Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vRiRIDiOZc5K7mSTzbNLktdJ49kW1GJfaEyvlsOLiBCFgsvoZ-1U-ud4XDaJhPnIVd3DoeA16IB1E_Y/pub?gid=0&single=true&output=csv', {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: (results) => { 
        setEventsData(results.data);
      }
    });
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
          {eventsData.length ?
            eventsData.map((item, index) => (
              <div className="timeline-item" key={index} data-aos="fade-up">
                <div className="timeline-content">
                  <h3>{item.EventName}</h3>
                  <p>{item.date}</p>
                  <p>{item.description}</p>
                  <Link href={`/events/${encodeURIComponent(item.EventName)}`} passHref>
                    <button>Read more</button>
                  </Link>
                </div>
                {/* <div className="timeline-image">
                  <Image src={item.image} alt='item' className="Image-general" width={100} height={100}/>
                </div> */}
              </div>
            ))
          : <p className='Loading-tag'>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export default Events;
