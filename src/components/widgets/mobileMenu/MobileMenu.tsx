import React from "react";
import styles from "./MobileMenu.module.scss";
import { menuLinks } from "../../../data";
import { NavLink } from "react-router-dom";
import { useStore } from "../../../store";

const MobileMenu = () => {
  const { openMenu, setOpenMenu } = useStore();
  return (
    <div
      style={{ transform: openMenu ? "translateX(0)" : "translateX(100%)" }}
      className={styles.container}
      onClick={() => setOpenMenu(!openMenu)}>
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
  );
};

export default MobileMenu;
