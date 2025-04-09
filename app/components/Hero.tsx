import Image from "next/image";
import CarouselPage from "./CarouselPage";

const slides = [
  "/hero4.png",
  "/hero.png",
  "/hero11.png",
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
];

export default function Hero() {
  return (
    <div className="flex flex-col justify-between">
      <div className="justify-between hidden md:inline-flex">
        <h2 className="text-9xl tracking-tighter text-[#fddf5b] font-mono">
          08:30
        </h2>
        <div className="pl-4 flex-1 items-center pt-12">
          <p>Unleash//</p>
          <p>The Future of Streetwear.//</p>
        </div>
        <div className="w-[330px]">
          <CarouselPage>
            {slides.map((slide, index) => (
              <Image
                src={slide}
                key={index}
                alt="portfolio"
                width={250}
                height={200}
                className="min-w-full object-cover"
                unoptimized
              />
            ))}
          </CarouselPage>
        </div>
      </div>
      <div className="flex pt-144 md:pt-38 items-end space-x-28 pb-2 px-4 md:px-0">
        <h1 className="text-5xl lg:text-9xl font-extrabold tracking-tighter">
          BREAK <br />
          THE ORDINARY.
        </h1>
        <p className="text-muted-foreground md:inline-flex hidden">
          Trends.Fashion.Limited Drops.
        </p>
      </div>
      <div className="">
        <div className="border-y-[6px] pb-2 border-white"></div>
        <br />
        <div className="border-t-[2px] border-white"></div>
      </div>
    </div>
  );
}
