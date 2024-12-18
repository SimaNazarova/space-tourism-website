import React, { useEffect, useState } from "react";

import Header from "./components/widgets/header/Header";
import { useLocation } from "react-router-dom";
import styles from "./App.module.scss";
import MobileMenu from "./components/widgets/mobileMenu/MobileMenu";
import RouterComponent from "./routes/RouterComponent";

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
      <RouterComponent />
      <MobileMenu />
    </div>
  );
}

export default App;
