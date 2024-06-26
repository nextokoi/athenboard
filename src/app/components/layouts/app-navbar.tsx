"use client";

import { Drawer } from "antd";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { AppMenu } from "./app-menu";
import Image from 'next/image';
import Link from 'next/link';

export const AppNavbar = ({ children }: { children: React.ReactNode }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <div className="p-3 bg-[#006876] text-white flex items-center justify-between md:hidden">
        <Link href="/">
          <Image 
            src="https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/logo.svg"
            alt="Logo"
            width={100}
            height={20}
          />
        </Link>
        <div className="flex items-center">
          {children}
          <FaBars className="text-xl cursor-pointer ml-3" onClick={() => setOpenMenu(true)} />
        </div>
      </div>
      <div className="bg-[#006876] invisible absolute top-0 left-0 w-full md:flex md:visible md:justify-between md:items-center pr-5 py-2">
        <div className="flex items-center gap-3 ml-3">
          <Link href="/">
            <Image 
              src="https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/logo.svg"
              alt="Logo"
              width={140}
              height={20}
            />
          </Link>
            <AppMenu />
        </div>
        <div className="hidden md:block">
          {children}
        </div>
      </div>
      <Drawer 
        open={openMenu}
        size="default"
        onClose={handleCloseMenu}
        closable={true}
      >
        <AppMenu isVertical onCloseMenu={handleCloseMenu} />
      </Drawer>
    </>
  );
};
