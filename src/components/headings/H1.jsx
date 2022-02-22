import React from "react";

const H1 = (props) => (
  <h1
    className={`font-black text-slate-800 ${
      props.textSize ? props.textSize : "text-4xl"
    }`}
  >
    {props.children}
  </h1>
);

export default H1;
