"use client";

import React, { useMemo } from "react";

interface FullWidthTextProps {
  text: string;
  className?: string;
}

export const FullWidthText: React.FC<FullWidthTextProps> = ({
  text,
  className,
}) => {
  const charCount = text.length;
  const fontSize = useMemo(() => {
    return `${150 / charCount}vw`;
  }, [charCount]);

  const letterSpacing = useMemo(() => {
    return `${-2 / charCount}vw`;
  }, [charCount]);

  return (
    <div className={`w-screen overflow-hidden ${className}`}>
      <h1
        style={{
          fontSize,
          letterSpacing,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
        className="font-bold uppercase absolute"
      >
        {text}
      </h1>
    </div>
  );
};