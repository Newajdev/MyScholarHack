"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLink_Student, navLink_Admin } from "./navigationConfig";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  const isStudent = pathname.startsWith("/dashboard/student");
  const navLink = isStudent ? navLink_Student : navLink_Admin;

  return (
    <aside className="w-[270px] min-h-screen bg-white p-6 border-r border-gray-200 flex flex-col">
      {/* Logo Section */}
      <div className="mb-8 flex items-center gap-3">
        <Image
          src={"/logo.png"}
          width={48}
          height={48}
          alt="MyScholar logo"
          className="shrink-0"
        />
        <h3 className="text-2xl font-bold text-gray-900">MyScholar</h3>
      </div>

      <nav className="flex-1">
        <div className="space-y-3">
          {navLink.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${pathname === link.path
                  ? "bg-[#FFFAEC] text-gray-900 font-semibold border-l-4 border-[#FFCA42]"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-normal"
                }`}
            >
              {link.icon && <Icon icon={link.icon} height={24} width={24} />}
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
}
