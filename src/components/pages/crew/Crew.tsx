import React, { useState } from "react";

import styles from "./Crew.module.scss";
import Title from "../../shared/title/Title";
import { pages } from "../../../data";
function Crew() {
  const [chosenMember, setChosenMember] = useState(1);
  const data = pages.find((page) => page.crew)?.crew;

  const member = data?.team.find((m) => m.id === chosenMember);
  return (
    <div className={styles.crew}>
      {" "}
      <div className={styles.leftBlock}>
        <Title title={data?.title} />
        <div className={styles.rightBlock}>
          <img className={styles.img} src={member?.img} alt="" />
        </div>
        <div className={styles.line}></div>
        <div className={styles.info}>
          <p className={styles.job}>{member?.job}</p>
          <p className={styles.name}>{member?.name}</p>
          <p className={styles.text}>{member?.text}</p>
        </div>
        <ul className={styles.pagination}>
          {data?.team.map((bullet) => {
            return (
              <li
                className={`${styles.bullet} ${
                  bullet.id === chosenMember ? styles.active : ""
                }`}
                key={bullet.id}
                onClick={() => setChosenMember(bullet.id)}></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Crew;
