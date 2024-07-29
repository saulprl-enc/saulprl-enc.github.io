import {
  BlogItem,
  BlogItemDate,
  BlogItemTitle,
} from "@/components/blog/blog-item";
import { blogEntries } from "@/components/blog/entries";
import { Section } from "@/components/section/section";

export const BlogPage = () => {
  return (
    <Section>
      <div className="w-full flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-encora-red">Blog</h1>
        <p>Here, I&apos;ll be documenting my journey via blog entries.</p>
        <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          {blogEntries.map((entry) => (
            <BlogItem
              key={entry.id}
              to={`/blog/${entry.slug}`}
              className="md:w-full"
            >
              <BlogItemTitle>{entry.title}</BlogItemTitle>
              <BlogItemDate date={new Date(entry.date)} />
            </BlogItem>
          ))}
        </div>
      </div>
    </Section>
  );
};
