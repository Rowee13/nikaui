import * as React from "react";
import { cn } from "../lib/utils";

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number;
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 16 / 9, className, style, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative w-full overflow-hidden", className)}
      style={{ ...style, paddingBottom: `${(1 / ratio) * 100}%` }}
      {...props}
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  )
);
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
