"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "[Home]",
    href: "/",
  },
  {
    name: "[Men]",
    href: "/men",
  },
  {
    name: "[Women]",
    href: "/women",
  },
  {
    name: "[About]",
    href: "/about",
  },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={120}
          height={120}
          className="object-cover rounded-full"
        />
        <p className="text-xl font-extrabold pl-2">
          daily<span className="text-[#fddf5b]">dozed.</span>
        </p>
      </div>
      <div className="flex space-x-4">
        {navLinks.map((link) => (
          <div key={link.href} className="">
            <Link
              href={link.href}
              className={`${
                pathName === link.href
                  ? "text-[#fddf5b] font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="leading-0">
        <h1 className="font-semibold text-lg">The Future of Streetwear</h1>
        <br />
        <p className="text-sm text-muted-foreground">
          Elevate your style. Challenge the ordinary.
        </p>
      </div>
    </div>
  );
}
