import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";

import { cn } from "@/lib/utils";

export const LinkButton: FC<LinkProps> = ({ className, ...props }) => {
  return (
    <Link
      className={cn(
        "p-2 px-4 flex flex-row items-center rounded bg-primary text-white font-bold transition-all hover:brightness-110 focus:brightness-90",
        className
      )}
      {...props}
    />
  );
};
