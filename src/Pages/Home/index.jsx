import React from "react";
import Hands from './img/iStock-1426547978.jpg'
import "./style.css"

export const Home =() => {
    return(

        <main className="container">
        <header>
          <menu>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Markéta</a></li>
              <li><a href="#">Alex</a></li> 
            </ul>
          </menu>
        </header>
  
        <article className="group">
         
          <img src={Hands} alt="hands" />
     
  
          <div className="text">
            <h3>Frontend Ladies</h3>
            <p>
              Web, který pomůže propojit firmy a nové juniorní frontend vývojářky.
              Samy víme, jak je těžké sebrat odvahu a poslat CV na naši vysněnou
              pozici v IT - ještě toho moc neumím, vždyť se mi vysmějí, tenhle
              skill ani nemám, raději nikam CV posílat nebudu. Budeme rády, pokud
              se nám podaří náš web zpropagovat ve firmách spolupracujících s
              Czechitas, které tak budou mít možnost podívat se na portfolia
              jednotlivých absolventek digitálních akademií a sami je oslovit s
              nabídkou práce, pozvat na pohovor.
            </p>
           
          </div>
        </article>
  
        <footer>
          <small className="right"> © Czechitas 2023 </small>
          <small className="left"> Frontend Ladies - O projektu </small>
        </footer>
      </main>
    )
}