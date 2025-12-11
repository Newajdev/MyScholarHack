"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SecoundryBtn from "./SecoundryBtn";
import PrimaryBtn from "./PrimaryBtn";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const Nablink = [
    {
      Tiltle: "About",
      pathName: "/about",
    },
    {
      Tiltle: "Feature",
      pathName: "/feature",
    },
    {
      Tiltle: "Pricing",
      pathName: "/pricing",
    },
    {
      Tiltle: "How to Work",
      pathName: "/how-to-work",
    },
    {
      Tiltle: "FAQ",
      pathName: "/faq",
    },
  ];

  return (
    <nav className="flex items-center justify-between pt-8 relative">
      <div className="text-white flex items-center gap-4">
        <Link href="/">
          <Image src={"/logo.png"} height={48} width={48} alt="MyScholarHack" />
        </Link>
        <Link href="/">
          <h1 className="text-4xl font-semibold">MyScholarHack</h1>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex text-white text-base font-medium items-center gap-10">
        {Nablink.map((link, idx) => (
          <li
            className={`${pathName === link.pathName && "text-[#FFCA42]"}`}
            key={idx}
          >
            <Link href={link.pathName}>{link.Tiltle}</Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex justify-center gap-4">
        <Link href={"/authentication/signin"}>
          <SecoundryBtn
            style={"rounded-full hover:text-black"}
            title={"Sign in"}
          />
        </Link>
        <Link href={"/authentication/register"}>
          <PrimaryBtn style={"rounded-full"} title={"Register"} />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <Icon
            icon={isOpen ? "mingcute:close-fill" : "mingcute:menu-fill"}
            width="32"
            height="32"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#1A1A1A] z-40 flex flex-col items-center justify-center gap-8 lg:hidden">
          <ul className="text-white text-xl font-medium flex flex-col items-center gap-8">
            {Nablink.map((link, idx) => (
              <li
                className={`${pathName === link.pathName && "text-[#FFCA42]"}`}
                key={idx}
              >
                <Link href={link.pathName} onClick={() => setIsOpen(false)}>
                  {link.Tiltle}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 items-center">
            <Link href={"/authentication/signin"} onClick={() => setIsOpen(false)}>
              <SecoundryBtn
                style={"rounded-full hover:text-black"}
                title={"Sign in"}
              />
            </Link>
            <Link href={"/authentication/register"} onClick={() => setIsOpen(false)}>
              <PrimaryBtn style={"rounded-full"} title={"Register"} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
