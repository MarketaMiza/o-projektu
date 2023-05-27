import React from "react";
import MarketaPhoto from "./img/MM_photo.png";
// import Resume from "./img/Marketa_resume_2023-05.pdf";
import "./marketa.css";

export const Marketa = () => {
  return (
    <>
      {/* <header className="header" id="header">
        <nav className="nav container">
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li>
                <a href="#home" className="nav__link active-link">
                  Ahoj
                </a>
              </li>
              <li>
                <a href="#about" className="nav__link">
                  O mě
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="nav__link">
                  Kontakt
                </a>
              </li>
            </ul>
            <div className="nav__close" id="nav-close">
              <i className="ri-close-fill"></i>
            </div>
            <nav className="nav__toggle" id="nav__toggle">
              <i className="ri-menu-fill"></i>
            </nav>
          </div>
        </nav>
      </header> */}
     
      <main className="main">
        <section className="home" id="home">
          <div className="home__box box grid">
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

        <section className="hello section box">
            <h2 className="section__title">Ahoj</h2>
            <p className="hello__details text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consequuntur illum! Iusto vel ut quaerat eligendi maiores quos, id voluptatem, blanditiis molestiae laboriosam autem dolorem provident? Sequi dignissimos accusamus exercitationem.</p>
            <a href="./img/Marketa_resume_2023-05.pdf" className="button button--flex text-sm"><i className="ri-download-2-fill"></i> DOWNLOAD CV</a>

        </section>
        {/* SKILLS */}
        <section className="services section box" id="skills">
          <h2 className="section--title">Technical Skills</h2>
          
        </section>
      </main>

      {/* pro copirovani */}
      <section className="group">
        <div className="photo"></div>
        <div className="vizitka"></div>

        <p>
          Na jaře 2020 jsem se přestěhovala do Dublinu a naplánovala si zde
          roční sabatikl. Zaměřila jsem se hlavně na
          <strong>studium angličtiny</strong> a na změnu mé pracovní kariéry.
          Inspirovaly mě kurzy Czechitas, nejvíce mne zaujala
          <strong> tvorba webových stránek</strong>. Ke studiu využívám on-line
          kurzy Czechitas, Udemy nebo Learn2Code, sleduji českou a slovenskou
          frontend komunitu, zahraniční zdroje. Určitě bych se tvorbě webových
          stránek chtěla věnovat i profesionálně. Zatím mohu pracovat vzdáleně,
          ale v roce 2022 plánuji návrat zpět do Česka.
        </p>

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
        </div>
      </section>

      <footer>
        <small> © Czechitas 2023 </small>
        <small> Frontend Ladies - O projektu </small>
      </footer>
    </>
  );
};
