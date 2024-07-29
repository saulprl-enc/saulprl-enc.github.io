import { useLoaderData } from "react-router-dom";

import { blogEntries, TBlogEntry } from "@/components/blog/entries";

export function blogEntryLoader({ params }) {
  if (!params || !params.entrySlug) {
    throw new Error("Received unexpected params");
  }

  const entry = blogEntries.find((entry) => entry.slug === params.entrySlug);

  if (!entry) {
    throw new Error("Couldn't find the specified resource");
  }

  return entry;
}

export const BlogEntry = () => {
  const data = useLoaderData() as TBlogEntry;

  return (
    <div className="w-full flex items-start justify-start pt-2 pb-32 px-2">
      {data.content}
    </div>
  );
};
