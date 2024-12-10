import React from "react";

import styles from "./Title.module.scss";

interface ITitle {
  title?: { id: string; text: string };
}
const Title = ({ title }: ITitle) => {
  return (
    <h2 className={styles.title}>
      <span className={styles.number}>{title?.id}</span>
      {title?.text}
    </h2>
  );
};

export default Title;
