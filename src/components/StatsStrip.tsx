import { stats } from "@/data/site";
import { Icon } from "./Icons";

interface StatsStripProps {
  className?: string;
  compact?: boolean;
}

export default function StatsStrip({ className = "", compact = false }: StatsStripProps) {
  return (
    <section
      className={`grid grid-cols-2 rounded-lg bg-[#f1ebe5] shadow-[0_8px_22px_rgba(0,0,0,0.08)] lg:grid-cols-4 ${className}`}
    >
      {stats.map((item, index) => (
        <div
          className={`flex min-h-28 items-center justify-center gap-4 px-4 py-6 ${
            index % 2 === 1 ? "border-l border-[#d5c5b4] md:border-l-0" : ""
          } ${index > 1 ? "border-t border-[#d5c5b4] md:border-t-0" : ""} ${
            index > 0 ? "md:border-l md:border-[#d5c5b4]" : ""
          }`}
          key={item.label}
        >
          <Icon className="h-8 w-8 shrink-0 text-[#a17140]" name={item.icon} />
          <div>
            <p className={`${compact ? "text-2xl" : "text-3xl"} font-black text-black`}>
              {item.value}
            </p>
            <p className="max-w-28 text-sm font-black leading-5 text-black">{item.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
