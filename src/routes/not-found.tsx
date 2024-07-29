import { LinkButton } from "@/components/button/link-button";
import { Section } from "@/components/section/section";

export const NotFound = () => {
  return (
    <Section>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold">Page not found</h1>
        <p className="text-center">
          This page is unavailable and might be under development. Check it out
          later!
        </p>
        <LinkButton to="/">Go back</LinkButton>
      </div>
    </Section>
  );
};
