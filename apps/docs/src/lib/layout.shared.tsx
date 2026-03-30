import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Nika UI",
    },
    links: [
      {
        text: "Docs",
        url: "/docs",
        active: "nested-url",
      },
      {
        text: "Components",
        url: "/docs/components/button",
        active: "nested-url",
      },
    ],
    githubUrl: "https://github.com/nicaui/nikaui",
  };
}
