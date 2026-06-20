"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { stats } from "@/data/site";
import { Icon } from "./Icons";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const numericPart = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericPart);
    }
  }, [isInView, motionValue, numericPart]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

interface StatsStripProps {
  className?: string;
  compact?: boolean;
}

export default function StatsStrip({ className = "", compact = false }: StatsStripProps) {
  return (
    <section
      className={`grid grid-cols-2 rounded-2xl bg-white border border-gray-100 shadow-lg lg:grid-cols-4 ${className}`}
    >
      {stats.map((item, index) => (
        <div
          className={`flex min-h-28 items-center justify-center gap-4 px-4 py-6 ${
            index % 2 === 1 ? "border-l border-gray-100 md:border-l-0" : ""
          } ${index > 1 ? "border-t border-gray-100 md:border-t-0" : ""} ${
            index > 0 ? "md:border-l md:border-gray-100" : ""
          }`}
          key={item.label}
        >
          <Icon className="h-8 w-8 shrink-0 text-primary-dark" name={item.icon} />
          <div>
            <p className={`${compact ? "text-2xl" : "text-3xl"} font-black text-gray-900`}>
              <AnimatedNumber value={item.value} />
            </p>
            <p className="max-w-28 text-sm font-black leading-5 text-gray-600">{item.label}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
