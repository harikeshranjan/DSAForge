"use client";

import { header } from "@/lib/types";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import * as motion from 'motion/react-client'

export default function Header() {
  return (
    <motion.nav
      className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5, ease: 'easeInOut' }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse ml-10">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#6D28D9]">DSAForges</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden focus:outline-none focus:ring-2"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle>Menu</SheetTitle>
              <ul className="flex flex-col gap-2 mt-4 font-medium">
                {
                  header.map(link => (
                    <li key={link.id} className="flex items-center">
                      <link.icon className="inline-block mr-5" />
                      <Link
                        href={link.path}
                        className="block py-2 rounded md:bg-transparent"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </SheetContent>
          </Sheet>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {
              header.map(link => (
                <li
                  key={link.id}
                  className="hover:text-[#6D28D9] transition-all duration-100 hover:-translate-y-1"
                >
                  <Link
                    href={link.path}
                    className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                  >
                    {link.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

