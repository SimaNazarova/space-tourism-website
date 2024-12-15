import React, { useEffect, useRef, useState } from "react";

import Header from "./components/widgets/header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Crew from "./components/pages/crew/Crew";
import Home from "./components/pages/home/Home";
import Destination from "./components/pages/destination/Destination";
import styles from "./App.module.scss";
import MobileMenu from "./components/widgets/mobileMenu/MobileMenu";
import Technology from "./components/pages/technology/Technology.";

import gsap from "gsap";
import TransitionComponent from "./components/shared/transition/Transition";
function App() {
  const location = useLocation();
  const [bg, setBg] = useState(location.pathname);
  const bgRef = useRef<any>();
  useEffect(() => {
    const timer = setTimeout(() => {
      switch (location.pathname) {
        case "/destination":
          setBg("destination");

          break;
        case "/crew":
          setBg("crew");
          break;
        case "/technology":
          setBg("technology");
          break;
        default:
          setBg("home");
      }
    }, 250);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={`${styles.app} ${styles[bg]}`} ref={bgRef}>
      <Header />
      <MobileMenu />
      <Routes location={location}>
        <Route
          path="/"
          element={
            <TransitionComponent>
              <Home />
            </TransitionComponent>
          }></Route>
        <Route
          path="/destination"
          element={
            <TransitionComponent>
              <Destination />
            </TransitionComponent>
          }></Route>
        <Route
          path="/crew"
          element={
            <TransitionComponent>
              <Crew />
            </TransitionComponent>
          }></Route>
        <Route
          path="/technology"
          element={
            <TransitionComponent>
              <Technology />
            </TransitionComponent>
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
