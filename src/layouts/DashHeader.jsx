import React from "react";
import DashNav from "./DashNav";

const DashHeader = () => {
  return (
    <div className="max-w-xs w-full p-6">
      <p className="font-bold text-2xl">Markist</p>
      <DashNav />
    </div>
  );
};

export default DashHeader;
