'use client';

import { satoshiFont } from "@/app/fonts/fonts";
import { NAV_LINKS } from "@/constants/Navigations";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export const Navbar = () => {
  const pathname = usePathname();
  const [navState, setNavState] = useState(false);

  const getLinkClass = (isActive: boolean) =>
    `${satoshiFont.className} ${
      isActive ? "text-white" : "text-[#89939E]"
    } font-bold text-[16px] leading-[120%] tracking-[-1%] transition-colors duration-200 hover:text-white md:text-[18px]`;

  return (
    <header className="w-full bg-background">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-20">
        <div className="hidden items-center justify-between gap-10 py-5 md:flex">
          <Link
            href="/"
            className={`${satoshiFont.className} text-[24px] font-bold leading-[120%] tracking-[-4%] text-white`}
          >
            Infinity.
          </Link>

          <nav className="flex items-center gap-8 lg:gap-16">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link href={item.href} key={item.href} className={getLinkClass(isActive)}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className={`${satoshiFont.className} rounded-[8px] border border-white px-4 py-2 text-[18px] font-medium leading-[120%] tracking-[-1%] text-white  hover:bg-white hover:text-background cursor-pointer`}
          >
            Contact
          </button>
        </div>

        <div className="flex items-center justify-between py-4 md:hidden">
          <Link
            href="/"
            className={`${satoshiFont.className} text-[22px] font-bold leading-[120%] tracking-[-4%] text-white`}
          >
            Infinity.
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={navState}
            onClick={() => setNavState((prev) => !prev)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-white/20 text-white cursor-pointer"
          >
            {navState?<X/>:<Menu />}
          </button>
        </div>

        {navState && (
          <div className="border-t border-white/10 pb-5 pt-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    href={item.href}
                    key={item.href}
                    onClick={() => setNavState(false)}
                    className={getLinkClass(isActive)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              className={`${satoshiFont.className} mt-6 rounded-[8px] border border-white px-4 py-2 text-[16px] font-medium leading-[120%] tracking-[-1%] text-white`}
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
