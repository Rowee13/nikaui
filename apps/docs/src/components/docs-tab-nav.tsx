"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Guide", href: "/docs/guide" },
  { label: "Components", href: "/docs/components" },
];

export function DocsTabNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 border-b px-4 pt-2">
      {tabs.map((tab) => {
        const isActive = pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`relative px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "text-fd-foreground"
                : "text-fd-muted-foreground hover:text-fd-foreground"
            }`}
          >
            {tab.label}
            {isActive && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 bg-fd-primary" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
