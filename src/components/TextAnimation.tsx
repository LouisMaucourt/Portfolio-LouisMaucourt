"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface TextAnimationProps {
  text: string;
  scrub?: boolean;
  className?: string;
}

export const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  scrub = false,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll("span");

    gsap.set(words, { opacity: 0, y: 6, filter: "blur(3px)" });

    gsap.to(words, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: scrub ? 1.2 : 0.4,
      ease: "power2.out",
      stagger: scrub
        ? 0.12
        : {
          each: 0.02,
          from: "start",
        },
      delay: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: scrub ? "top 20%" : "top 50%",
        scrub,
        toggleActions: "play none none none",
      },
    });
  }, [text, scrub]);

  return (
    <div ref={containerRef} className={`max-w-5xl py-5 flex flex-wrap ${className}`}>
      {text.split(" ").map((word, index) => (
        <span key={index} className="inline-block mr-2 lg:text-3xl text-xl">
          {word}
        </span>
      ))}
    </div>
  );
};