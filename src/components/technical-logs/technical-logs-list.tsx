import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { technicalLogs } from "./tecnical-logs";
import {
  TechnicalLogDate,
  TechnicalLogItem,
  TechnicalLogTitle,
} from "./technical-log-item";

const variants = cva(["w-full gap-2"], {
  variants: {
    container: {
      fullPage: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
      section: "flex items-stretch",
    },
  },
  defaultVariants: {
    container: "section",
  },
});

interface Props {
  variant?: VariantProps<typeof variants>["container"];
}

export const TechnicalLogsList: FC<Props> = ({ variant = "section" }) => {
  return (
    <div className={cn(variants({ container: variant }))}>
      {technicalLogs.map((log) => (
        <TechnicalLogItem
          key={log.id}
          to={`/technical-logs/${log.slug}`}
          className={cn(variant === "fullPage" && "md:w-full")}
        >
          <TechnicalLogTitle>{log.title}</TechnicalLogTitle>
          <TechnicalLogDate date={new Date(log.date)} />
        </TechnicalLogItem>
      ))}
    </div>
  );
};
