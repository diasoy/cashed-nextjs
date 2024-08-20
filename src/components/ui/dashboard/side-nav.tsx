import React from "react";
import NavLinks from "./nav-links";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";

const SideNav = () => {
  return (
    <>
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <Link
          href="/dashboard"
          className="text-white text-xl mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        >
          Cashed
        </Link>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        </div>
        <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <IoLogOutOutline />
          <div className="hidden md:block">Sign Out</div>
        </button>
      </div>
    </>
  );
};

export default SideNav;
