import IconicBtn from "./IconicBtn";

export default function SolutionSteps({ icon, title, descrtion, step }) {
  const SolutionStep = [1, 2, 3, 4];
  return (
    <div className="w-full flex items-center gap-8 ">
      <div className="w-[10%] flex flex-col justify-center items-center gap-2">
        <IconicBtn
          icon={icon}
          style={"bg-[#FFCA42] inline-flex rounded-full"}
        />
        <div className="w-1 h-[61px] bg-linear-to-b from-[#FBA919]"></div>
      </div>
      <div className="w-[90%] relative">
        <h3 className="bg-[#FFCA42] px-9 py-1 inline-flex absolute right-7 top-1">
          Step {step}
        </h3>
        <div className="border-2 border-[#FFE7A8] bg-[#F9F9F9] mt-[22px] p-6 rounded-2xl">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="py-4 text-xl leading-[145%]">{descrtion}</p>

          <div className="grid grid-cols-4 gap-1.5">
            {SolutionStep.map((_, idx) => (
              <p
                key={idx}
                className={`w-full h-1.5 ${
                  step >= idx + 1 ? "bg-[#E8B83C]" : " bg-[#1B1B1B]"
                } `}
              ></p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
