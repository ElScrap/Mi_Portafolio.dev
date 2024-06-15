import { useEffect, useState } from "react";

export function NavBar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

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
      setIsOpen(false);
    }
  }

  return (
    <div>
      <header className="header">
        <nav>
          <input type="checkbox" id="check" checked={isOpen} />
          <label htmlFor="check" className="checkbtn" onClick={handleMenuClick}>
            <p className={isOpen ? "btn_menu open" : "btn_menu"}>
              <div></div>
              <div></div>
              <div></div>
            </p>
          </label>

          <ul>
            <li>
              <a
                href="#Inicio"
                onClick={(e) => handleNavigation(e, "inicio")}
                className={activeSection === "inicio" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Sobremi"
                onClick={(e) => handleNavigation(e, "sobremi")}
                className={activeSection === "sobremi" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Cursos"
                onClick={(e) => handleNavigation(e, "education")}
                className={activeSection === "education" ? "active" : ""}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#Experiencia"
                onClick={(e) => handleNavigation(e, "experiencia")}
                className={activeSection === "experiencia" ? "active" : ""}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#Proyectos"
                onClick={(e) => handleNavigation(e, "proyectos")}
                className={activeSection === "proyectos" ? "active" : ""}
              >
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
