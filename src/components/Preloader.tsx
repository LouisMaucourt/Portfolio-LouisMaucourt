"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Animation pour le premier texte (depuis la gauche)
    gsap.fromTo(
      ".preloader-text-1",
      {
        opacity: 0,
        x: -100,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
      },
    );

    // Animation pour le deuxième texte (depuis le centre/bas)
    gsap.fromTo(
      ".preloader-text-2",
      {
        opacity: 0,
        x: 0,
        y: 50,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        delay: 0.6,
      },
    );

    // Animation pour le troisième texte (depuis la droite)
    gsap.fromTo(
      ".preloader-text-3",
      {
        opacity: 0,
        x: 100,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        delay: 1,
      },
    );

    // Animation de sortie du preloader
    const exitTimer = setTimeout(() => {
      gsap.to(".preloader-container", {
        y: "-100vh",
        filter: "blur(5px)",
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => setLoading(false),
      });
    }, 1500); // Changé à 3 secondes au lieu de 1500000ms

    return () => clearTimeout(exitTimer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader-container fixed inset-0 z-50 flex flex-col justify-around bg-black p-20 text-white">
      <h1 className="preloader-text-1 text-7xl font-bold">Louis Maucourt</h1>
      <h1 className="preloader-text-2 text-7xl font-bold mx-auto">
        Front-end
      </h1>
      <h1 className="preloader-text-3 text-7xl font-bold ml-auto">
        Developper
      </h1>
    </div>
  );
}