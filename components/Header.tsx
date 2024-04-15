"use client";
import logoSite from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Home, Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/devis", label: "Devis" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathname = usePathname();
  return (
    <header className="md:px-14 px-4 z-50 py-3 bg-[hsl(var(--foreground))] fixed top-0 w-full flex justify-between border-b-2 border-green-800">
      <div className="flex items-center">
        <Image src={logoSite} alt="logo du site" className="w-12 h-12" />
        <h1 className="text-white ml-2">NebLink</h1>
      </div>
      <nav className="text-white text-2xl flex items-center mr-2">
        <Menu
          size={40}
          className="m-1 md:hidden cursor-pointer"
          onClick={() => setIsOpenMenu(isOpenMenu === true ? false : true)}
        />
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "transition duration-150 ease-in-out mx-4 my-1 md:block hidden",
              {
                "border-b-2 border-primary": pathname === link.href,
              }
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      {isOpenMenu === true && (
        <div className="absolute top-[74px] right-0 bg-accent p-6 w-full">
          <div className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "flex justify-center transition duration-150 ease-in-out mx-24 my-1 text-center text-3xl mb-6 py-3 border-b-2 hover:border-primary",
                  {
                    "border-b-2 border-primary": pathname === link.href,
                  }
                )}
                onClick={() =>
                  setIsOpenMenu(isOpenMenu === true ? false : true)
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
