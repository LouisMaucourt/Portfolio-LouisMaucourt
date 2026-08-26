"use client";

import React, { useRef } from "react";
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

    const letters = containerRef.current.querySelectorAll(".char");

    gsap.to(letters, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.01,
      delay: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "top 40%",
        toggleActions: "play none none none",
      },
    });
  }, [text]);

  const words = text.split(" ");

  return (
    <div
      ref={containerRef}
      className={`max-w-5xl lg:py-15 py-3 flex flex-row flex-wrap font-bold ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="char inline-block lg:text-5xl text-3xl"
              style={{
                opacity: 0,
                transform: "translateY(5px)",
                filter: "blur(5px)",
              }}
            >
              {char}
            </span>
          ))}
          <span className="inline-block lg:text-5xl text-3xl">&nbsp;</span>
        </span>
      ))}
    </div>
  );
};