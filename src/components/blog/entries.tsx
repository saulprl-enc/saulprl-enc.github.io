import { ReactNode } from "react";

import Week3 from "@/mdx/blog-entries/spark-week-3.mdx";
import { mdxComponents } from "@/mdx/components/components";

export type TBlogEntry = {
  id: number;
  title: string;
  date: string;
  slug: string;
  content: ReactNode;
  estimatedTime: number;
};

export const blogEntries: Array<TBlogEntry> = [
  {
    id: 3,
    title: "Spark Week 3 Essay",
    date: "2024-07-28",
    slug: "spark-week-3",
    content: <Week3 components={{ ...mdxComponents }} />,
    estimatedTime: 5,
  },
];
