"use client";

import Container from "../component/LandingComponent/Container";
import SectionHead from "../component/LandingComponent/SectionHead";
import IconicBtn from "../component/LandingComponent/IconicBtn";
import { Icon } from "@iconify/react";
import ProblemPoint from "../component/LandingComponent/ProblemPoint";

export default function Home() {
  return (
    <Container>
      <section className="pt-[120px] pb-[72px] flex flex-col items-center justify-center gap-y-[60]">
        <SectionHead
          Status={"Problem"}
          statusStyle={"text-[#D50000] border-[#D50000] "}
          title={"Scholarship Essays Shouldn't Feel Impossible"}
          description={"Create authentic essays using your voice-matched AI."}
        />

        <div className="w-full grid grid-cols-3 gap-x-[72px] ">
          <ProblemPoint
            icon={"streamline-ultimate:science-molecule"}
            anim={"group-hover:animate-spin"}
            title={"The Struggle"}
            description={
              "You're staring at a blank page. The deadline is  approaching. You know you have great stories to tell, but the words won't come.  Sound familiar?"
            }
          />
          <ProblemPoint
            icon={"hugeicons:ai-idea"}
            anim={"group-hover:animate-bounce"}
            title={"The Generic Solution"}
            description={
              "Other AI tools just generate generic essays that  sound like everyone else's. Scholarship reviewers can spot them a mile away—and  so can AI detectors."
            }
          />
          <ProblemPoint
            icon={"fluent-mdl2:time-entry"}
            anim={"group-hover:animate-bounce"}
            title={"The Time Crunch"}
            description={
              "You want to apply to 20+ scholarships, but writing  unique essays for each one takes hours. Who has that kind of time?"
            }
          />
        </div>
      </section>
    </Container>
  );
}
