import Image from "next/image";
import routeLogo from "@/public/route.jpg";

const LogoImg = () => {
  return (
    <div className="flex justify-center">
      <Image
        src={routeLogo}
        alt="Route Logo"
        width={60}
        height={60}
        className="rounded-full"
      />
    </div>
  );
};
export default LogoImg;
