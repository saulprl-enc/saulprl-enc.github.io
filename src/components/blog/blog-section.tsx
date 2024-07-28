import { Section } from "../section/section";

export const BlogSection = () => {
  return (
    <Section>
      <div className="flex flex-col gap-6 border-l-2 border-encora-red pl-2">
        <h2 className="text-2xl font-bold text-encora-red">
          Blog
        </h2>
        <p>Here, I&apos;ll be documenting my journey via blog entries.</p>
      </div>
    </Section>
  );
};
