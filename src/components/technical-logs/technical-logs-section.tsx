import { LinkButton } from "../button/link-button";
import { Section } from "../section/section";
import { TechnicalLogsList } from "./technical-logs-list";
import { technicalLogs } from "./tecnical-logs";

export const TechnicalLogsSection = () => {
  return (
    <Section>
      <div className="w-full flex flex-col gap-6 border-2 border-encora-blue rounded-md p-2">
        <h2 className="text-3xl font-bold text-encora-blue">Technical Logs</h2>
        <p>This section will contain all of my technical logs.</p>
        <TechnicalLogsList variant="section" />
        {technicalLogs.length > 3 && (
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
