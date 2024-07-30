import { LinkButton } from "../button/link-button";
import { Section } from "../section/section";

export const Hero = () => {
  return (
    <Section>
      <div className="flex flex-col items-start justify-center basis-1/2 gap-6 p-2">
        <h1 className="font-bold text-4xl">
          Welcome to my Spark Journey!
        </h1>
        <img
          src="/encora-logo-black.svg"
          alt="Encora's logo"
          className="h-6"
        />
        <p>
          Hi, my name is{" "}
          <span className="font-bold text-primary">Saúl Ramos</span> and in this
          website, I will be keeping track of my journey through{" "}
          <span className="font-bold text-primary">
            Encora&apos;s Spark Program
          </span>
          .
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <LinkButton to="/blog" className="bg-encora-red">
            Blog
          </LinkButton>
          <LinkButton to="/technical-logs" className="bg-encora-blue">
            Technical Logs
          </LinkButton>
        </div>
      </div>
      <div className="h-80 flex basis-1/2 overflow-hidden rounded-md">
        <img
          src="/saulprl-presenting.jpg"
          alt="Saúl Ramos presenting at Encuentro Nacional en ISI 2023"
          className="object-cover"
        />
      </div>
    </Section>
  );
};
