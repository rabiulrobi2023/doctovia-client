
import Image from "next/image";
import logo from "../../../public/assets/logo_doctovia1.png";

const Logo = () => {
  return <Image src={logo} alt="logo" className="w-12 h-12" />;
};

export default Logo;
