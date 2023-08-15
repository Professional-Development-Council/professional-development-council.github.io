import React, { useEffect } from "react";
import { EventsData } from '../../data/EventsData'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Events = () => {
  useEffect(() => {
    AOS.init();
}, [])
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
        <div className="card-container">
          <div className="row">
            {EventsData.map((item,index) => {
              return (
                <div className='col-md-4' key={index}>
                  <div className="card-item" data-aos="fade-up">
                    <div className="card-item-img">
                      <Image src={item.image} alt='item' className="Image-general" width={100} height={100}/>
                    </div>
                    <div className="card-item-content">
                      <Link href={`/events/${item.EventName}`} onClick={() => window.scrollTo(0, 0)}><p>{item.EventName}</p></Link>

                    </div>

                  </div>

                </div>
              )
            })}

          </div>

        </div>
      </div>


    </div>
  )
}

export default Events