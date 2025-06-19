import React from 'react';
import Image from 'next/image';

const Model = ({ event, isOpen, onClose }) => {
  if (!isOpen || !event) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{event.EventName}</h2>
        <p>Event Date: {event.date}</p>
        <p>{event.description}</p>
        <p>{event.location}</p>
        {event.registration && (
          <p><a href={event.registration} target="_blank" style={{color: "blue"}}>Registration Link</a></p>
        )}
        {event.resources && (
          <p><a href={event.resources} target="_blank" style={{color: "blue"}}>Resources</a></p>
        )}
        {event.image && (
          <Image src={event.image} alt="event" className='Image-popup' width={1000} height={1000} />
        )}
      </div>
    </div>
  );
};

export default Model;
