import { FC, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const Section: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        "w-full flex flex-col md:flex-row items-center gap-4 text-muted p-2",
        className
      )}
      {...props}
    />
  );
};
