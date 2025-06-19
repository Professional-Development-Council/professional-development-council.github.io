import React, { useState } from 'react';
import Image from 'next/image';
import { EventsData } from '../data/EventsData';
import Modal from './Model';

const ImageCarousel = () => {
  const initialDisplayCount = 3;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const announcements = EventsData.filter(event => event.announce === "true");

  const loadMoreAnnouncements = () => {
    setDisplayCount(displayCount + 3);
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsModalOpen(false);
  };

  return (
    <div className="image-carousel-container">
      <div className="card-container">
        <div className="row">
          {announcements.slice(0, displayCount).map((item, index) => (
            <div className='col-md-4' key={index}>
              <div className="card-item">
                <div className="card-item-img">
                  <a onClick={() => openModal(item)}>
                    <Image className='Image-general' src={item.image || "/assets/images/default.jpg"} alt={item.EventName} width={700} height={700} />
                  </a>
                </div>
                <div className="card-item-content">
                  <a onClick={() => openModal(item)}>
                    <p>{item.EventName}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {displayCount < announcements.length &&
        <div className="announcements-btn">
          <button className="read-button" onClick={loadMoreAnnouncements}>Load More</button>
        </div>
      }

      <Modal event={selectedEvent} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ImageCarousel;
