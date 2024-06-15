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
      <div className="div_titulo"> EXPERIENCE</div>

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
                  Internships/Remote
                </p>
                <p>
                  <img src={icoClock} alt="linke" />3 mounths
                </p>
              </div>
              <br />
              <hr />
              <div className="div_parrafo_experiencia">
                <p>
                While doing internships at this prestigious company, I have learned how to develop software using the PHP programming language and the phpMyAdmin database to manage the data. Here, I developed an invoicing module.
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
                  Internships/Remote
                </p>
                <p>
                  <img src={icoClock} alt="linke" />3 mounths
                </p>
              </div>
              <br />
              <hr />
              <div className="div_parrafo_experiencia">
                <p>
                During my internships at this company, I had the opportunity to learn how to use the React library. Here I developed the Front-End for updating customer data that was going to be entered into the company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
