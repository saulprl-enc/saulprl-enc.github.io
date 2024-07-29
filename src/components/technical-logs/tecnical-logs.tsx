import { ReactNode } from "react";

import { mdxComponents } from "@/mdx/components/components";
import Permutations from "@/mdx/technical-logs/permutations.mdx";

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
];
