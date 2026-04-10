import { DocsTabNav } from "@/components/docs-tab-nav";
import type { ReactNode } from "react";

export default function DocsRootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <DocsTabNav />
      {children}
    </div>
  );
}
