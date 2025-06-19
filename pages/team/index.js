import React, { useEffect } from "react";
import { TeamData } from "../../data/CurrentTeamData";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Image from "next/image";

const Team = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="main-container">
      <Head>
        <title>Team | Current Team</title>
        <meta name="description" content="" />
      </Head>
      <header id="page-header">
        <div className="page-heading">
          <h2>Team</h2>
        </div>
      </header>

      <div className="page-container">
        <section id="team" className="team-area">
          <div className="row team-items" style={{ justifyContent: "center" }}>
            {TeamData.map((item, index) => {
              return (
                <div
                  className="col-md-3 single-item"
                  key={index}
                  data-aos="fade-up"
                >
                  <div className="item">
                    <div className="thumb">
                      <Image
                        className="team-image"
                        src={item.image}
                        alt="Thumb"
                        width={300}
                        height={300}
                      />
                      <div className="overlay">
                        <h4>{item.name}</h4>
                        <p>{item.bio}</p>
                      </div>
                    </div>
                    <div className="info">
                      <span className="message">
                        {item.linkedin && (
                          <a href={item.linkedin} target="_blank">
                            <i
                              className="fab fa-linkedin"
                              style={{ fontSize: "25px" }}
                            ></i>
                          </a>
                        )}
                        {item.email && (
                          <a href={`mailto:${item.email}`} target="_blank">
                            <i
                              className="fas fa-envelope-open"
                              style={{ fontWeight: "500" }}
                            ></i>
                          </a>
                        )}
                        {item.position === "Webmaster" && item.github ? (
                          <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i
                              className="fab fa-github"
                              style={{ fontSize: "25px" }}
                            ></i>
                          </a>
                        ) : item.profile ? (
                          <a
                            href={item.profile}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i
                              className="fas fa-user"
                              style={{ fontSize: "25px" }}
                            ></i>
                          </a>
                        ) : null}
                      </span>
                      <h4>{item.name}</h4>
                      <span style={{ fontSize: "1.05rem" }}>
                        {item.position}
                      </span>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: "600",
                          opacity: "0.6",
                        }}
                      >
                        Contact no: +91 {item.contact}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
