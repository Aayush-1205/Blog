import React from "react";
import { Header, SideNav } from "./_components";

const layout = ({ children }) => {
  return (
    <div>
      <div className="hidden lg:block lg:w-52 fixed">
        <SideNav />
      </div>
      <div className="lg:ml-52">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
