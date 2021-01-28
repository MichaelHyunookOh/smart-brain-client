import React from "react";
import brain from "./brain.png";
import { Animated } from "react-animated-css";

export default function Logo() {
  return (
    <Animated
      animationIn="rubberBand"
      animationInDuration="1500"
      className="repeat"
    >
      <div className="container center ma4 mt0">
        <img className="brain-logo-img shadow-2" src={brain} alt="brain-logo" />
      </div>
    </Animated>
  );
}
