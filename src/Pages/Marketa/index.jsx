import React from "react";
// import MarketaPhoto from "./img/mm_photo.jpg";
import "./style.css";

export const Marketa = () => {
  return (
    <>
      <section className="group">
        <div className="photo">
          {/* <img src={MarketaPhoto} alt="market photo" />  */}
        </div>
        <div className="vizitka">
          <h2 className="name">Markéta Mížová</h2>
        </div>

        <div className="contact">
          <p>
            <a
              className="link"
              href="https://ie.linkedin.com/in/m-mizova?trk=profile-badge"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="link"
              href="https://github.com/MarketaMiza"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </div>

        <section className="box info-box--full">
          <p>
            Na jaře 2020 jsem se přestěhovala do Dublinu a naplánovala si zde
            roční sabatikl. Zaměřila jsem se hlavně na
            <strong>studium angličtiny</strong> a na změnu mé pracovní kariéry.
            Inspirovaly mě kurzy Czechitas, nejvíce mne zaujala
            <strong> tvorba webových stránek</strong>. Ke studiu využívám
            on-line kurzy Czechitas, Udemy nebo Learn2Code, sleduji českou a
            slovenskou frontend komunitu, zahraniční zdroje. Určitě bych se
            tvorbě webových stránek chtěla věnovat i profesionálně. Zatím mohu
            pracovat vzdáleně, ale v roce 2022 plánuji návrat zpět do Česka.
          </p>
        </section>

        <div className="profile">
          <h4>Moje práce</h4>
          <p>Moje první Webová stránka v rámci kurzu Czechitas:</p>
          <h3>
            <a
              className="link--project"
              href="https://freealpineminds.netlify.app/"
              target="_blank"
            >
              Free Alpine Minds
            </a>
          </h3>

          <p>Jednoduchý blog:</p>
          <h3>
            <a
              className="link--project"
              href="https://agitated-neumann-03ac42.netlify.app/"
              target="_blank"
            >
              Martin Blog
            </a>
          </h3>
        </div>
      </section>

      <footer>
        <small> © Czechitas 2023 </small>
        <small> Frontend Ladies - O projektu </small>
      </footer>
    </>
  );
};
