import { cn } from "cn";
import { Loader, Loader2Icon, SquareActivity } from "lucide-react";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };

function BitRateSpinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <SquareActivity
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-pulse", className)}
      {...props}
    />
  );
}

export { BitRateSpinner };

function SpacedSpinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { SpacedSpinner };
