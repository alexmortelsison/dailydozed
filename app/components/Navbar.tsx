import { BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="py-4 px-4 lg:px-0">
      <div className="flex justify-between items-center">
        <BiMenuAltLeft size={40} />
        <Image
          src={"/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="object-cover"
        />
        <div className="flex items-center space-x-2">
          <button className="bg-gray-900 text-white px-8 py-2 rounded-4xl">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
