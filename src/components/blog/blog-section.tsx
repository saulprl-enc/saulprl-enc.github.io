import { LinkButton } from "../button/link-button";
import { Section } from "../section/section";
import { BlogItem, BlogItemDate, BlogItemTitle } from "./blog-item";
import { blogEntries } from "./entries";

export const BlogSection = () => {
  return (
    <Section>
      <div className="w-full flex flex-col gap-6 border-l-2 border-encora-red pl-2">
        <h2 className="text-2xl font-bold text-encora-red">Blog</h2>
        <p>Here, I&apos;ll be documenting my journey via blog entries.</p>
        <div className="w-full flex items-stretch gap-2 px-2">
          {blogEntries.map((entry) => (
            <BlogItem key={entry.id} to={`/blog/${entry.slug}`}>
              <BlogItemTitle>{entry.title}</BlogItemTitle>
              <BlogItemDate date={new Date(entry.date)} />
            </BlogItem>
          ))}
        </div>
        {blogEntries.length < 3 && (
          <div className="w-full flex items-center justify-center">
            <LinkButton to="/blog" className="bg-encora-red">
              See more
            </LinkButton>
          </div>
        )}
      </div>
    </Section>
  );
};
