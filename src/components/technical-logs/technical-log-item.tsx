import { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

import { cn } from "@/lib/utils";
import { format } from "date-fns";

export const TechnicalLogItem: FC<LinkProps> = ({ className, ...props }) => {
  return (
    <Link
      className={cn(
        "group relative flex flex-col w-full min-h-24 overflow-hidden p-2 pb-4 rounded-md bg-encora-blue/10 border-2 border-encora-blue transition-all hover:scale-105 hover:bg-encora-blue/15 focus:scale-95 md:w-1/3",
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

export const TechnicalLogTitle: FC<TitleProps> = ({ className, children }) => {
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

export const TechnicalLogDate: FC<DateProps> = ({ className, date }) => {
  return (
    <span
      className={cn(
        "absolute bottom-1 right-0 w-1/2 text-center bg-encora-blue text-white text-base transition-all",
        className
      )}
    >
      {format(date, "PP")}
    </span>
  );
};
