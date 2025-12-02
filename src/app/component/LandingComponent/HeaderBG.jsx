import React, { Children } from "react";

export default function HeaderBG({Height, children}) {
  return (
    <section
      style={{
        backgroundImage: "url('/HeroSection.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`w-full ${Height}`}
    >
        {children}
    </section>
  );
}
