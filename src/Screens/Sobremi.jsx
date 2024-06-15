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
      <div className="div_titulo_sobremi">ABOUT ME</div>
      <div className="div_historia">
        <article className="card" ref={historiaRef}>
          <div className="card-body">
            <span className="span_historia">MY STORY</span>
            <br />
            <p className="txt_descripcion">
            I am a person who really likes technology and learning from it. Since I was little, I started to disassemble electronic toys to find out what they had inside them. In school, I studied electricity, and once I entered university, I learned a lot about the logic of programming and its different types of languages. In addition, I was able to develop software and different projects with IoT technology. In my free time, I like to learn new technologies and carry out electronic projects to test my knowledge and, why not, learn even more.
            </p>
          </div>
        </article>
        <article className="card" ref={skillsRef}>
          <div className="div_skills">
            <span className='span_myskill'>MY SKILLS</span>
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
