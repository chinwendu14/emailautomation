"use client";

import usePageLoaded from "@/hooks/utills/usePageLoaded";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export function TranslateAnimateX({ children }: Props) {
  const pageLoaded = usePageLoaded();
  return (
    <div
      className={`transition-all duration-700 ease-in-out ${
        pageLoaded ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export function TranslateAnimateY({ children }: Props) {
  const pageLoaded = usePageLoaded();
  return (
    <div
      className={`transition-all duration-700 ease-in-out ${
        pageLoaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
