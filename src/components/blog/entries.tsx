import { ReactNode } from "react";

import Week3 from "@/mdx/blog-entries/spark-week-3.mdx";
import Week4 from "@/mdx/blog-entries/spark-week-4.mdx";
import Week5 from "@/mdx/blog-entries/spark-week-5.mdx";
import Week6 from "@/mdx/blog-entries/spark-week-6.mdx";
import Week7 from "@/mdx/blog-entries/spark-week-7.mdx";
import Week8 from "@/mdx/blog-entries/spark-week-8.mdx";
import Week9 from "@/mdx/blog-entries/spark-week-9.mdx";
import Week10 from "@/mdx/blog-entries/spark-week-10.mdx";
import Week11 from "@/mdx/blog-entries/spark-week-11.mdx";
import Week12 from "@/mdx/blog-entries/spark-week-12.mdx";
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
    date: "2024-07-29",
    slug: "spark-week-3",
    content: <Week3 components={{ ...mdxComponents }} />,
    estimatedTime: 5,
  },
  {
    id: 4,
    title: "Spark Week 4 Essay",
    date: "2024-08-06",
    slug: "spark-week-4",
    content: <Week4 components={{ ...mdxComponents }} />,
    estimatedTime: 3,
  },
  {
    id: 5,
    title: "Spark Week 5 Essay",
    date: "2024-08-12",
    slug: "spark-week-5",
    content: <Week5 components={{ ...mdxComponents }} />,
    estimatedTime: 3,
  },
  {
    id: 6,
    title: "Spark Week 6 Essay",
    date: "2024-08-17",
    slug: "spark-week-6",
    content: <Week6 components={{ ...mdxComponents }} />,
    estimatedTime: 4,
  },
  {
    id: 7,
    title: "Spark Week 7 Essay",
    date: "2024-08-27",
    slug: "spark-week-7",
    content: <Week7 components={{ ...mdxComponents }} />,
    estimatedTime: 2,
  },
  {
    id: 8,
    title: "Spark Week 8 Essay",
    date: "2024-09-01",
    slug: "spark-week-8",
    content: <Week8 components={{ ...mdxComponents }} />,
    estimatedTime: 2,
  },
  {
    id: 9,
    title: "Spark Week 9 Essay",
    date: "2024-09-08",
    slug: "spark-week-9",
    content: <Week9 components={{ ...mdxComponents }} />,
    estimatedTime: 3,
  },
  {
    id: 10,
    title: "Spark Week 10 Essay",
    date: "2024-09-16",
    slug: "spark-week-10",
    content: <Week10 components={{ ...mdxComponents }} />,
    estimatedTime: 3,
  },
  {
    id: 11,
    title: "Spark Week 11 Essay",
    date: "2024-09-22",
    slug: "spark-week-11",
    content: <Week11 components={{ ...mdxComponents }} />,
    estimatedTime: 3,
  },
  {
    id: 12,
    title: "Spark Week 12 Essay",
    date: "2024-10-01",
    slug: "spark-week-12",
    content: <Week12 components={{ ...mdxComponents }} />,
    estimatedTime: 3,
  },
];
