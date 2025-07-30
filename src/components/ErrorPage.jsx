import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Oops! error occurred...</h1>
      {error && <p className="text-[5rem]">{error.data}</p>}
      <button className="text-[5rem]">
        <NavLink to="/">Go to Home</NavLink>
      </button>
    </>
  );
};

export default ErrorPage;
