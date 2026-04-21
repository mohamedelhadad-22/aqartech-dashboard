"use client";
import { Building, Home, Logs } from "lucide-react";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import navigation from "@/constants/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const NavLink = navigation.map((link) => {
    const isActive = pathname === link.path;

    const Icon = link.icon;

    return (
      <li key={link.path}>
        <Link
          href={link.path}
          className={`flex items-center gap-2 rounded-md px-4 py-2 transition-all duration-300 ease-in-out
             ${
               isActive
                 ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                 : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
             }`}
        >
          <Icon className="h-5 w-5" />
          <span>{link.title}</span>
        </Link>
      </li>
    );
  });

  return (
    <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between border-b border-gray-200 p-4">
        <span className="text-xl font-bold">Aqartech</span>
        <Logs className="cursor-pointer" />
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">{NavLink}</ul>
      </nav>
    </aside>
  );
}
