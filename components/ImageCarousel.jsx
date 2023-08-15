import React, { useState, useEffect } from 'react';
import Papa from "papaparse";

function ImageCarousel() {
    const [data, setData] = useState([]);

    useEffect(() => {
        Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQfQhVWmUwk7T0MC-TejeuFDg-dkeRyLkZW-CXyG8dmb3BkeXkuTQwsgp-OJIE7Cp7qc4WoPOtlgWyg/pub?gid=0&single=true&output=csv', {
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
                        {data.map((item, index) => {
                            return (
                                <div className='col-md-4' key={index}>
                                    <div className="card-item">
                                        <div className="card-item-img">
                                        <a href={item.ArticleLink} target="_blank" rel="noreferrer"> <img src={item.ImageLink} alt='item' /></a>
                                        </div>
                                        <div className="card-item-content">
                                            <a href={item.ArticleLink} target="_blank" rel="noreferrer"> <p>{item.Title}</p></a>

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
