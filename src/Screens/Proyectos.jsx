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
      <div className="div_titulo_proyectos">PROJECTS</div>

      <article className="article_card_proyectos" ref={historiaRef}>
        <div className="div_cards_proyecto">
          <div className="proyecto">
            <div className="informacion">
              <div className="div_img_proyecto">
                <img src={imgSW} alt="sistemaweb" />
              </div>
              <div>
                <p className="h6_tema">MANAGEMENT SYSTEM</p>
                <p className="titulo_proyecto">
                Web System for Blocking Mobile Devices with IoT
                </p>
                <hr />
                <p className="parrafo_proyecto">
                This web system serves to give a time of use to the mobile devices that have an app that has been created for that can connect to the web system, once the App you can see the location and lock the device.
                  <br />
                  View repository <a href="https://github.com/ElScrap/Sistema-Web-IoT.git" target="_blank" className="link_github">Github</a>
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
                <p className="h6_tema">INFORMATION</p>
                <p className="titulo_proyecto">
                  My Portfolio
                </p>
                <hr />
                <p className="parrafo_proyecto">
                This is my website which contains all my data about my education, experience, certificates and projects that I have done and acquired throughout my training as a Web Developer.
                  <br />
                  View repository <a href="https://github.com/ElScrap/Mi_Portafolio.dev.git" target="_blank" className="link_github">Github</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
