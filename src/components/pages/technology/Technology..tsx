import React, { useState } from "react";

import styles from "./Technology.module.scss";
import Title from "../../shared/title/Title";
import { pages } from "../../../data";
function Technology() {
  const [chosenTech, setChosenTech] = useState(1);
  const data = pages.find((page) => page.technology)?.technology;

  const member = data?.techs.find((m) => m.id === chosenTech);
  return (
    <div className={styles.crew}>
      <div className={styles.leftBlock}>
        <Title title={data?.title} className={styles.title} />
        <div
          className={`${styles.rightBlock} ${styles[`cover_${member?.id}`]}`}>
          {/* <img className={styles.img} src={member?.img} alt="" /> */}
        </div>
        <div className={styles.info}>
          <p className={styles.subname}>the terminology...</p>
          <p className={styles.name}>{member?.name}</p>
          <p className={styles.text}>{member?.text}</p>
        </div>
        <ul className={styles.pagination}>
          {data?.techs.map((bullet) => {
            return (
              <li key={bullet.id} onClick={() => setChosenTech(bullet.id)}>
                <button
                  className={`${styles.bullet} ${
                    bullet.id === chosenTech ? styles.active : ""
                  }`}>
                  {bullet.id}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Technology;
