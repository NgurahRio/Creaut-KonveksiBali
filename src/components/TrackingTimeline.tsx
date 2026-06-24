"use client";

import type { TrackingStep } from "@/types/site";
import { useEffect, useState } from "react";
import { Icon } from "./Icons";

interface TrackingTimelineProps {
  steps: TrackingStep[];
  className?: string;
}

export default function TrackingTimeline({
  steps,
  className = "",
}: TrackingTimelineProps) {
  const [animatedIndex, setAnimatedIndex] = useState(-1);
  const [showInProgress, setShowInProgress] = useState(false);

  const targetIndex = steps.reduce(
    (last, step, idx) => (step.status === "done" || step.status === "active" ? idx : last),
    0
  );

  useEffect(() => {

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
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes progress-y {
          from { background-position: 0 0; }
          to { background-position: 0 16px; }
        }
        @keyframes progress-x {
          from { background-position: 0 0; }
          to { background-position: 16px 0; }
        }
        .line-progress-y {
          background-image: linear-gradient(to bottom, #06b6d4 50%, transparent 50%);
          background-size: 100% 16px;
          animation: progress-y 1s linear infinite;
          opacity: 0.3;
        }
        .line-progress-x {
          background-image: linear-gradient(to right, #06b6d4 50%, transparent 50%);
          background-size: 16px 100%;
          animation: progress-x 1s linear infinite;
          opacity: 0.3;
        }
      `}} />

      {/* Garis Dasar dan Garis Animasi (Mode Mobile - Vertikal) */}
      <div className="absolute left-7 top-0 h-full w-px bg-cyan-100 md:hidden">
        <div
          className="absolute left-0 top-0 w-full line-progress-y transition-all duration-1000 ease-in-out"
          style={{ height: `${inProgressPercentage}%` }}
        />
        <div
          className="absolute left-0 top-0 w-full bg-cyan-500 transition-all duration-700 ease-in-out"
          style={{ height: `${solidPercentage}%` }}
        />
      </div>
      {/* Garis Dasar dan Garis Animasi (Mode Desktop - Horizontal) */}
      <div className="absolute left-0 right-0 top-7 hidden h-px w-full bg-cyan-100 lg:block">
        <div
          className="absolute left-0 top-0 h-full line-progress-x transition-all duration-1000 ease-in-out"
          style={{ width: `${inProgressPercentage}%` }}
        />
        <div
          className="absolute left-0 top-0 h-full bg-cyan-500 transition-all duration-700 ease-in-out"
          style={{ width: `${solidPercentage}%` }}
        />
      </div>

      <ol className="relative grid gap-6 md:grid-cols-6">
        {steps.map((step, index) => {
          const hasReached = animatedIndex >= index;
          const isNextStep = showInProgress && index === targetIndex + 1;
          const tone = hasReached
            ? step.status === "done" || step.status === "active"
              ? "bg-cyan-500 text-white border-cyan-500 shadow-[0_0_16px_rgba(6,182,212,0.4)]"
              : "bg-white text-cyan-500 border-cyan-300"
            : isNextStep
              ? "bg-white text-cyan-500 border-cyan-500 border-dashed shadow-[0_0_8px_rgba(6,182,212,0.2)] animate-pulse"
              : "bg-white text-slate-300 border-slate-200";

          return (
            <li className="flex items-start gap-4 md:flex-col md:items-center md:text-center" key={step.title}>
              <div
                className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500 ease-out ${tone} ${hasReached ? "scale-100" : isNextStep ? "scale-90" : "scale-75"
                  }`}
              >
                <Icon
                  className={`h-7 w-7 transition-all duration-500 ${hasReached ? "scale-100 opacity-100" : isNextStep ? "scale-75 opacity-80 animate-bounce" : "scale-50 opacity-40"
                    }`}
                  name={step.icon as import("./Icons").IconName}
                />
              </div>
              <div
                className={`transition-all duration-500 ${hasReached || isNextStep ? "translate-y-0 opacity-100" : "translate-y-0 opacity-60"
                  }`}
              >
                <h3 className={`text-sm font-black leading-6 ${hasReached ? "text-black" : isNextStep ? "text-cyan-600" : "text-slate-400"}`}>
                  {step.title}
                </h3>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
