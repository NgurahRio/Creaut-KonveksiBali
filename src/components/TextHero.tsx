"use client";

import { useEffect, useState } from "react";

interface HeroTitleProps {
  before: string;
  highlight: string;
  after: string;
}

export default function HeroTitle({
  before,
  highlight,
  after,
}: HeroTitleProps) {
  const fullText = before + highlight + after;

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= fullText.length) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [fullText]);

  const beforeText = before.slice(
    0,
    Math.min(count, before.length)
  );

  const highlightText =
    count > before.length
      ? highlight.slice(
          0,
          Math.min(
            count - before.length,
            highlight.length
          )
        )
      : "";

  const afterText =
    count > before.length + highlight.length
      ? after.slice(
          0,
          count - before.length - highlight.length
        )
      : "";

  return (
    <h1 className="max-w-3xl text-4xl font-black leading-tight text-black sm:text-3xl lg:text-5xl whitespace-pre-line">
      {beforeText}
      <span className="text-gradient-cyan">
        {highlightText}
      </span>
      {afterText}
      <span className="animate-pulse text-primary">
        |
      </span>
    </h1>
  );
}