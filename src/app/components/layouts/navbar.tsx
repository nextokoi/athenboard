"use client";

import './navbar.css'

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "keep-react";

export const NavbarComponent = ({ children } : {children: React.ReactNode}) => {
  return (
    <Navbar fluid={true} className="bg-[#006876]">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Link href="/">
            <Navbar.Brand>
              <Image
                src="https://ofrkgmwhpmpxhpjhnlro.supabase.co/storage/v1/object/public/user_images/logo.svg"
                alt=""
                width="103"
                height="97"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Divider />
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8 link-color"
          >
            <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Profile" href='/profile' />
            <Navbar.Link linkName="About" />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="Experiences" href='/experiences' />
              <Navbar.Link linkName="About" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>
        <Navbar.Container className="flex gap-3">
          {children}
          <Navbar.Toggle className="toggle-svg-color" />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}
