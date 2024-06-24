import Link from "next/link";

import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label?: string;
  onMouseEnter?: () => void;
}

export const NavLink = ({ href, label, onMouseEnter }: NavLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      className="inline-block w-full py-2 text-sm uppercase lg:w-fit lg:py-3 lg:text-lg"
      href={href}
      onMouseEnter={onMouseEnter}
    >
      <span
        className={`hover:border-b-2 hover:border-[#5d3a40] ${pathname === href ? "border-b-2 border-[#5d3a40]" : ""}`}
      >
        {label}
      </span>
    </Link>
  );
};
