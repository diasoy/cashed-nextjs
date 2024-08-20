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
            "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm bg-secondary font-medium hover:bg-primary-foreground md:flex-none md:justify-start md:p-2 md:px-3",
            {
              "text-primary": pathname === link.href,
            }
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
