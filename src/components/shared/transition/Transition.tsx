import React, { ReactNode } from "react";

import gsap from "gsap";
import { SwitchTransition, Transition } from "react-transition-group";

interface Itransition {
  children: ReactNode;
}

const TransitionComponent = ({ children }: Itransition) => {
  console.log(children);
  return (
    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={500}
        onEnter={(node: HTMLElement) => {
          gsap.set(node, { autoAlpha: 0 });

          gsap
            .timeline({ paused: true })
            .to(node, { autoAlpha: 1, duration: 0.5 })
            .to(node, { duration: 0.5 })
            .play();
        }}
        onExit={(node: HTMLElement) => {
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
