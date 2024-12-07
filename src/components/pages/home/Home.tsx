import React from "react";

import styles from "./Home.module.css";
import exploreImg from "../../../images/explore.png";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          SO, YOU WANT TO TRAVEL TO
          <span> SPACE</span>
        </h1>
        <p className={styles.text}>
          Let’s face it; if you want to go to space, you might as well <br />{" "}
          genuinely go to outer space and not hover kind of on the <br /> edge
          of it. Well sit back, and relax because we’ll give you a <br />
          truly out of this world experience!
        </p>
      </div>
      <div>
        <img src={exploreImg} alt="explore" />
      </div>
    </div>
  );
}

export default Home;
