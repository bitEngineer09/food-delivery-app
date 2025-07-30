import React from "react";
import Headers from "../UI/Headers";
import Footers from "../UI/Footers";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Headers />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footers />
    </div>
  );
};

export default AppLayout;
