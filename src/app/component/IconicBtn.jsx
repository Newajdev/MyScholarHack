import { Icon } from "@iconify/react";
export default function IconicBtn({ style, icon }) {
  return (
    <div className={`px-6 py-6 ${style}`}>
      <Icon icon={icon} width="32" height="32" />
    </div>
  );
}
