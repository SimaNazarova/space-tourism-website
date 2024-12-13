import React, { useEffect, useState } from "react";

import Header from "./components/widgets/header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Crew from "./components/pages/crew/Crew";
import Home from "./components/pages/home/Home";
import Destination from "./components/pages/destination/Destination";
import styles from "./App.module.scss";
import MobileMenu from "./components/widgets/mobileMenu/MobileMenu";
import Technology from "./components/pages/technology/Technology.";
function App() {
  const location = useLocation();
  const [bg, setBg] = useState(location.pathname);

  useEffect(() => {
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
  }, [location]);

  return (
    <div className={`${styles.app} ${styles[bg]}`}>
      <Header />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Routes>
    </div>
  );
}

export default App;
