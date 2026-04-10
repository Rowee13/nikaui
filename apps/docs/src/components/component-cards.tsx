import Link from "next/link";

interface ComponentInfo {
  name: string;
  slug: string;
  description: string;
  category: "foundation" | "interactive";
}

const components: ComponentInfo[] = [
  // Foundation
  {
    name: "Button",
    slug: "button",
    description: "Animated button with multiple variants and sizes.",
    category: "foundation",
  },
  {
    name: "Badge",
    slug: "badge",
    description: "Labels and status indicators.",
    category: "foundation",
  },
  {
    name: "Card",
    slug: "card",
    description: "Container with header, content, and footer.",
    category: "foundation",
  },
  {
    name: "Input",
    slug: "input",
    description: "Styled text input field.",
    category: "foundation",
  },
  {
    name: "Label",
    slug: "label",
    description: "Form field label with peer styling.",
    category: "foundation",
  },
  {
    name: "Separator",
    slug: "separator",
    description: "Visual divider for content sections.",
    category: "foundation",
  },
  {
    name: "Skeleton",
    slug: "skeleton",
    description: "Placeholder loading animation.",
    category: "foundation",
  },
  {
    name: "Spinner",
    slug: "spinner",
    description: "Loading spinner and animated dots.",
    category: "foundation",
  },
  {
    name: "Avatar",
    slug: "avatar",
    description: "User avatar with image and fallback.",
    category: "foundation",
  },
  {
    name: "Aspect Ratio",
    slug: "aspect-ratio",
    description: "Maintain consistent content ratios.",
    category: "foundation",
  },
  // Interactive
  {
    name: "Dialog",
    slug: "dialog",
    description: "Modal dialog with animated overlay.",
    category: "interactive",
  },
  {
    name: "Alert Dialog",
    slug: "alert-dialog",
    description: "Confirmation dialog with actions.",
    category: "interactive",
  },
  {
    name: "Dropdown Menu",
    slug: "dropdown-menu",
    description: "Menu with items and separators.",
    category: "interactive",
  },
  {
    name: "Popover",
    slug: "popover",
    description: "Floating panel anchored to a trigger.",
    category: "interactive",
  },
  {
    name: "Tabs",
    slug: "tabs",
    description: "Tabbed interface with transitions.",
    category: "interactive",
  },
  {
    name: "Accordion",
    slug: "accordion",
    description: "Collapsible content panels.",
    category: "interactive",
  },
  {
    name: "Select",
    slug: "select",
    description: "Dropdown select with options.",
    category: "interactive",
  },
  {
    name: "Combobox",
    slug: "combobox",
    description: "Autocomplete with search filtering.",
    category: "interactive",
  },
  {
    name: "Switch",
    slug: "switch",
    description: "Toggle with spring animation.",
    category: "interactive",
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    description: "Checkbox with animated checkmark.",
    category: "interactive",
  },
  {
    name: "Tooltip",
    slug: "tooltip",
    description: "Hover/focus tooltip with positioning.",
    category: "interactive",
  },
  {
    name: "Toast",
    slug: "toast",
    description: "Notification toasts with auto-dismiss.",
    category: "interactive",
  },
];

export function ComponentCards() {
  const foundation = components.filter((c) => c.category === "foundation");
  const interactive = components.filter((c) => c.category === "interactive");

  return (
    <div className="space-y-10">
      <section>
        <h2 className="mb-4 text-xl font-semibold">Foundation</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {foundation.map((component) => (
            <ComponentCard key={component.slug} {...component} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Interactive</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interactive.map((component) => (
            <ComponentCard key={component.slug} {...component} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ComponentCard({ name, slug, description }: ComponentInfo) {
  return (
    <Link
      href={`/docs/components/${slug}`}
      className="group rounded-lg border bg-fd-card p-4 transition-colors hover:border-fd-primary/50 hover:bg-fd-accent"
    >
      <h3 className="font-medium group-hover:text-fd-primary">{name}</h3>
      <p className="mt-1 text-sm text-fd-muted-foreground">{description}</p>
    </Link>
  );
}
