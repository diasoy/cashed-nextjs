import React from "react";
import NavLinks from "./nav-links";
import { IoLogOutOutline } from "react-icons/io5";
import Link from "next/link";
import { ModeToggle } from "../ui/button-themes";
import { title } from "@/lib/fonts";

const SideNav = () => {
  return (
    <>
      <div className="flex h-full flex-col gap-2 px-3 py-4 md:px-2">
        <Link
          href="/dashboard"
          className={`${title.className} font-bold text-white dark:bg-blue-800 text-3xl flex h-20 items-end justify-start rounded-md p-4 md:h-40 bg-primary`}
        >
          Cashed
        </Link>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden bg-secondary h-auto w-full grow rounded-md md:block"></div>
        </div>
        <div className="flex items-center gap-2 bg-secondary p-2 rounded-md">
          <ModeToggle />
          <div className="">Themes</div>
        </div>
        <button className="hover:bg-primary-foreground flex bg-secondary h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
          <IoLogOutOutline />
          <div className="hidden md:block ">Sign Out</div>
        </button>
      </div>
    </>
  );
};

export default SideNav;
