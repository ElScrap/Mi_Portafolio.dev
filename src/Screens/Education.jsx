import imgConferencia from "../assets/img/visoriot-3.webp";
import imgSI from "../assets/img/Seguridad-Informatica.webp";
import imgAPM from "../assets/img/Curso_Aplicaciones_Moviles.webp";
import imgDW from "../assets/img/Curso_Diseño_Web.webp";
import imgIP from "../assets/img/Curso_Intr_Progrmacion.webp";
import imgCP from "../assets/img/Certificado_Python.webp";

import icoMap from "../icons/Map.svg";
import icoClock from "../icons/Clock.svg";

import Visorpdf from "../assets/pdf/certificado_visor_iot.pdf";
import SIpdf from "../assets/pdf/Seguridad_Informática.pdf";
import AMpdf from "../assets/pdf/Curso_Aplicaciones_Moviles.pdf";
import DWpdf from "../assets/pdf/CursoHtml.pdf";
import IPpdf from "../assets/pdf/Curso_Intr_Progrmacion.pdf";
import CPpdf from "../assets/pdf/Certificado_python.pdf";

import React, { useEffect, useRef } from 'react';

export function Education() {
  const historiaRef = useRef(null);

  const openPDF = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

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
    <div id="education" className="div_Education">
      <div className="div_titulo_education">EDUCATION</div>
      
      <article className="article_card" ref={historiaRef}>
        <div className="div_cards">
          <div className="education"><img src={imgCP} alt="Css" className="img_curso" />
            <div className="informacion">
              <p className="p_tipoCurso">Curso UTMACH</p>
              <p className="p_tema">
                Introducción a la <br />programación con Python
              </p>
              <div className="informacion_fecha">
                <p className="p_lugar">
                  <img src={icoMap} alt="linke" />
                  UTMACH
                </p>
                <p className="p_tiempo">
                  <img src={icoClock} alt="linke" />
                  2023
                </p>
              </div>
              <hr />
              <button
                className="btn_certificado"
                onClick={() => openPDF(CPpdf)}
              >
                Ver Certificado
              </button>
            </div>
          </div>

          <div className="education">
            <img src={imgConferencia} alt="Css" className="img_curso" />
            <div className="informacion">
              <p className="p_tipoCurso">Semana de la Ciencia</p>
              <p className="p_tema">
                Ponente:
                <br />
                Protector facial Inteligente
              </p>
              <div className="informacion_fecha">
                <p className="p_lugar">
                  <img src={icoMap} alt="linke" />
                  UTMACH
                </p>
                <p className="p_tiempo">
                  <img src={icoClock} alt="linke" />
                  2022
                </p>
              </div>
              <hr />
              <button
                className="btn_certificado"
                onClick={() => openPDF(Visorpdf)}
              >
                Ver Certificado
              </button>
            </div>
          </div>

          <div className="education">
            <img src={imgSI} alt="Css" className="img_curso" />
            <div className="informacion">
              <p className="p_tipoCurso">Curso Academia</p>
              <p className="p_tema">Seguridad Informática</p>
              <div className="informacion_fecha">
                <p className="p_lugar">
                  <img src={icoMap} alt="linke" />
                  Mexico
                </p>
                <p className="p_tiempo">
                  <img src={icoClock} alt="linke" />
                  2020
                </p>
              </div>
              <hr />
              <button
                className="btn_certificado"
                onClick={() => openPDF(SIpdf)}
              >
                Ver Certificado
              </button>
            </div>
          </div>

          <div className="education education_html2">
            <img src={imgAPM} alt="Css" className="img_curso" />
            <div className="informacion">
              <p className="p_tipoCurso">Fundacion Telefónica Movistar</p>
              <p className="p_tema">Aplicaciones Móviles</p>
              <div className="informacion_fecha">
                <p className="p_lugar">
                  <img src={icoMap} alt="linke" />
                  Prefectura
                </p>
                <p className="p_tiempo">
                  <img src={icoClock} alt="linke" /> 2019
                </p>
              </div>
              <hr />
              <button
                className="btn_certificado"
                onClick={() => {
                  openPDF(AMpdf);
                }}
              >
                Ver Certificado
              </button>
            </div>
          </div>

          <div className="education education_html4">
            <img src={imgDW} alt="Css" className="img_curso" />
            <div className="informacion">
              <p className="p_tipoCurso">Fundacion Telefónica Movistar</p>
              <p className="p_tema">Diseño Web HTML 5</p>
              <div className="informacion_fecha">
                <p className="p_lugar">
                  <img src={icoMap} alt="linke" />
                  Prefectura
                </p>
                <p className="p_tiempo">
                  <img src={icoClock} alt="linke" /> 2019
                </p>
              </div>
              <hr />
              <button
                className="btn_certificado"
                onClick={() => {
                  openPDF(DWpdf);
                }}
              >
                Ver Certificado
              </button>
            </div>
          </div>

          <div className="education education_html4">
            <img src={imgIP} alt="Css" className="img_curso" />
            <div className="informacion">
              <p className="p_tipoCurso">Fundacion Telefónica Movistar</p>
              <p className="p_tema">Introducción la programación</p>
              <div className="informacion_fecha">
                <p className="p_lugar">
                  <img src={icoMap} alt="linke" />
                  Prefectura
                </p>
                <p className="p_tiempo">
                  <img src={icoClock} alt="linke" /> 2019
                </p>
              </div>
              <hr />
              <button
                className="btn_certificado"
                onClick={() => {
                  openPDF(IPpdf);
                }}
              >
                Ver Certificado
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
