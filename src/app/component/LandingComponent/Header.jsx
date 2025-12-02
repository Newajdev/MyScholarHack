"use client";
import HeaderBG from "./HeaderBG";
import Container from "./Container";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import Title from "./Title";

export default function Header() {
  const Pathname = usePathname();

  if (!Pathname.startsWith("/authentication")) {
    return (
      <HeaderBG Height={"h-[1152px]"}>
        <Container>
          <Navbar />
          <Title/>
        </Container>
      </HeaderBG>
    );
  }
}
