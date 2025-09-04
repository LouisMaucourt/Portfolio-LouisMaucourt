import React from "react";

export interface ItemTechno {
  title: string;
  skills: string[];
}

export interface TechnoProps {
  items: ItemTechno[];
}

export const Techno: React.FC<TechnoProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-6">
      {items.map((item, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <div key={index} className="flex flex-col items-start">
          {/* Titre */}
          <h2 className="text-xl mb-2 border-b w-full">
            {item.title}
          </h2>

          {/* Liste des skills */}
          <div className="flex flex-wrap gap-3">
            {item.skills.map((skill, i) => (
              <h3
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={i}
                className="cursor-default capitalize border px-5 py-1 pb-0 rounded-full text-sm transition"
              >
                {skill}
              </h3>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
