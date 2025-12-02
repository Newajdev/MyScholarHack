"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SecoundryBtn from "./SecoundryBtn"
import PrimaryBtn from "./PrimaryBtn"

export default function Navbar() {
  const pathName = usePathname();

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
    <nav className="flex items-center justify-between pt-8">
      <div className="text-white flex items-center gap-4">
        <Image src={"/logo.png"} height={48} width={48} alt="MyScholarHack" />
        <h1 className="text-4xl font-semibold">MyScholarHack</h1>
      </div>
      <ul className="text-white text-base font-medium flex items-center gap-10">
        {Nablink.map((link, idx) => (
          <li
            className={`${pathName === link.pathName && "text-[#FFCA42]"}`}
            key={idx}
          >
            <Link href={link.pathName}>{link.Tiltle}</Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-4">
        <Link href={"/authentication/signin"}><SecoundryBtn style={"rounded-full hover:text-black"} title={"Sign in"}/></Link>
        <Link href={"/authentication/register"}><PrimaryBtn style={"rounded-full"} title={"Register"}/></Link>
      </div>
    </nav>
  );
}
