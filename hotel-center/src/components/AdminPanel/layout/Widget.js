import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Widget(props) {
  return (
    <div className="widget">
      <span className="title d-flex">
        {props.icon}
        {title(props.type)}
      </span>
      <CircularProgressbar
        value={props.percent}
        text={`${props.percent}%`}
        strokeWidth={7}
      />
      <span className="description">
        {props.percent}% of {props.type}s are reserved
      </span>
    </div>
  );
}

function title(string) {
  const words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}
