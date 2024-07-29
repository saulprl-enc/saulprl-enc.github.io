import { Section } from "@/components/section/section";
import { TechnicalLogsList } from "@/components/technical-logs/technical-logs-list";

export const TechnicalLogsPage = () => {
  return (
    <Section>
      <div className="w-full flex flex-col gap-6 border-2 border-encora-blue rounded-md p-2">
        <h2 className="text-3xl font-bold text-encora-blue">Technical Logs</h2>
        <p>This section will contain all of my technical logs.</p>
        <TechnicalLogsList variant="fullPage" />
      </div>
    </Section>
  );
};
