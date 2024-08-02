import React from "react";
import { Header, SideNav } from "./_components";

const layout = ({ children }) => {
  return (
    <div>
      <div className="hidden lg:block lg:w-64 fixed">
        <SideNav />
      </div>
      <div className="lg:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
