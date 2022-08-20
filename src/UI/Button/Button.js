import React from "react";
import cssClasses from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${cssClasses.Button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
