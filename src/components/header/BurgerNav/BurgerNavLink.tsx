import Link from "next/link";

interface BurgerNavLinkProps {
  href: string;
  label?: string;
  onMouseEnter?: () => void;
}

const BurgerNavLink = ({ href, label, onMouseEnter }: BurgerNavLinkProps) => {
  return (
    <Link
      className="inline-block w-full py-2 text-sm uppercase lg:w-fit lg:py-3 lg:text-lg"
      href={href}
      onMouseEnter={onMouseEnter}
    >
      {href || label}
    </Link>
  );
};

export default BurgerNavLink;
