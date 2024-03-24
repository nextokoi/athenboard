"use client";

import './navbar.css'

import Image from "next/image";
import Link from "next/link";

import { Navbar } from "keep-react";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true} className="bg-[#006876]">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Link href="./">
            <Navbar.Brand>
              <Image
                src="./logo.svg"
                alt="keep"
                width="130"
                height="40"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Divider />
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8 link-color"
          >
            <Navbar.Link linkName="Home"/>
            <Navbar.Link linkName="Projects" />
            <Navbar.Link linkName="About" />
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Navbar.Link linkName="Home" />
              <Navbar.Link linkName="Projects" />
              <Navbar.Link linkName="Blogs" />
              <Navbar.Link linkName="News" />
              <Navbar.Link linkName="Resources" />
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>
        <Navbar.Container className="flex gap-2">
          <Navbar.Toggle className="toggle-svg-color"/>
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}
