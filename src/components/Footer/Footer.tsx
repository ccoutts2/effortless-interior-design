"use client";
import React, { useState } from "react";
import styles from "./Footer.module.scss";

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
        <div className="w-full md:flex md:w-[66.6%] md:flex-row-reverse md:items-start md:justify-between">
          <div className="flex w-full flex-col items-center justify-center px-0 py-4 font-normal capitalize">
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

          <div className="flex w-full flex-col items-center justify-center px-0 py-4 capitalize md:items-start">
            <h3 className="pb-2 text-base font-normal uppercase lg:text-xl">
              contact
            </h3>
            <p className="text-xs lg:text-base">tel: +44 8495 1561 </p>
            <p className="text-xs lg:text-base">email: blank@mail.com</p>
          </div>
        </div>

        <nav className="flex w-[30%] flex-col items-center justify-center px-0 py-4 capitalize md:items-end">
          <h3 className="pb-2 text-base font-normal uppercase lg:text-xl">
            schemes
          </h3>
          <p className="text-xs lg:text-base">bedroom</p>
          <p className="text-xs lg:text-base">bathroom</p>
          <p className="text-xs lg:text-base">kitchen</p>
          <p className="text-xs lg:text-base">living room</p>
        </nav>
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
