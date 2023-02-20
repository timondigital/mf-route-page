import React from "react";

import "./loading.css";
const Loading = () => {
  return (
    <div className="p-3 text-center">
      <div className="bg-gray-100 rounded-md shadow-xl lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
