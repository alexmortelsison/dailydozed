import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-between">
        <h2 className="text-9xl tracking-tighter">DD</h2>
        <div className="pl-4 flex-1 items-center pt-12">
          <p>Unleash//</p>
          <p>The future of streetwear.//</p>
        </div>
        <Image
          src={"/hero.png"}
          alt="hero"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
      <div className="flex pt-48 items-end pb-4 space-x-28">
        <h1 className="text-9xl font-extrabold tracking-tighter">
          BREAK <br />
          THE ORDINARY.
        </h1>
        <p className="text-muted-foreground">Trends.Fashion.Limited Drops.</p>
      </div>
    </div>
  );
}
