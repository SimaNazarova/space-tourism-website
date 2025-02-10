import React, { useRef } from "react";

import styles from "./Home.module.scss";
import exploreImg from "../../../images/explore.png";
import gsap from "gsap";
function Home() {
  const imgRef = useRef<HTMLImageElement>(null);

  function showCircleAnimation(status: string) {
    const tl = gsap.fromTo(
      imgRef.current,
      { scale: 1, duration: 0.5 },
      { scale: 1.2, duration: 0.5 }
    );
    if (status === "show") {
      tl.play();
    } else if (status === "hide") {
      tl.reverse(0);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          SO, YOU WANT TO TRAVEL TO
          <span> SPACE</span>
        </h1>
        <p className={styles.text}>
          Let&rsquo;s face&nbsp;it; if&nbsp;you want
          to&nbsp;go&nbsp;to&nbsp;space, you might as&nbsp;well genuinely
          go&nbsp;to&nbsp;outer space and not hover kind of&nbsp;on&nbsp;the
          edge of&nbsp;it. Well sit back, and relax because we&rsquo;ll give you
          a&nbsp;truly out of&nbsp;this world experience!
        </p>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgOpacity} ref={imgRef}></div>
        <img
          onMouseEnter={() => showCircleAnimation("show")}
          onMouseLeave={() => showCircleAnimation("hide")}
          className={styles.img}
          src={exploreImg}
          alt="explore"
        />
      </div>
    </div>
  );
}

export default Home;
