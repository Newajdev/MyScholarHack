import { usePathname } from "next/navigation";
import React, { Children } from "react";

export default function HeaderBG({Height, children}) {
  const pathName = usePathname()

  return (
    <section
      style={{
        backgroundImage: "url('/HeroSection.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`w-full ${pathName === "/" ? "h-[1152px]" : pathName === "/about" ? "h-[722px]":"h-[519px]"}`}
    >
        {children}
    </section>
  );
}
