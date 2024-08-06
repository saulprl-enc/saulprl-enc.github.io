import { cva, VariantProps } from "class-variance-authority";
import {
  BlogItem,
  BlogItemDate,
  BlogItemEstimation,
  BlogItemTitle,
} from "./blog-item";
import { blogEntries } from "./entries";
import { FC } from "react";
import { cn } from "@/lib/utils";

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

export const BlogList: FC<Props> = ({ variant = "section" }) => {
  const sortedEntries = blogEntries
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, variant === "section" ? 3 : undefined);

  return (
    <div className={cn(variants({ container: variant }))}>
      {sortedEntries.map((entry) => (
        <BlogItem
          key={entry.id}
          to={`/blog/${entry.slug}`}
          className={cn(variant === "fullPage" && "md:w-full")}
        >
          <BlogItemTitle>{entry.title}</BlogItemTitle>
          <BlogItemDate date={new Date(entry.date)} />
          <BlogItemEstimation>{`${entry.estimatedTime} minute read`}</BlogItemEstimation>
        </BlogItem>
      ))}
    </div>
  );
};
