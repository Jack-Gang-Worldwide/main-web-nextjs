import React from "react";
import Navbar from "../ui/navbar/Navbar";

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
