"use client";

import type { TrackingStep } from "@/types/site";
import { useEffect, useState } from "react";
import { Icon } from "./Icons";

interface TrackingTimelineProps {
  steps: TrackingStep[];
  showDates?: boolean;
  className?: string;
}

export default function TrackingTimeline({
  steps,
  showDates = false,
  className = "",
}: TrackingTimelineProps) {
  const [animatedIndex, setAnimatedIndex] = useState(-1);
  const [showInProgress, setShowInProgress] = useState(false);

  const targetIndex = steps.reduce(
    (last, step, idx) => (step.status === "done" || step.status === "active" ? idx : last),
    0
  );

  useEffect(() => {
    setAnimatedIndex(-1); // Reset animasi ketika data baru masuk
    setShowInProgress(false);

    const timeouts: NodeJS.Timeout[] = [];
    // Jalankan animasi per langkah (jeda 500ms tiap titik)
    for (let i = 0; i <= targetIndex; i++) {
      const timeout = setTimeout(() => {
        setAnimatedIndex(i);
        // Setelah animasi mencapai titik terakhir, munculkan efek "menuju ke tahap selanjutnya"
        if (i === targetIndex && targetIndex < steps.length - 1) {
          timeouts.push(setTimeout(() => setShowInProgress(true), 500));
        }
      }, i * 500);
      timeouts.push(timeout);
    }

    return () => timeouts.forEach(clearTimeout);
  }, [steps, targetIndex]);

  // Hitung persentase untuk garis yang merambat
  const maxSegments = Math.max(1, steps.length - 1);
  const solidPercentage = Math.max(0, (animatedIndex / maxSegments) * 100);
  const inProgressPercentage = showInProgress 
    ? Math.min(100, ((targetIndex + 1) / maxSegments) * 100) 
    : solidPercentage;

  return (
    <div className={`relative ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progress-y {
          from { background-position: 0 0; }
          to { background-position: 0 16px; }
        }
        @keyframes progress-x {
          from { background-position: 0 0; }
          to { background-position: 16px 0; }
        }
        .line-progress-y {
          background-image: linear-gradient(to bottom, #a17140 50%, transparent 50%);
          background-size: 100% 16px;
          animation: progress-y 1s linear infinite;
          opacity: 0.3;
        }
        .line-progress-x {
          background-image: linear-gradient(to right, #a17140 50%, transparent 50%);
          background-size: 16px 100%;
          animation: progress-x 1s linear infinite;
          opacity: 0.3;
        }
      `}} />

      {/* Garis Dasar dan Garis Animasi (Mode Mobile - Vertikal) */}
      <div className="absolute left-7 top-0 h-full w-px bg-[#d6c5b5] md:hidden">
        <div
          className="absolute left-0 top-0 w-full line-progress-y transition-all duration-1000 ease-in-out"
          style={{ height: `${inProgressPercentage}%` }}
        />
        <div
          className="absolute left-0 top-0 w-full bg-[#a17140] transition-all duration-700 ease-in-out"
          style={{ height: `${solidPercentage}%` }}
        />
      </div>
      {/* Garis Dasar dan Garis Animasi (Mode Desktop - Horizontal) */}
      <div className="absolute left-0 right-0 top-7 hidden h-px w-full bg-[#d6c5b5] lg:block">
        <div
          className="absolute left-0 top-0 h-full line-progress-x transition-all duration-1000 ease-in-out"
          style={{ width: `${inProgressPercentage}%` }}
        />
        <div
          className="absolute left-0 top-0 h-full bg-[#a17140] transition-all duration-700 ease-in-out"
          style={{ width: `${solidPercentage}%` }}
        />
      </div>

      <ol className="relative grid gap-6 md:grid-cols-5">
        {steps.map((step, index) => {
          const hasReached = animatedIndex >= index;
          const isNextStep = showInProgress && index === targetIndex + 1;
          const tone = hasReached
            ? step.status === "done" || step.status === "active"
              ? "bg-[#a17140] text-white border-[#a17140] shadow-[0_0_16px_rgba(161,113,64,0.4)]"
              : "bg-white text-[#a17140] border-[#c8aa8d]"
            : isNextStep
            ? "bg-white text-[#a17140] border-[#a17140] border-dashed shadow-[0_0_8px_rgba(161,113,64,0.2)] animate-pulse"
            : "bg-white text-[#cfcfcf] border-[#e6e6e6]";

          return (
            <li className="flex items-start gap-4 md:flex-col md:items-center md:text-center" key={step.title}>
              <div
                className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 ease-out ${tone} ${
                  hasReached ? "scale-100" : isNextStep ? "scale-90" : "scale-75 opacity-60"
                }`}
              >
                <Icon
                  className={`h-7 w-7 transition-all duration-500 ${
                    hasReached ? "scale-100 opacity-100" : isNextStep ? "scale-75 opacity-80 animate-bounce" : "scale-50 opacity-0"
                  }`}
                  name={step.icon as any}
                />
              </div>
              <div
                className={`transition-all duration-500 ${
                  hasReached || isNextStep ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <h3 className={`text-sm font-black leading-6 ${hasReached ? "text-black" : isNextStep ? "text-[#a17140]" : "text-[#cfcfcf]"}`}>
                  {step.title}
                </h3>
                {showDates && step.date ? (
                  <p className={`mt-1 text-base font-semibold ${hasReached ? "text-[#4a4a4a]" : "text-[#cfcfcf]"}`}>
                    {step.date}
                  </p>
                ) : (
                  <p className={`mt-1 text-base font-bold ${hasReached ? "text-[#4a4a4a]" : isNextStep ? "text-[#a17140] animate-pulse" : "text-[#cfcfcf]"}`}>
                    {isNextStep ? "Menunggu proses..." : step.subtitle}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
