import React, { useEffect } from "react";
import { PastTeamData } from "../../data/PastTeamData";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import Image from "next/image";

const PastTeam = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='main-container'>
      <Head>
        <title>Team | Past Team</title>
        <meta name="description" content="" />

      </Head>
      <header id="page-header">
        <div className="page-heading">
          <h2>Past Secretaries</h2>
        </div>
      </header>

      <div className="page-container">

        <section id="team" className="team-area">
          <div className="row team-items" style={{ justifyContent: "center" }}>

            {PastTeamData.map((item, index) => {
              return (
                <div className="col-md-3 single-item" key={index} data-aos="fade-up">
                  <div className="item">
                    <div className="thumb">
                      <Image className="img-fluid Image-general" src={item.image} alt="Thumb" />
                      <div className="overlay">
                        <h4>{item.name}</h4>
                        <p>
                          {item.bio}
                        </p>

                      </div>
                    </div>
                    <div className="info">
                      <span className="message">
                        {item.linkedin && (
                          <a href={item.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        )}
                        {item.email && (
                          <a href={`mailto:${item.email}`} target="_blank" rel="noreferrer"><i className="fas fa-envelope-open" style={{ fontWeight: "500" }}></i></a>
                        )}
                      </span>
                      <h4>{item.name}</h4>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </section>

      </div>
    </div>
  )
}

export default PastTeam