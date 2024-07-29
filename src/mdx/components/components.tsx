import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[80ch]">{children}</div>;
};

const Link = (props) => {
  return <a {...props} className="text-encora-red underline" />;
};
const H1 = (props) => {
  return <h1 {...props} className="font-bold text-4xl" />;
};
const H2 = (props) => {
  return <h2 {...props} className="font-bold text-2xl" />;
};
const H3 = (props) => {
  return <h3 {...props} className="font-bold text-xl" />;
};
const H4 = (props) => {
  return <h4 {...props} className="font-bold text-lg" />;
};
const H5 = (props) => {
  return <h5 {...props} className="font-bold text-base" />;
};
const H6 = (props) => {
  return <h6 {...props} className="text-base" />;
};
const UL = (props) => {
  return <ul {...props} className="list-inside list-disc pl-2" />;
};
const Code = ({ className, ...props }) => {
  return (
    <code
      {...props}
      className={cn("font-mono bg-primary/15 rounded px-1", className)}
    />
  );
};

export const mdxComponents = {
  a: Link,
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  ul: UL,
};
