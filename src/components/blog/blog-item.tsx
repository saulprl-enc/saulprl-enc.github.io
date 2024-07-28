import { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

import { cn } from "@/lib/utils";
import { format } from "date-fns";

export const BlogItem: FC<LinkProps> = ({ className, ...props }) => {
  return (
    <Link
      className={cn(
        "group relative flex flex-col w-full min-h-24 overflow-hidden p-2 pb-4 rounded-md bg-encora-red/10 border-2 border-encora-red transition-all hover:scale-105 hover:bg-encora-red/15 focus:scale-95 md:w-1/3",
        className
      )}
      {...props}
    />
  );
};

interface TitleProps {
  className?: string;
  children: ReactNode;
}

export const BlogItemTitle: FC<TitleProps> = ({ className, children }) => {
  return (
    <h3 className={cn("font-bold line-clamp-2 text-xl", className)}>
      {children}
    </h3>
  );
};

interface DateProps {
  date: Date;
  className?: string;
}

export const BlogItemDate: FC<DateProps> = ({ className, date }) => {
  return (
    <span
      className={cn(
        "absolute bottom-1 right-0 w-1/2 text-center bg-encora-red text-white text-base transition-all group-hover:w-full",
        className
      )}
    >
      {format(date, "PP")}
    </span>
  );
};
