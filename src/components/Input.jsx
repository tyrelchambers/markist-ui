import React from "react";

const Input = (props) => {
  return (
    <input
      className={`bg-slate-50 p-3 rounded-md ${
        props.className ? props.className : ""
      }`}
      type={props.type}
      placeholder={props.placeholder}
      onInput={props.onInput}
      value={props.value}
      name={props.name}
    />
  );
};

export default Input;
