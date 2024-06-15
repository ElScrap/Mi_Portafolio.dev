import { useEffect, useState } from "react";

import imgGithub from '../icons/Github.svg';
import imglink from '../icons/Linkedin.svg';
import imgCv from '../icons/Cv.svg';
import pdfcv from '../assets/pdf/mi_CV.pdf'


export function Footer() {
  const [activeSection, setActiveSection] = useState("inicio");

  // Función para manejar la navegación
  function handleNavigation(event, target) {
    event.preventDefault();
    const element = document.getElementById(target);

    if (element) {
      if (target === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setActiveSection(target);
    }
  }
  return (
    <footer className="footer">
      <div className="div_p_footer">
        <p className="p_footer">
          Made by <br />
          <a
            href="#Inicio"
            onClick={(e) => handleNavigation(e, "inicio")}
            className={activeSection === "inicio" ? "active" : ""}
          > Leonardo Aguilar
          </a>
          <br /> Information Technology Engineer 
        </p>
      </div>

      <div className="div_Contacto">Contactame: <br /><a className="nav-link" href="mailto:Leonardo-aguilar@hotmail.es" target="_blank">Leonardo-aguilar@hotmail.es</a>
      </div>

      <div className="div_masinformacion">
      Mas Información: <br />
      <div className="div_redes_phone"><a href="https://github.com/ElScrap" className="mis-redes-footer" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/leonardo-aguilar-ordo%C3%B1ez-ab4753141/" className="mis-redes-footer" target="_blank">Linkedin</a>
            <a href="https://drive.google.com/file/d/1OMxtgjGYqP9it0mCbQFRmZ2qTx0qKW1m/view?usp=drive_link" className="mis-redes-footer" target="_blank">CV</a>
      </div>
      
      <ul className="lista_ul">
            <a href="https://github.com/ElScrap" className="mis-redes" target="_blank"><img src={imgGithub} alt="git" /></a>
            <a href="https://www.linkedin.com/in/leonardo-aguilar-ordo%C3%B1ez-ab4753141/" className="mis-redes" target="_blank"><img src={imglink}alt="linke"/></a>
            <a href={pdfcv} className="mis-redes" target="_blank"><img src={imgCv} alt="Cv" /></a>
         </ul>
      </div>
    </footer>
  );
}
