"use client";

import * as React from "react";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  MenuSeparator,
} from "@headlessui/react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const DropdownMenu = Menu;

const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof MenuButton>
>(({ className, ...props }, ref) => (
  <MenuButton ref={ref} className={cn(className)} {...props} />
));
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    align?: "start" | "end";
  }
>(({ className, align = "start", children, ...props }, ref) => (
  <MenuItems
    ref={ref}
    anchor={align === "end" ? "bottom end" : "bottom start"}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      className
    )}
    {...props}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.15 }}
    >
      {children as React.ReactNode}
    </motion.div>
  </MenuItems>
));
DropdownMenuContent.displayName = "DropdownMenuContent";

const DropdownMenuItem = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof MenuItem> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenuItem
    ref={ref}
    as="button"
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[focus]:bg-accent data-[focus]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = "DropdownMenuItem";

const DropdownMenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof MenuSeparator>
>(({ className, ...props }, ref) => (
  <MenuSeparator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { inset?: boolean }) => (
  <div
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
);

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
};
