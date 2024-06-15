import icoMap from "../icons/Map.svg";
import icoClock from "../icons/Clock.svg";
import React, { useEffect, useRef } from 'react';

export function Experiencia() {
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
    <div id="experiencia" className="div_experiencia">
      <div className="div_titulo"> EXPERIENCIA</div>

      <article className="article_card_experiencia" ref={historiaRef}>
        <div className="div_cards_experiencia">
          <div className="experiencia">
            <div className="informacion">
              <div className="div_titulo_experiencia">
                <h1>Software Developer</h1>
              </div>
              <hr />
              <br />
              <h3>SolucionesTecnológicas Informaticas JP</h3>
              <br />
              <div className="informacion_fecha_experiencia">
                <p>
                  <img src={icoMap} alt="linke" />
                  Pasantias/Remoto
                </p>
                <p>
                  <img src={icoClock} alt="linke" />3 meses
                </p>
              </div>
              <br />
              <hr />
              <div className="div_parrafo_experiencia">
                <p>
                  Al realizar pasantias en esta prestigiosa empresa, he aprendido a desarrollar software utilizando el lenguaje de programación PHP y la base de datos phpMyAdmin para gestionar los datos. Aquí, realicé el desarrollo de un módulo de facturación.
                </p>
              </div>
            </div>
          </div>

          <div className="experiencia">
            <div className="informacion">
              <div className="div_titulo_experiencia">
                <h1>Frontend development</h1>
              </div>
              <hr />
              <br />
              <h3>Universidad Técnica de Machala</h3>
              <br />
              <div className="informacion_fecha_experiencia">
                <p>
                  <img src={icoMap} alt="linke" />
                  Pasantias/Remoto
                </p>
                <p>
                  <img src={icoClock} alt="linke" />3 meses
                </p>
              </div>
              <br />
              <hr />
              <div className="div_parrafo_experiencia">
                <p>
                Durante mis pasantías en esta empresa, tuve la oportunidad de aprender a utilizar la biblioteca React. Aquí desarrollé el Front-End para la actualización de datos de clientes que iban a ser ingresados en la empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
