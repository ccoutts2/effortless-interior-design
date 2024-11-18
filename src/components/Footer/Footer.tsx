"use client";
import React, { useState } from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { NavLink } from "../navigation/NavLink/NavLink";

const Footer = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onFocus = () => {
    setIsActive(!isActive);
  };

  return (
    <footer className="flex w-full flex-col items-center justify-center bg-[#f4f0ea] p-4 px-12 md:justify-between lg:px-32">
      <h2 className="text-center font-normal capitalize">
        effortless interior design
      </h2>

      <div className="flex w-full flex-col items-center justify-center gap-0 pt-4 md:flex-row md:items-start md:justify-between">
        <div className="w-full md:flex md:flex-[2] md:flex-row-reverse md:items-start md:justify-between">
          <div className="flex w-full flex-[1] flex-col items-center justify-center px-0 py-4 font-normal capitalize">
            <h3 className="pb-2 text-base font-normal uppercase lg:text-xl">
              newsletter
            </h3>

            <form className="flex w-full flex-col items-center justify-center gap-2 capitalize">
              <input
                onFocus={onFocus}
                className={`w-[80%] border-b border-l-0  border-r-0 border-t-0 border-[#978f8f80] border-opacity-50 bg-[#f4f0ea] text-center placeholder-opacity-50 lg:text-base ${
                  isActive
                    ? "border-[#97060680] transition duration-700 ease-in-out"
                    : ""
                }`}
                placeholder="Enter your email address to subscribe"
              ></input>
              <p className="text-xs lg:text-base">submit</p>
            </form>
          </div>
          <nav className="flex w-full flex-[1] flex-col items-center justify-center px-0 py-4 text-center capitalize md:items-start md:text-start">
            <h3 className="pb-2 text-base font-normal uppercase lg:text-xl">
              site map
            </h3>
            <ul>
              <li className="text-xs lg:text-base">
                <Link href="/">bedroom</Link>
              </li>
              <li className="text-xs lg:text-base">
                <Link href="/">bathroom</Link>
              </li>
              <li className="text-xs lg:text-base">
                <Link href="/">kitchen</Link>
              </li>
              <li className="text-xs lg:text-base">
                <Link href="/">living room</Link>
              </li>
              <li className="text-xs lg:text-base">
                <Link href="/privacy-policy">privacy policy</Link>
              </li>
              <li className="text-xs lg:text-base">
                <Link href="/terms-and-conditions">t&c&apos;s</Link>
              </li>
              <li className="text-xs lg:text-base">
                <Link href="cookie-policy">cookie policy</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-[1] flex-col items-center justify-center px-0 py-4 text-center md:items-end md:text-end">
          <h3 className="pb-2 text-base font-normal uppercase lg:text-xl">
            contact
          </h3>
          <ul>
            <li className="text-xs capitalize lg:text-base">+44 8495 1561</li>
            <li className="text-xs lg:text-base">
              <Link href="mailto:info@effortlessinteriordesign.com">
                info@effortlessinteriordesign.com
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>

      <section className="flex w-full flex-col items-center justify-center md:items-start">
        <p className="text-xs capitalize lg:text-base">
          <span>&copy;</span>effortless interior design
        </p>
        <p className="text-xs capitalize lg:text-base">
          website by chris coutts & kabir seth
        </p>
      </section>
    </footer>
  );
};

export default Footer;
