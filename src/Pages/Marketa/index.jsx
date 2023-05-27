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
                <strong> Budoucí Junior Frontend Developer </strong>
              </p>
              <p className="home__work">
                Jsem pilnou studentkou Digitální akademie web. V Czechitas jsou
                super. Už se těším až si budu hledat novou práci!
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

      <footer>
        <small> © Czechitas 2023 </small>
        <small> Frontend Ladies - O projektu </small>
      </footer> 
      </main>

    </>
  );
};
