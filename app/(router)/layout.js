import React from "react";
import { Header, ScrollToTop, SideNav } from "./_components";

const layout = ({ children }) => {
  return (
    <div>
      <div className="hidden lg:block lg:w-52 fixed">
        <SideNav />
      </div>
      <div className="lg:ml-52">
        <Header />
        {children}
        <ScrollToTop />
      </div>
    </div>
  );
};

export default layout;
