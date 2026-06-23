"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const refs = [text1Ref.current, text2Ref.current, text3Ref.current];
    if (refs.some((r) => !r) || !containerRef.current) return;

    gsap.fromTo(text1Ref.current, { opacity: 0, x: -100, filter: "blur(10px)" }, { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out", delay: 0.2 });
    gsap.fromTo(text2Ref.current, { opacity: 0, y: 50, filter: "blur(10px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out", delay: 0.6 });
    gsap.fromTo(text3Ref.current, { opacity: 0, x: 100, filter: "blur(10px)" }, { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out", delay: 1 });

    const exitTimer = setTimeout(() => {
      gsap.to(containerRef.current, {
        y: "-100vh",
        filter: "blur(5px)",
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => setLoading(false),
      });
    }, 1500);

    return () => clearTimeout(exitTimer);
  }, []);

  if (!loading) return null;

  const hidden: React.CSSProperties = { opacity: 0 }; 
  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex flex-col justify-around bg-black p-20 text-white">
      <h1 ref={text1Ref} style={hidden} className="text-7xl font-bold">Louis Maucourt</h1>
      <h1 ref={text2Ref} style={hidden} className="text-7xl font-bold mx-auto">Front-end</h1>
      <h1 ref={text3Ref} style={hidden} className="text-7xl font-bold ml-auto">Developper</h1>
    </div>
  );
}