import LogoImg from "./LogoImg";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="bg-mainColor max-h-20 flex items-center">
      <div className=" flex items-center justify-between  wrapper ">
        <LogoImg />
        <NavLinks />
      </div>
    </header>
  );
};
export default Header;
