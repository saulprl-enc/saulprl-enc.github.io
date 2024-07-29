import { BlogList } from "@/components/blog/blog-list";
import { Section } from "@/components/section/section";

export const BlogPage = () => {
  return (
    <Section>
      <div className="w-full flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-encora-red">Blog</h1>
        <p>Here, I&apos;ll be documenting my journey via blog entries.</p>
        <BlogList variant="fullPage" />
      </div>
    </Section>
  );
};
