import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { BurgerButton, NavLink } from "@/components";
import logo from "../../../../public/assets/logo/background.png";

interface NavBarProps {
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSubNav: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar = ({
  showMobileNav,
  setShowMobileNav,
  setShowSubNav,
  setShowSearch,
}: NavBarProps) => {
  return (
    <nav className="centered gap-8 uppercase">
      <div className="flex flex-[2] lg:justify-end">
        <BurgerButton
          className="lg:hidden"
          isOpen={showMobileNav}
          setIsOpen={setShowMobileNav}
        />

        <div className="hidden lg:flex lg:max-w-md lg:flex-1 lg:justify-between lg:gap-5 lg:pl-8">
          <NavLink
            label="schemes"
            href="/schemes"
            onMouseEnter={() => setShowSubNav(true)}
          />
          <NavLink
            label="workshops"
            href="/workshops"
            onMouseEnter={() => setShowSubNav(false)}
          />
          <NavLink
            label="consultations"
            href="/consultations"
            onMouseEnter={() => setShowSubNav(false)}
          />
        </div>
      </div>

      <div className="centered max-w-72 flex-[0.8]">
        <Link
          className="inline-block w-40"
          href="/"
          onMouseEnter={() => setShowSubNav(false)}
        >
          <Image className="h-full w-full object-cover" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="flex flex-[2] justify-end lg:justify-between">
        <div className="hidden lg:flex lg:max-w-[21.5rem] lg:flex-1 lg:justify-between lg:gap-5 lg:pr-4">
          <NavLink
            label="resources"
            href="/resources"
            onMouseEnter={() => setShowSubNav(false)}
          />
          <NavLink
            label="about"
            href="/about"
            onMouseEnter={() => setShowSubNav(false)}
          />
          <NavLink
            label="contact"
            href="/contact"
            onMouseEnter={() => setShowSubNav(false)}
          />
        </div>

        <div className="flex items-center lg:pr-4">
          <button className="p-4 lg:pb-[1.125rem] lg:pr-2 lg:pt-[.875rem]">
            <FiShoppingCart />
          </button>
          <button
            className="hidden pb-[1.125rem] pl-2 pr-4 pt-[.875rem] lg:flex"
            onClick={() => {
              setShowSearch(true);
            }}
          >
            <IoIosSearch />
          </button>
        </div>
      </div>
    </nav>
  );
};
