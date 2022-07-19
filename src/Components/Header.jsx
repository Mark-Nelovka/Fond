import Logo from "../images/LOGO.jpeg";
import Burger from "../images/burger-menu.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
// ? возможно не нужен класс container-nav на 17строке
export default function Header() {
  const { pathname } = useLocation();

  const [modal, setModal] = useState(false);

  const openNavigation = () => {
    setModal(!modal);
  };

  return (
    <header className={pathname === "/Fond" ? "header-home" : "header"}>
      <nav className="nav">
        <div className="container-header">
          <NavLink
            to="/Fond"
            className={({ isActive }) => `${isActive && "#"}`}
          >
            <img src={Logo} alt="Logo" width="175,5" height="28,5" />
          </NavLink>

          <div
            className={
              pathname === "/Fond" && modal
                ? "nav_container-list--home"
                : "nav_container-list"
            }
          ></div>
          <ul className={modal ? "nav_list--open" : "nav_list--close"}>
            <li
              className={pathname === "/Fond" ? "nav_link--home" : "nav-link"}
            >
              <NavLink
                to="/Fond"
                className={({ isActive }) =>
                  `${isActive ? "active" : "nav_item"}`
                }
              >
                Головна
              </NavLink>
            </li>
            <li
              className={pathname === "/Fond" ? "nav_link--home" : "nav-link"}
            >
              <NavLink
                to="/Help"
                className={({ isActive }) =>
                  `${isActive ? "active" : "nav_item"}`
                }
              >
                Допомога
              </NavLink>
            </li>
            <li
              className={pathname === "/Fond" ? "nav_link--home" : "nav-link"}
            >
              <NavLink
                to="/Questions"
                className={({ isActive }) =>
                  `${isActive ? "active" : "nav_item"}`
                }
              >
                Часті запитання
              </NavLink>
            </li>
            <li
              className={pathname === "/Fond" ? "nav_link--home" : "nav-link"}
            >
              <NavLink
                to="/Support"
                className={({ isActive }) =>
                  `${isActive ? "active-support" : "nav_item-support"}`
                }
              >
                Підтримати
              </NavLink>
            </li>
            <li
              className={pathname === "/Fond" ? "nav_link--home" : "nav-link"}
            >
              <a className="phone" href="tel:+380 63 258 3366">
                +380 63 258 3366
              </a>
            </li>
            <button
              className={
                pathname === "/Fond"
                  ? "nav_change-language--home"
                  : "nav_change-language"
              }
            >
              UA
            </button>
          </ul>

          <div className="nav_container-burger-menu" onClick={openNavigation}>
            <img src={Burger} alt="open menu navigation" />
          </div>
        </div>
      </nav>
    </header>
  );
}
