import React from "react";
import styled from "styled-components";
import styles from "./BurgerMenu.module.scss";
import { useStore } from "../../../store";
interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  open?: boolean;
}
const StyledBurger = styled.button<CustomButtonProps>`
  .line {
    width: 2rem;
    height: 0.25rem;
    background: #effffa;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  .line:first-child {
    transform: ${({ open }) => (open ? "rotate(47deg)" : "rotate(0)")};
  }

  .line:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
  }

  .line:nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-47deg)" : "rotate(0)")};
  }
`;
const Burger = () => {
  const { openMenu, setOpenMenu } = useStore();
  return (
    <StyledBurger
      open={openMenu}
      onClick={() => setOpenMenu(!openMenu)}
      className={styles.burger}>
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </StyledBurger>
  );
};

export default Burger;
