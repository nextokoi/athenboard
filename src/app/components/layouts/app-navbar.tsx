"use client";

import './app-navbar.css';
import { Drawer } from "antd";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { AppMenu } from "./app-menu";

export const AppNavbar = ({ children }: { children: React.ReactNode}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="p-3 bg-[#006876] text-white flex items-center justify-between md:hidden">
        <FaBars className="text-xl cursor-pointer" onClick={() => setOpenMenu(true)} />
        {children}
      </div>
      <div className='bg-[#006876] hidden md:flex md:visible md:justify-between md:items-center'>
        <AppMenu />
        {children}
      </div>
      <Drawer 
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        closable={false}
      >
        <AppMenu isVertical />
      </Drawer>
    </>
  );
};


