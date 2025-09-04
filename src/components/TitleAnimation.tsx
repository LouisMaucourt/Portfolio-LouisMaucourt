"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface TextAnimationProps {
  text: string;
  className?: string;
}

export const TitleAnimation: React.FC<TextAnimationProps> = ({
  text,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll("span");

    // Reset styles
    gsap.set(letters, { opacity: 0, y: 5, filter: "blur(5px)" });

    // Animation avec ScrollTrigger
    gsap.to(letters, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.01,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none none",
      },
    });
  }, [text]);
  return (
    <div
      ref={containerRef}
      className={`max-w-5xl py-15 flex flex-wrap ${className}`}
    >
      {text.split("").map((char, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <span key={index} className="inline-block text-5xl ">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};