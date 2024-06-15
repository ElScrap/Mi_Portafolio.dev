import React, { useEffect, useRef } from 'react';
import imgHtml from '../icons/Html.svg';
import imgCss from '../icons/Css.svg';
import imgJs from '../icons/JS.svg';
import imgBt from '../icons/Bootstrap.svg';
import imgGh from '../icons/Github2.svg';
import imgPg from '../icons/Postgres.svg';
import imgNjs from '../icons/Nodejs.svg';
import imgPhp from '../icons/Php.svg';
import imgReac from '../icons/React.svg';

export function Sobremi() {
  const historiaRef = useRef(null);
  const skillsRef = useRef(null);

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
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (historiaRef.current) {
        observer.unobserve(historiaRef.current);
      }
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div id="sobremi" className="div_sobremi">
      <div className="div_titulo_sobremi">SOBRE MI</div>
      <div className="div_historia">
        <article className="card" ref={historiaRef}>
          <div className="card-body">
            <span className="span_historia">Mi Historia</span>
            <br />
            <p className="txt_descripcion">
              Soy una persona que le gusta mucho la tecnología y aprender de
              ella, desde pequeño empece a desarmar juguetes electronicos para
              saber que tenian dentro de ellos, en el colegio estudie
              electricidad y una vez que entre a la universidad aprendi mucho
              sobre la logica de la programacion y sus diferentes tipos de
              lenguajes, ademas de poder desarrollar software y diferentes
              proyectos con la Tecnología IoT, en mis tiempos libres me gusta
              aprender nuevas tecnologias y realizar proyectos electronicos para
              poner a prueba mis conocimientos y porque no aprender aun
              mas.
            </p>
          </div>
        </article>
        <article className="card" ref={skillsRef}>
          <div className="div_skills">
            <span className='span_myskill'>My Skills</span>
            <div className="skill skill_html"><img src={imgHtml} alt="Css"/><h1>HTML</h1></div>
            <div className="skill skill_css"><img src={imgCss} alt="Html" /><h1>CSS</h1></div>
            <div className="skill skill_js"><img src={imgJs} alt="Css"/><h1>JAVASCRIPT</h1></div>
            <div className="skill skill_bs"><img src={imgBt} alt="Css"/><h1>BOOTSTRAP</h1></div>
            <div className="skill skill_gh"><img src={imgGh} alt="Css"/><h1>GITHUB</h1></div>
            <div className="skill skill_pg"><img src={imgPg} alt="Css"/><h1>POSTGRES SQL</h1></div>
            <div className="skill skill_ndj"><img src={imgNjs} alt="Css"/><h1>NODE JS</h1></div>
            <div className="skill skill_php"><img src={imgPhp} alt="Css"/><h1>PHP</h1></div>
            <div className="skill skill_reac"><img src={imgReac} alt="Css"/><h1>REACT</h1></div>
          </div>
        </article>
      </div>
    </div>
  );
}
