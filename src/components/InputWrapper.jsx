import React from "react";

const InputWrapper = (props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.htmlFor} className="font-bold text-slate-800 mb-2">
        {props.label}
      </label>
      {props.children}
    </div>
  );
};

export default InputWrapper;
