export default function SecoundryBtn
({title, style}) {
  return <button className={`font-medium text-base text-white border-2 border-[#FFFFFF33] bg-transparent hover:border-transparent hover:bg-[#FFCA42] duration-300 py-3.5 px-6 ${style}`}>{title}</button>;
}
