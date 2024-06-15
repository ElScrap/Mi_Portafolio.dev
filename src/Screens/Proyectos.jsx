import imgSW from "../assets/img/sistemawebiot.webp";
import imgPF from "../assets/img/portafolio.webp";
import React, { useEffect, useRef } from 'react';

export function Proyectos() {
  const historiaRef = useRef(null);
  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          } else {
            entry.target.classList.remove('animated');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (historiaRef.current) {
      observer.observe(historiaRef.current);
    }

    return () => {
      if (historiaRef.current) {
        observer.unobserve(historiaRef.current);
      }
    };
  }, []);
  return (
    <div id="proyectos" className="div_Proyectos">
      <div className="div_titulo_proyectos">Projects</div>

      <article className="article_card_proyectos" ref={historiaRef}>
        <div className="div_cards_proyecto">
          <div className="proyecto">
            <div className="informacion">
              <div className="div_img_proyecto">
                <img src={imgSW} alt="sistemaweb" />
              </div>
              <div>
                <p className="h6_tema">Sistema de Administración</p>
                <p className="titulo_proyecto">
                  Sistema Web para el bloqueo de Dispositivos Moviles con IoT{" "}
                </p>
                <hr />
                <p className="parrafo_proyecto">
                  Este sistema web sirve para dar un tiempo de uso a los
                  dispositivos moviles que tengan una app que se ha creado para
                  que pueda conectarse con el sistema web, una vez instalada la
                  app se puede ver la ubicacion y bloquear el dispositivo.
                  <br />
                  Ver repositorio <a href="">Github</a>
                </p>
              </div>
            </div>
          </div>
          <div className="proyecto">
            <div className="informacion">
              <div className="div_img_proyecto">
                <img src={imgPF} alt="sistemaweb" />
              </div>
              <div>
                <p className="h6_tema">INFORMACIÓN</p>
                <p className="titulo_proyecto">
                  Mi Portafolio
                </p>
                <hr />
                <p className="parrafo_proyecto">
                  Este es mi sitio web el cual contiene todos mis datos sobre mi educacion, experiecia, certificados y proyectos que he realizo y adquirido a lo largo de mi formación como Desarrollador web.
                  <br />
                  Ver repositorio <a href="">Github</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
