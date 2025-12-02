"use client"

import { Icon } from "@iconify/react";

export default function PrimaryBtn({title, style, hendleClick, icon, children}) {
  return <button onClick={hendleClick} className={`font-medium text-base text-[#1B1B1B] bg-[#FFCA42] py-3.5 px-6 hover:bg-[#ffc942c2] ${icon && "flex items-center justify-center gap-3 hover:gap-5"} duration-300 ${style}`}>{title}
  <Icon icon={icon} width="20" height="20" />
  </button>;
}
