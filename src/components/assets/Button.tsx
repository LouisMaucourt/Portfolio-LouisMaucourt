"use client";
import gsap from "gsap";
import { useRef } from "react";
import Link from "next/link";
import { slideTransition } from "@/app/utilis/animation";
import { useTransitionRouter } from "next-view-transitions";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  withTransition?: boolean;
  transition?: "up" | "down" | "left" | "right" | "none";
}

export const Button: React.FC<ButtonProps> = ({
  href,
  children,
  className,
  withTransition = true,
  transition = "none",
}) => {
  const router = useTransitionRouter();
  const btnRef = useRef<HTMLAnchorElement>(null);
  const isAnimatingRef = useRef(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!btnRef.current || isAnimatingRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);

    isAnimatingRef.current = true;
    gsap.to(btnRef.current, {
      "--scale": 1,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;

    if (isAnimatingRef.current) {
      setTimeout(() => {
        if (!btnRef.current) return;
        gsap.to(btnRef.current, {
          "--scale": 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }, 100);
    } else {
      gsap.to(btnRef.current, {
        "--scale": 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    router.push(href, {
      onTransitionReady:
        transition !== "none" ? () => slideTransition(transition) : undefined,
    });
  };

  return (
    <Link
      href={href}
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`cursor-pointer relative flex items-center justify-center rounded-full border p-2 px-4 min-w-32 text-black hover:text-white hover:border-white overflow-hidden transition-colors duration-300 before:content-[''] before:absolute before:top-[var(--y)] before:left-[var(--x)] before:w-[300%] before:h-[300%] before:bg-black before:rounded-full before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:scale-[var(--scale,0)] before:transition-transform before:duration-500 before:ease-out ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
};