"use client";

import Link from "next/link";

type Transition = 'forward' | 'back' | 'down'

const transitionMap: Record<Transition, string[]> = {
  forward: ['nav-forward'],
  back: ['nav-back'],
  down: ['nav-down'],
}
interface ButtonProps {
  href: string;
  transition?: "forward" | "back" | "down";
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ href, transition, className, children }: ButtonProps) => {
  return (
    <Link
      href={href}
      transitionTypes={transition ? transitionMap[transition] : undefined}
      className={`px-6 py-3 inline-block ${className ?? ""}`}
    >
      {children}
    </Link>
  );
};