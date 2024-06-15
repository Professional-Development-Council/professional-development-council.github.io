import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Events = () => {
  const [eventsData, setEventsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = eventsData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(eventsData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

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
          {currentItems.length ?
            currentItems.map((item, index) => (
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

        <div className="pagination-section">
          {Array.from({ length: totalPages }, (_, index) => (
            <div key={index} className='pagination-btn-container'>
              <button
                className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
