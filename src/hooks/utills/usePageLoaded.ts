"use client";
import { useEffect, useState } from "react";

export default function usePageLoaded() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return pageLoaded;
}
