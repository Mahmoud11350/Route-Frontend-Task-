import Link from "next/link";
import { Button } from "./ui/button";

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link className="text-white" href={"/"}>
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="text-white" href={"/user/new"}>
          <Button>Add New User</Button>
        </Link>
      </li>
    </ul>
  );
};
export default NavLinks;
