'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/' as const, label: 'Home' },
  { href: '/projects' as const, label: 'Projects' },
  { href: '/about' as const, label: 'About' }
];

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container flex items-center justify-between py-2 md:py-5">
        <Link
          href="/"
          className="text-xl md:text-[35px] font-normal text-black"
        >
          Namkyu Yeo
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg md:text-[35px] font-normal text-black ${
                  active ? 'underline' : 'hover:underline'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
