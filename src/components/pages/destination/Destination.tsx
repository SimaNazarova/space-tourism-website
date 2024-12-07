import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

import styles from "./Destination.module.css";
import Title from "../../shared/title/Title";
import { pages } from "../../../data";
function Destination() {
  const [chosenTrip, setChosenTrip] = useState("mars");

  const data = pages.find((page) => page.destination)?.destination;

  const trip = data?.trips.find((trip) => trip.name === chosenTrip);

  console.log(data);

  function changeTrip(trip: string) {
    setChosenTrip(trip);
  }

  return (
    <div className={styles.destination}>
      <div className={styles.leftBlock}>
        <Title title={data?.title} />
        <img src={trip?.img} alt={trip?.name} className={styles.img} />
      </div>
      <div className={styles.rightBlock}>
        <ul className={styles.ul}>
          {data?.trips.map((item, index) => {
            return (
              <li
                className={`${styles.li} ${chosenTrip === item.name ? styles.active : ""}`}
                key={index}
                onClick={() => changeTrip(item.name)}>
                {item?.name}
              </li>
            );
          })}
        </ul>
        <p className={styles.name}>{trip?.name}</p>
        <p className={styles.text}>{trip?.text}</p>
        <div className={styles.line}></div>
        <div className={styles.info}>
          <p className={styles.infoTitle}>AVG. DISTANCE</p>
          <p className={styles.infoTitle}>Est. travel time</p>
          <p className={styles.infoRes}>{trip?.distance}</p>
          <p className={styles.infoRes}>{trip?.time}</p>
        </div>
      </div>
    </div>
  );
}

export default Destination;
