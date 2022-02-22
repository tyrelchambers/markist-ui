import React from "react";
import DashHeader from "./DashHeader";

const DashWrapper = (props) => {
  return (
    <div className="flex">
      <DashHeader />
      <main className="bg-slate-50 w-full min-h-screen h-full">
        {props.children}
      </main>
    </div>
  );
};

export default DashWrapper;
