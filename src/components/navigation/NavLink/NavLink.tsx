import Link from "next/link";

interface NavLinkProps {
  href: string;
  label?: string;
  onMouseEnter?: () => void;
}

export const NavLink = ({ href, label, onMouseEnter }: NavLinkProps) => {
  return (
    <Link
      className="inline-block w-full py-2 text-sm uppercase lg:w-fit lg:py-3 lg:text-lg"
      href={`/${href}`}
      onMouseEnter={onMouseEnter}
    >
      {href || label}
    </Link>
  );
};
