import React from "react";
import MarketaPhoto from "./img/MM_photo.png";
import "./marketa.css";

export const Marketa = () => {
  return (
    <>
      <main className="main">
        <section className="home">
          <div className="home__box grid">
            <img
              className="home__img"
              src={MarketaPhoto}
              alt="Marketa fotka"
            ></img>
            <div className="home__data">
              <h1 className="home__name">Markéta Mížová</h1>
              <p className="home__work">
                <strong>Junior Frontend Developer </strong>
              </p>
              <p className="home__work">
              Frontend se učím od roku 2020 pomocí kurzů Czechitas, Udemy, Skillmea. Díky tvorbě webových strábek nacházím ve své práci radost a uplatnění skrz <strong>kreativitu, systematické a analytické myšlení,</strong> mám příjemný pocit z dobře odvedené a viditelné práce. Momentálně pracuji jako koordinátorka projektu Národní technické knihovny. Mé projekty najdete na GitHubu.
              </p>
              <div className="home__socials">
                <a
                  className="home__social-link"
                  href="https://ie.linkedin.com/in/m-mizova?trk=profile-badge"
                  target="_blank"
                >
                  <i className="ri-linkedin-box-fill"></i>
                </a>
                <a
                  className="home__social-link"
                  href="https://github.com/MarketaMiza"
                  target="_blank"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <footer>
        <small> © Czechitas 2023 </small>
        <small> Frontend Ladies - O projektu </small>
      </footer> 

    </>
  );
};
