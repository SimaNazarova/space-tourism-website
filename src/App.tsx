import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Crew from "./components/crew/Crew";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destination"></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology"></Route>
      </Routes>
    </div>
  );
}

export default App;
