import React, { Route, Routes } from "react-router-dom";
import Crew from "../components/pages/crew/Crew";
import Home from "../components/pages/home/Home";
import Destination from "../components/pages/destination/Destination";

import Technology from "../components/pages/technology/Technology.";
import TransitionComponent from "../components/shared/transition/Transition";

const RouterComponent = () => {
  return (
    <Routes>
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
  );
};

export default RouterComponent;
