import { ReactNode } from "react";

import Week3 from "@/data/blog-entries/spark-week-3.mdx";

export type TBlogEntry = {
  id: number;
  title: string;
  date: string;
  slug: string;
  content: ReactNode;
};

export const blogEntries: Array<TBlogEntry> = [
  {
    id: 3,
    title: "Spark Week 3",
    date: "2024-07-28",
    slug: "spark-week-3",
    content: <Week3 />,
  },
];
