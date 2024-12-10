import React from "react";
import logo from "../../../images/logo.svg";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";
import { menuLinks } from "../../../data";
import BurgerMenu from "../burgerMenu/BurgerMenu";

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.line}></div>
      <BurgerMenu />

      <div className={styles.container}>
        <ul className={styles.ul}>
          {menuLinks.map((item) => (
            <li className={styles.li} key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }>
                <span className={styles.number}>{item.number}</span>
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
