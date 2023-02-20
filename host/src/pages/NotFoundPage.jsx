import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <h1 className="my-16 text-5xl text-red-500">NotFoundPage</h1>
      <NavLink to="/" className="bg-blue-400 p-3 text-white rounded-md">
        Volver al Home
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
