import React from "react";
import logo from "../../../images/logo.svg";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import { menuLinks } from "../../../data";
function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <div className={styles.line}></div>
      <div className={styles.container}>
        <ul className={styles.ul}>
          {menuLinks.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }>
                <span>{item.number}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
