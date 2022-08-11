import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex">
          <ul className="nav">
            <Link to="/">
              <img
                src="https://i.ibb.co/0F6ht3r/logofandf.png"
                className="rounded d-block m-0"
                width="44px"
              />
            </Link>
            <Link to="/map" className="m-auto">
              <li>
                <a className="text-white">
                  <i class="fa-solid fa-car-on mx-3">Talleres</i>
                </a>
              </li>
            </Link>
            <a className="ms-3 text-muted d-flex" href="#">
              <i className="fa-brands fa-facebook m-auto"></i>
            </a>
            <a className="ms-3 text-muted d-flex" href="#">
              <i className="fa-brands fa-instagram m-auto"></i>
            </a>
            <a className="ms-3 text-muted d-flex" href="#">
              <i className="fa-brands fa-twitter m-auto"></i>
            </a>
          </ul>

          <div className="dropdown-menu-end dropdown text-light ms-auto">
            <a
              href="#"
              className="d-block link-light text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>
            <ul className="dropdown-menu text-small">
              <li>
                <Link to="/login">
                  <a className="dropdown-item" href="#">
                    Entrar
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <a className="dropdown-item" href="#">
                    Registrarse
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <a className="dropdown-item" href="#">
                    Perfil
                  </a>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link to="/">
                  <a className="dropdown-item" href="#">
                    Salir
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <a className="dropdown-item" href="#">
                    Contáctanos
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
