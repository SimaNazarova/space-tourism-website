import React, { useEffect, useRef, useState } from "react";

import styles from "./Transition.module.scss";
import gsap from "gsap";
import { SwitchTransition, Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";

const TransitionComponent = ({ children }: any) => {
  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={500}
        onEnter={(node: any) => {
          gsap.set(node, { autoAlpha: 0 });

          gsap
            .timeline({ paused: true })
            .to(node, { autoAlpha: 1, duration: 0.5 })
            .to(node, { duration: 0.5 })
            .play();
        }}
        onExit={(node: any) => {
          gsap
            .timeline({ paused: true })
            .to(node, { duration: 0.2 })
            .to(node, { autoAlpha: 0, duration: 0.2 })
            .play();
        }}>
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
