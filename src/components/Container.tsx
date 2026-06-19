import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
<<<<<<< HEAD
      className={` px-10 ${className}`}
=======
      className={`mx-4 w-[calc(100vw-32px)] min-w-0 sm:mx-6 sm:w-[calc(100vw-48px)] md:mx-10 md:w-[calc(100vw-80px)] lg:mx-auto lg:w-auto lg:max-w-[1760px] lg:px-16 xl:px-20 ${className}`}
>>>>>>> 43d64230efb2783a109a75ac4627895e6501f006
    >
      {children}
    </div>
  );
}
