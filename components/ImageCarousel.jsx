import React, { useState, useEffect } from 'react';
import Papa from "papaparse";
import Image from 'next/image';

function ImageCarousel() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vRiRIDiOZc5K7mSTzbNLktdJ49kW1GJfaEyvlsOLiBCFgsvoZ-1U-ud4XDaJhPnIVd3DoeA16IB1E_Y/pub?gid=0&single=true&output=csv', {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: (results) => {
                setData(results.data);
            }
        });
    }, []);

    return (
        <div className="image-carousel-container">
            {data.length ?
                <div className="recent-update-section">
                    <div className="row">
                        {data.slice(0, 3).map((item, index) => {
                            return (
                                <div className='col-md-4' key={index}>
                                    <div className="card-item">
                                        <div className="card-item-img">
                                            <a href={item.ArticleLink} target="_blank" rel="noreferrer">
                                                <Image className='Image-general' src={item.image} alt={item.EventName} width={100} height={100}/>
                                            </a>
                                        </div>
                                        <div className="card-item-content">
                                            <a href={`/events/${encodeURIComponent(item.EventName)}`} rel="noreferrer">
                                                <p>{item.EventName}</p>
                                            </a>
                                            {/* <p>{item.date}</p> */}
                                            {/* <p>{item.location}</p> */}
                                            {/* <p>{item.description}</p> */}
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
                : <p className='Loading-tag'>Loading...</p>}
        </div>
    );
}

export default ImageCarousel;
