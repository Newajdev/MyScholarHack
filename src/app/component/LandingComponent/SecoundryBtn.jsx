import { Icon } from "@iconify/react";

export default function SecoundryBtn
({title, style, hendleClick, icon}) {
  return   <button onClick={hendleClick} className={`font-medium text-base text-white border-2 border-[#FFFFFF33] bg-[#FFFFFF14] hover:border-transparent hover:bg-[#FFCA42] hover:text-black ${icon && "flex items-center justify-center gap-3 hover:gap-5"} duration-300 py-3.5 px-6 ${style}`}>{title}
    <Icon icon={icon} width="20" height="20" />
    </button>;
}
