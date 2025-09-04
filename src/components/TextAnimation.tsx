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

    // Réinitialisation des styles
    gsap.set(words, { opacity: 0, x: 10, filter: "blur(5px)" });

    // Animation mot par mot
    gsap.to(words, {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: scrub ? 1 : 0.3, // Si scrub, animation plus lente
      ease: "power3.out",
      stagger: scrub ? 0.1 : 0.08,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: scrub ? "top 20%" : "top 40%",
        scrub, // ✅ Utilisation de la prop scrub
        toggleActions: scrub ? "play none none none" : "play none none none",
      },
    });
  }, [text, scrub]);

  return (
    <div ref={containerRef} className={`max-w-5xl py-5 flex flex-wrap ${className}`}>
      {text.split(" ").map((word, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <span key={index} className="inline-block mr-2 text-3xl">
          {word}
        </span>
      ))}
    </div>
  );
};
