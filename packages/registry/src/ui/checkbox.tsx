"use client";

import * as React from "react";
import { Checkbox as HeadlessCheckbox } from "@headlessui/react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithoutRef<typeof HeadlessCheckbox>, "children"> {
  className?: string;
}

const Checkbox = React.forwardRef<HTMLSpanElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <HeadlessCheckbox
      ref={ref}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:bg-primary data-[checked]:text-primary-foreground",
        className
      )}
      {...props}
    >
      {({ checked }) => (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-full w-full p-0.5"
          initial={false}
          animate={{ pathLength: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.path d="M20 6 9 17l-5-5" />
        </motion.svg>
      )}
    </HeadlessCheckbox>
  )
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
