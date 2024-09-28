import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../partials/Header";

const HomeLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" && <Header />}
      <main className="grow mb-10 flex flex-col gap-10 md:gap-20">
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
