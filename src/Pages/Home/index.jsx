import React from "react";
import Hands from "./img/iStock-1426547978.jpg";
import "./style.css";

export const Home = () => {
  return (
    // <main className="container">
    <>
      <article className="group">
        <img src={Hands} alt="hands" />

        <div className="text">
          <h3>Frontend Ladies</h3>
          <p>
            <strong>Web, který pomůže propojit firmy a nové juniorní frontend vývojářky.</strong>
            <br />
            
            Samy víme, jak je těžké sebrat odvahu a poslat CV na naši vysněnou
            pozici v IT - máme obavu, že toho ještě toho moc neumíme a tak se jen učíme a hledání práce odkládáme. Budeme rády, pokud
            se nám podaří náš web zpropagovat ve firmách spolupracujících s
            Czechitas, které tak budou mít možnost podívat se na portfolia
            jednotlivých absolventek digitálních akademií a sami je oslovit s
            nabídkou práce a pozvat na pohovor. 
          </p>
        </div>
      </article>

      <footer>
        <small className="right"> © Czechitas 2023 </small>
        <small className="left"> Frontend Ladies - O projektu </small>
      </footer>
    </>
    // </main>
  );
};
