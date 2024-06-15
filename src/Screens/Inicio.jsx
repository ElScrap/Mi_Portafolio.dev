import img1 from "../assets/perfil.png";
import imgGithub from '../icons/Github.svg';
import imglink from '../icons/Linkedin.svg';
import imgCv from '../icons/Cv.svg';
import pdfcv from '../assets/pdf/mi_CV.pdf'
export function Inicio() {
  return (
    <div id="inicio" className="cuadro_principal">
        <div class="imagen_fondo"></div>
      <div className="cuadro_imagen">
        <img className="imagen_principal" src={img1} alt="MiFoto" />
      </div>    
      <div className="cuadro_nombre">
        <span>
          Hi, I'm Leonardo Aguilar<span className="emoji">👋</span> <span className="cuadro_estado">Available to work</span>
        </span>
         <ul className="lista_ul">
            <a href="https://github.com/ElScrap" className="mis-redes" target="_blank"><img src={imgGithub} alt="git" /></a>
            <a href="https://www.linkedin.com/in/leonardo-aguilar-ordo%C3%B1ez-ab4753141/" className="mis-redes" target="_blank"><img src={imglink}alt="linke"/></a>
            <a href={pdfcv} className="mis-redes" target="_blank"><img src={imgCv} alt="Cv" /></a>
         </ul>
      </div>
      <div className="cuadro_sobremi">
      <p>
      I'm an Information Technology Engineer, I have great interest in full-stack development, Internet of Things and Artificial Intelligence, based in Ecuador. 
      </p>
      </div>
      <br />
      <div class="scroll-down-indicator">
        <div class="arrow"></div>
      </div>
    </div>
  );
}
