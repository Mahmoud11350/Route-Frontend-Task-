import Link from "next/link";

const NavLinks = () => {
  return (
    <ul>
      <li>
        <Link className="text-white" href={"/"}>
          Dashboard
        </Link>
      </li>
    </ul>
  );
};
export default NavLinks;
