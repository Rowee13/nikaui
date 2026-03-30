"use client";

import * as React from "react";
import {
  Popover as HeadlessPopover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

const Popover = HeadlessPopover;

const PopoverTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof PopoverButton>
>(({ className, ...props }, ref) => (
  <PopoverButton ref={ref} className={cn(className)} {...props} />
));
PopoverTrigger.displayName = "PopoverTrigger";

const PopoverContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    align?: "start" | "center" | "end";
  }
>(({ className, align = "center", children, ...props }, ref) => (
  <PopoverPanel
    ref={ref}
    anchor={
      align === "start"
        ? "bottom start"
        : align === "end"
          ? "bottom end"
          : "bottom"
    }
    className={cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
      className
    )}
    {...props}
  >
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children as React.ReactNode}
    </motion.div>
  </PopoverPanel>
));
PopoverContent.displayName = "PopoverContent";

export { Popover, PopoverTrigger, PopoverContent };
