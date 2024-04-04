"use client";

import { menuItems } from "@/constants";
import Link from "next/link";
import { useState } from "react";

export default function MenuBtn() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="block sm:hidden">
      <button
        onClick={() => setShowMenu((cur) => !cur)}
        onBlur={() => setShowMenu(false)}
        className="relative group"
      >
        <div
          className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-300 hover:ring-8 ${
            showMenu ? "ring-4" : ""
          } ring-opacity-30 duration-200 shadow-md`}
        >
          <div
            className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`}
          >
            <div
              className={`bg-gray-900 h-[2px] w-7 transform transition-all duration-300 origin-left ${
                showMenu ? "translate-x-10" : ""
              }`}
            ></div>
            <div
              className={`bg-gray-900 h-[2px] w-7 rounded transform transition-all duration-300 ${
                showMenu ? "translate-x-10" : ""
              } delay-75`}
            ></div>
            <div
              className={`bg-gray-900 h-[2px] w-7 transform transition-all duration-300 origin-left ${
                showMenu ? "translate-x-10" : ""
              } delay-150`}
            ></div>

            <div
              className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
                showMenu ? "translate-x-0" : ""
              } flex w-0 ${showMenu ? "w-12" : ""}`}
            >
              <div
                className={`absolute bg-gray-900 h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                  showMenu ? "rotate-45" : ""
                }`}
              ></div>
              <div
                className={`absolute bg-gray-900 h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                  showMenu ? "-rotate-45" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </button>
      <div
        className={`absolute mt-4 right-5 bg-gray-100 p-6 drop-shadow-md flex flex-col duration-500 ease-in-out ${
          showMenu
            ? "opacity-100 translate-y-0 z-10"
            : "opacity-0 -translate-y-10 -z-10"
        }`}
      >
        <Link
          className="text-gray-500 ease-in-out duration-300 hover:brightness-50"
          href="/products"
        >
          Produtos
        </Link>
        {menuItems.map((item, index) => (
          <h2
            key={index}
            className="text-gray-500 ease-in-out duration-300 hover:brightness-50"
          >
            {item}
          </h2>
        ))}
      </div>
    </div>
  );
}
