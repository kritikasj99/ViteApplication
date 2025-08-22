
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import { ToastContainer } from "react-toastify";
const Layout = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Outlet />
      <Footer/>...
    </>
  );
};
export default Layout;
