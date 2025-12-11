"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Folder, Mail } from "lucide-react";

const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: Folder },
    { name: "About", href: "/about", icon: User },
    { name: "Contact", href: "/contact", icon: Mail },
];

export function BottomTabs() {
    const pathname = usePathname();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 h-[83px] bg-white border-t border-black z-50 pb-5">
            <div className="flex justify-around items-center h-full">
                {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href as any}
                            className={`flex flex-col items-center justify-center w-full h-full ${
                                isActive ? "text-black" : "text-black"
                            }`}
                        >
                            <item.icon
                                className={`w-6 h-6 mb-1 ${
                                    isActive ? "opacity-100" : "opacity-50"
                                }`}
                            />
                            <span
                                className={`text-[10px] font-normal ${
                                    isActive ? "opacity-100" : "opacity-50"
                                }`}
                            >
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
