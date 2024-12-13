import React from "react";

import styles from "./Title.module.scss";

interface ITitle {
  title?: { id: string; text: string };
  className?: string;
}
const Title = ({ title, className }: ITitle) => {
  return (
    <h2 className={`${styles.title} ${className}`}>
      <span className={styles.number}>{title?.id}</span>
      {title?.text}
    </h2>
  );
};

export default Title;
