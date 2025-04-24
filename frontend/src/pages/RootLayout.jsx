import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <Outlet />
    </div>
  );
};

export default RootLayout;
