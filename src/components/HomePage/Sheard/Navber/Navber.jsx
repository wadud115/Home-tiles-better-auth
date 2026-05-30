"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navlink from '../Navlink';

const Navber = () => {
    return (
        <div className="navbar  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Navlink href={"/"}>Home</Navlink>
      <Navlink href={"/All-tiles"}>All tiles</Navlink>
      <Navlink href={'/About'}>Profile</Navlink>
      </ul>
    </div>
    <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="font-serif text-xl font-bold text-primary-foreground">
              T
            </span>
          </div>
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            Tiles Gallery
          </span>
        </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu flex gap-5 menu-horizontal px-1">
      <Navlink href={"/"}>Home</Navlink>
      <Navlink href={"/All-tiles"}>All tiles</Navlink>
      <Navlink href={'/About'}>Profile</Navlink>
      
      

      
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
    );
};

export default Navber;