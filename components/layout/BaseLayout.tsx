import React from "react";
import Footer from "../ui/footer/Footer";
import Navbar from "../ui/navbar/Navbar";

interface props {
  children: React.ReactNode;
}

const Layout = ({ children }: props) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between h-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
