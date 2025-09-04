"use client";
import React, { useEffect, useLayoutEffect, useRef, Suspense } from "react";
import Tempus from "@studio-freight/tempus";
import Lenis from "@studio-freight/lenis";
import { usePathname, useSearchParams } from "next/navigation";

// Separate component that uses useSearchParams
function SmoothScrollerContent() {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
  }, [pathname, searchParams, lenis]);

  useLayoutEffect(() => {
    lenis.current = new Lenis({
      smoothWheel: true,
      // Customize other instance settings here
    });

    const resize = setInterval(() => {
      lenis.current!.resize();
    }, 150);

    function onFrame(time: number) {
      lenis.current!.raf(time);
    }

    const unsubscribe = Tempus.add(onFrame);

    return () => {
      unsubscribe();
      clearInterval(resize);
      lenis.current!.destroy();
      lenis.current = null;
    };
  }, []);

  return null;
}

// Main component with Suspense boundary
export default function SmoothScroller() {
  return (
    <Suspense fallback={null}>
      <SmoothScrollerContent />
    </Suspense>
  );
}