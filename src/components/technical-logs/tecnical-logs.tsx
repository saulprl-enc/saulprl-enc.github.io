import { ReactNode } from "react";

import { mdxComponents } from "@/mdx/components/components";
import Permutations from "@/mdx/technical-logs/permutations.mdx";
import BreakableToy from "@/mdx/technical-logs/breakable-toy.mdx";
import BreakableToy2 from "@/mdx/technical-logs/breakable-toy-2.mdx";

export type TTechnicalLog = {
  id: number;
  title: string;
  date: string;
  slug: string;
  content: ReactNode;
};

export const technicalLogs: Array<TTechnicalLog> = [
  {
    id: 1,
    title: "Permutations",
    date: "2024-07-28",
    slug: "permutations",
    content: <Permutations components={{ ...mdxComponents }} />,
  },
  {
    id: 2,
    title: "Breakable Toy",
    date: "2024-08-14",
    slug: "breakable-toy",
    content: <BreakableToy components={{ ...mdxComponents }} />,
  },
  {
    id: 3,
    title: "Breakable Toy 2",
    date: "2024-09-05",
    slug: "breakable-toy-2",
    content: <BreakableToy2 components={{ ...mdxComponents }} />,
  },
];
