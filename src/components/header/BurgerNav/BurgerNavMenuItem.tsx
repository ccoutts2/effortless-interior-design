import Link from "next/link";

const BurgerNavMenuItem = (props: { label: string; href: string }) => {
  return (
    <div className="relative mx-1 my-0 cursor-pointer px-0 py-2 text-xs uppercase">
      <Link className="no-underline" href={`${props.href}`}>
        {props.label}
      </Link>
    </div>
  );
};

export default BurgerNavMenuItem;
