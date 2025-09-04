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
    // Plus le texte est court, plus la typo peut être grosse
    // Formule inverse : base importante divisée par moins de caractères
    return `${150 / charCount}vw`;
  }, [charCount]);

  const letterSpacing = useMemo(() => {
    // Letter spacing négatif pour serrer et permettre une typo plus grosse
    return `${-2 / charCount}vw`;
  }, [charCount]);

  return (
    <div className={`w-screen overflow-hidden ${className}`}>
      <p
        style={{
          fontSize,
          letterSpacing,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
        className="font-bold uppercase absolute"
      >
        {text}
      </p>
    </div>
  );
};