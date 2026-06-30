"use client";

import Link from "next/link";
import React from "react";

type Transition = "forward" | "back" | "down";

const transitionMap: Record<Transition, string[]> = {
  forward: ["nav-forward"],
  back: ["nav-back"],
  down: ["nav-down"],
};

interface ButtonProps extends React.ComponentPropsWithoutRef<typeof Link> {
  href: string;
  transition?: Transition;
  className?: string;
  children: React.ReactNode;
}

export const Button = ({
  href,
  transition,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Link
      href={href}
      target={props.target}
      rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
      transitionTypes={transition ? transitionMap[transition] : undefined}
      className={`px-6 py-3 inline-block transition-all duration-300 ease-out hover:-translate-y-0.5 hover:opacity-80 active:translate-y-0 active:duration-150 ${className ?? ""}`}
      {...props}
    >
      {children}
    </Link>
  );
};