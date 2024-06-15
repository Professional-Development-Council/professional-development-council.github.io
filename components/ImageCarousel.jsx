import React, { useState } from 'react';
import Image from 'next/image';
import { EventsData } from '../data/EventsData'; // Assuming EventsData is imported correctly

function ImageCarousel() {
    const initialDisplayCount = 3; // Initial number of announcements to display
    const [displayCount, setDisplayCount] = useState(initialDisplayCount);
    const announcements = EventsData.filter(event => event.announce === "true");

    const loadMoreAnnouncements = () => {
        // Increase displayCount by 3 each time Load More is clicked
        setDisplayCount(displayCount + 3);
    };

    return (
        <div className="image-carousel-container">
            <div className="recent-update-section">
                <div className="row">
                    {announcements.slice(0, displayCount).map((item, index) => {
                        return (
                            <div className='col-md-4' key={index}>
                                <div className="card-item">
                                    <div className="card-item-img">
                                        <a href={item.ArticleLink} target="_blank" rel="noreferrer">
                                            {/* Assuming you have an image field in EventsData */}
                                            <Image className='Image-general' src={item.image || "/assets/images/default.jpg"} alt={item.EventName} width={1000} height={1000} />
                                        </a>
                                    </div>
                                    <div className="card-item-content">
                                        <a href={`/events/${encodeURIComponent(item.EventName)}`} rel="noreferrer">
                                            <p>{item.EventName}</p>
                                        </a>
                                        {/* Additional fields if needed */}
                                        {/* <p>{item.date}</p> */}
                                        {/* <p>{item.location}</p> */}
                                        {/* <p>{item.description}</p> */}
                                        {/* Example button or link */}
                                        {/* <Link href={`/events/${encodeURIComponent(item.EventName)}`} passHref> */}
                                            {/* <button>Read More</button> */}
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Load More Button */}
            {displayCount < announcements.length &&
                <div className="announcements-btn">
                    <button className="read-button" onClick={loadMoreAnnouncements}>Load More</button>
                </div>
            }
            {/* <div className="announcements-btn">
            <Link href="/events"><button className="read-button">Read More</button></Link>
          </div> */}

            {/* No more announcements message */}
            {/* {displayCount >= announcements.length &&
                <p className='read-button'>No more announcements to load.</p>
            } */}
        </div>
    );
}

export default ImageCarousel;
