import React from "react";
import cssClasses from "./Button.module.css";

const Button = (props) => {
  return (
    <div
      className={`${cssClasses.Button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </div>
  );
};

export default Button;
