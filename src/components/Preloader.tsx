"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const refs = [text1Ref.current, text2Ref.current, text3Ref.current];
    if (refs.some((r) => !r) || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            y: "-100vh",
            filter: "blur(5px)",
            duration: 0.8,
            ease: "power2.in",
            delay: 0.3,
            onComplete: () => setLoading(false),
          });
        },
      });

      tl.fromTo(
        text1Ref.current,
        { opacity: 0, x: -100, filter: "blur(10px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
        },
        0.2,
      )
        .fromTo(
          text2Ref.current,
          { opacity: 0, y: 50, filter: "blur(10px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
          },
          0.6,
        )
        .fromTo(
          text3Ref.current,
          { opacity: 0, x: 100, filter: "blur(10px)" },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
          },
          1,
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!loading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col justify-around bg-black lg:p-20 p-3 text-white"
    >
      <h1 ref={text1Ref} className="lg:text-7xl text-5xl font-bold opacity-0">
        Louis Maucourt
      </h1>
      <h1
        ref={text2Ref}
        className="lg:text-7xl text-5xl font-bold mx-auto opacity-0"
      >
        FullStack
      </h1>
      <h1
        ref={text3Ref}
        className="lg:text-7xl text-5xl font-bold ml-auto opacity-0"
      >
        Développeur
      </h1>
    </div>
  );
}
