import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";
import Socials from "./Socials";
import CategoryBar from "./CategoryBar";

export default function Hero() {
  return (
    <div className="relative flex flex-col tracking-tighter">
      <CategoryBar />
      <div className="px-4 lg:px-0 flex flex-col items-center md:items-start">
        <Image
          src={"/hero.png"}
          alt="hero"
          width={1000}
          height={1000}
          quality={80}
          loading="eager"
          className="object-cover brightness-70 w-screen h-[78vh] rounded-4xl relative"
        />
        <div className="absolute md:top-1/3 top-1/6 md:pl-24">
          <h1 className="text-7xl text-center md:text-start w-2/3 md:text-8xl text-white font-bold  md:w-1/2 tracking-tighter leading-20">
            Start with the Perfect Doze of Style
          </h1>
          <div className="pt-8 flex items-center text-white">
            <BsArrowUpRightCircle className="" size={40} />
            <p className="pl-4 text-lg text-gray-300">
              Show your daily dozed of fashion with #ShowYourDoze
            </p>
          </div>
          <div className="text-white pt-8">
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
