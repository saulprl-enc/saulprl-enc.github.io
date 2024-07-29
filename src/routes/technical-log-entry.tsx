import { useLoaderData } from "react-router-dom";

import {
  technicalLogs,
  TTechnicalLog,
} from "@/components/technical-logs/tecnical-logs";

export function technicalLogLoader({ params }) {
  if (!params || !params.logSlug) {
    throw new Error("Received unexpected params");
  }

  const entry = technicalLogs.find((entry) => entry.slug === params.logSlug);

  if (!entry) {
    throw new Error("Couldn't find the specified resource");
  }

  return entry;
}

export const TechnicalLogEntry = () => {
  const data = useLoaderData() as TTechnicalLog;

  return (
    <div className="w-full flex items-start justify-start pt-2 pb-32 px-2">
      {data.content}
    </div>
  );
};
