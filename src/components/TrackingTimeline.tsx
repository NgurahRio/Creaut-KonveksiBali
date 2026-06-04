import type { TrackingStep } from "@/types/site";
import { Icon } from "./Icons";

interface TrackingTimelineProps {
  steps: TrackingStep[];
  showDates?: boolean;
  className?: string;
}

function stepTone(status: TrackingStep["status"]) {
  if (status === "done" || status === "active") {
    return "bg-[#a17140] text-white border-[#a17140]";
  }

  return "bg-white text-[#a17140] border-[#c8aa8d]";
}

export default function TrackingTimeline({
  steps,
  showDates = false,
  className = "",
}: TrackingTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-7 top-0 hidden h-full w-px bg-[#d6c5b5] md:left-0 md:right-0 md:top-7 md:block md:h-px md:w-full" />
      <ol className="relative grid gap-6 md:grid-cols-6">
        {steps.map((step) => (
          <li className="flex items-start gap-4 md:flex-col md:items-center md:text-center" key={step.title}>
            <div
              className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 ${stepTone(
                step.status,
              )}`}
            >
              <Icon className="h-7 w-7" name={step.icon} />
            </div>
            <div>
              <h3 className="text-lg font-black leading-6 text-black">{step.title}</h3>
              {showDates && step.date ? (
                <p className="mt-1 text-base font-semibold text-[#4a4a4a]">{step.date}</p>
              ) : (
                <p className="mt-1 text-base font-bold text-[#4a4a4a]">{step.subtitle}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
