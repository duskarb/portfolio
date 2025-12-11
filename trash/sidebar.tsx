"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Folder } from "lucide-react";

const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: Folder },
    { name: "About", href: "/about", icon: User },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex flex-col w-[260px] h-screen fixed left-0 top-0 bg-[var(--sidebar-background)] border-r border-black z-50 pt-10 pb-6 px-4">
            <div className="flex items-center gap-2 mb-8 px-2">
                <span className="text-lg font-normal">Portfolio</span>
            </div>

            <div className="flex-1 space-y-1">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href as any}
                            className={`flex items-center gap-3 px-3 py-2 text-sm font-normal ${
                                isActive
                                    ? "bg-black text-white"
                                    : "text-black hover:bg-gray-200"
                            }`}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </Link>
                    );
                })}
            </div>

            <div className="mt-auto px-3 py-4 border-t border-black">
                <p className="text-xs text-black">
                    Designed by Namkyu
                </p>
            </div>
        </div>
    );
}
