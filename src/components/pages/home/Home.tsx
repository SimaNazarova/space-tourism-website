import React, { useEffect, useRef } from "react";

import styles from "./Home.module.scss";
import exploreImg from "../../../images/explore.png";
import gsap from "gsap";
function Home() {
  const imgRef = useRef<any>();

  function anma(status: string) {
    const tl = gsap.fromTo(
      imgRef.current,
      { scale: 1, duration: 0.3 },
      { scale: 1.2, duration: 0.3 }
    );
    if (status === "show") {
      tl.play();
    } else if (status === "hide") {
      tl.reverse(0);
    }

    console.log("kekek");
  }
  console.log(imgRef.current);
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
      <div className={styles.imgContainer}>
        <div className={styles.imgOpacity} ref={imgRef}></div>
        <img
          onMouseEnter={() => anma("show")}
          onMouseLeave={() => anma("hide")}
          className={styles.img}
          src={exploreImg}
          alt="explore"
        />
      </div>
    </div>
  );
}

export default Home;
