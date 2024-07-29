import { BlogList } from "./blog-list";
import { blogEntries } from "./entries";
import { LinkButton } from "../button/link-button";
import { Section } from "../section/section";

export const BlogSection = () => {
  return (
    <Section>
      <div className="w-full flex flex-col gap-6 border-2 border-encora-red rounded-md p-2">
        <h2 className="text-3xl font-bold text-encora-red">Blog</h2>
        <p>Here, I&apos;ll be documenting my journey via blog entries.</p>
        <BlogList variant="section" />
        {blogEntries.length > 3 && (
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
