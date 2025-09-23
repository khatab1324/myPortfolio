import Link from "next/link";
import { navLinks } from "@/constans";
import { TiThMenu } from "react-icons/ti";
import { ImCancelCircle } from "react-icons/im";

import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="py-4">
      <div className="flex items-center justify-between  mx-auto px-4 text-white">
        <Link href="/" className="no-underline text-inherit">
          <h1 className="m-0 text-xl font-semibold">MyPortfolio</h1>
        </Link>
        <nav>
          <ul className=" list-none sm:flex hidden justify-end items-center flex-1 gap-x-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="sm:hidden">
            {isMenuOpen ? (
              <ImCancelCircle size={20} onClick={() => setIsMenuOpen(false)} />
            ) : (
              <TiThMenu size={20} onClick={() => setIsMenuOpen(true)} />
            )}
            <div
              className={`${
                !isMenuOpen ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-16 right-1 mx-4 my-3 min-w-[150px] rounded-xl sidebar`}
            >
              <ul className=" flex justify-end items-start flex-1 flex-col">
                {navLinks.map((item, index) => (
                  <li
                    key={index}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === item.name ? "text-white" : "text-dimWhite"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                    onClick={() => setActive(item.name)}
                  >
                    <a href={`#${item.name}`}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
