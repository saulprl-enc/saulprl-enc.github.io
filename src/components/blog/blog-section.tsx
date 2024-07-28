import { Section } from "../section/section";
import { BlogItem, BlogItemDate, BlogItemTitle } from "./blog-item";

export const BlogSection = () => {
  return (
    <Section>
      <div className="w-full flex flex-col gap-6 border-l-2 border-encora-red pl-2">
        <h2 className="text-2xl font-bold text-encora-red">Blog</h2>
        <p>Here, I&apos;ll be documenting my journey via blog entries.</p>
        <div className="w-full flex items-stretch gap-2 px-2">
          <BlogItem to="#">
            <BlogItemTitle>Spark Week 3</BlogItemTitle>
            <BlogItemDate date={new Date(2024, 6, 28)} />
          </BlogItem>
        </div>
      </div>
    </Section>
  );
};
