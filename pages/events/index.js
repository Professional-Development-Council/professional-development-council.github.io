import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import Link from "next/link";
// import Image from "next/image"; // Uncomment if images are used
import { EventsData } from '../../data/EventsData'; // Assuming EventsData is imported correctly

const Events = () => {
  const [yearFilter, setYearFilter] = useState('2024-25'); // Default year is 2024-25
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    AOS.init();
  }, []);

  // Filter events based on the selected year
  const filteredEvents = EventsData.filter(event => event.year === yearFilter);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Generate a list of unique years from the data
  const uniqueYears = [...new Set(EventsData.map(event => event.year))];

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
        <div className="filter-container-item">
          Select Year:
          <select className='publication-filter' value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}>
            {uniqueYears.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="timeline-container">
          {currentItems.length ? 
            currentItems.map((item, index) => (
              <div className="timeline-item" key={index} data-aos="fade-up">
                <div className="timeline-content">
                  <h3>{item.EventName || 'Event Name Missing'}</h3>
                  <p>{item.date || 'Date Missing'}</p>
                  <p>{item.description || 'Description Missing'}</p>
                  {item.registration && (
                    <p><a href={item.registration} target="_blank" style={{color: "blue"}}> Registration Link</a> </p>
                  )}
                  <Link href={`/events/${encodeURIComponent(item.EventName)}`} passHref>
                    <button>Read more</button>
                  </Link>
                </div>
                {/* Uncomment the Image component if images are used */}
                {/* <div className="timeline-image">
                  <Image src={item.image || '/assets/images/default.jpg'} alt='item' className="Image-general" width={100} height={100}/>
                </div> */}
              </div>
            ))
          : <p className='Loading-tag'>No events found for the selected year.</p>}
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
