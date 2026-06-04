import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-4 w-[calc(100vw-32px)] min-w-0 sm:mx-6 sm:w-[calc(100vw-48px)] md:mx-10 md:w-[calc(100vw-80px)] lg:mx-auto lg:w-auto lg:max-w-[1760px] lg:px-16 xl:px-20 ${className}`}
    >
      {children}
    </div>
  );
}
