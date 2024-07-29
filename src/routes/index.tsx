import { BlogSection } from "@/components/blog/blog-section";
import { Hero } from "@/components/hero/hero";
import { TechnicalLogsSection } from "@/components/technical-logs/technical-logs-section";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <BlogSection />
      <TechnicalLogsSection />
    </>
  );
};
