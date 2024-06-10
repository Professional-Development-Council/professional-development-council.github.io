import React, { useEffect, useState } from 'react';
import { EventsData } from '../../data/EventsData'
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';

const EventsDetails = () => {
    const Router = useRouter()
    const EventName = Router.query.eventDetails;

    const [Event, setEvent] = useState(null);
    useEffect(() => {
        let Event = EventsData.find((Event) => Event.EventName === (EventName));
        if (Event) {
            setEvent(Event);
        }
    }, [EventName]);

    return (
        <div className='main-container'>
            {Event && (
                <div>
                    <Head>
                        <title>Events | {Event.EventName}</title>
                    </Head>

                    <header id="page-header">
                        <div className="page-heading">
                            <h2>Events</h2>
                        </div>
                    </header>

                    <div className="page-container">
                        <div className="blog-content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="section-heading">
                                        <h1>{Event.EventName}</h1>
                                    </div>

                                    <div className="para-contaent">
                                        <p>Event Date: {Event.date}</p>
                                        <p>{Event.description}</p>
                                        <p>{Event.location}</p>

                                    </div>



                                </div>
                                <div className="col-md-6">
                                    <Image src={Event.image} alt="event" className='Image-general' width={100} height={100}/>


                                </div>
                            </div>

                        </div>








                    </div>
                </div>
            )}
        </div>

    )
}

export default EventsDetails