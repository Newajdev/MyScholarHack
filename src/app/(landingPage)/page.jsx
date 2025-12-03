"use client";

import Container from "../component/LandingComponent/Container";
import SectionHead from "../component/LandingComponent/SectionHead";


export default function Home() {
  return (
    <Container>
      <section className="pt-[120px] pb-[72px] flex flex-col items-center justify-center gap-y-[60]">
        <SectionHead 
        Status={"Problem"}
        statusStyle={"text-[#0D8E55] border-[#0D8E55]"}
        title={"Scholarship Essays Shouldn't Feel Impossible"}
        description={"Create authentic essays using your voice-matched AI."}/>
        <div className="w-full border"> 2 </div>
      </section>
    </Container>
  );
}
