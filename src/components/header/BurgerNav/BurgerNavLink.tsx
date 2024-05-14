import Link from "next/link";

interface BurgerNavLinkProps {
  label: string;
  href: string;
}

const BurgerNavLink = ({ href, label }: BurgerNavLinkProps) => {
  return (
    <Link className="block w-full py-2 text-xs uppercase" href={href}>
      {label}
    </Link>
  );
};

export default BurgerNavLink;
