"use client";
import HeaderBG from "./HeaderBG";
import Container from "./Container";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import Title from "./Title";
import PrimaryBtn from "./PrimaryBtn";
import SecoundryBtn from "./SecoundryBtn";

export default function Header() {
  const Pathname = usePathname();

  if (!Pathname.startsWith("/authentication")) {
    return (
      <HeaderBG Height={"h-[1152px]"}>
        <Container>
          <Navbar />
          <div className="w-full flex items-center justify-center">
            <div className="pt-20 pb-14 flex flex-col w-[1063px] justify-center">
              <div className="flex justify-center">
                <Title title={"Trusted by thousands of students"} />
              </div>
              <h1 className="font-semibold text-[64px] text-white text-center py-4">
                Write Scholarship Essays That Sound Like You—Because They Are
                You
              </h1>
              <p className="w-[683px] mx-auto text-center text-white/70 text-xl">
                MyScholarHack uses your real stories, achievements, and writing
                voice to help you create authentic scholarship essays that win.
                No made-up experiences. No generic AI fluff. Just your unique
                story, told powerfully
              </p>
              <div className="pt-10 flex gap-4 justify-center w-full">
                <PrimaryBtn title={"Start Free Trial"} icon={"line-md:arrow-right"} style={"rounded-full"}/>
                <SecoundryBtn title={"How to Work"} icon={"line-md:arrow-right"} style={"rounded-full"}/>
              </div>
            </div>
          </div>
        </Container>
      </HeaderBG>
    );
  }
}
