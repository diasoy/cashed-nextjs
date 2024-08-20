"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { CiBoxList } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: IoHomeOutline },
  { name: "Orders", href: "/dashboard/orders", icon: LiaFileInvoiceSolid },
  { name: "Products", href: "/dashboard/products", icon: AiOutlineProduct },
  { name: "Categories", href: "/dashboard/categories", icon: CiBoxList },
];
const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-600': pathname === link.href,
            },
          )}
        >
          {link.icon && <link.icon />}
          <span>{link.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
