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
    <div className="flex flex-col gap-10">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-start">
          <h2 className="text-3xl mb-2 border-b w-full">
            {item.title}
          </h2>
          <div className="flex flex-wrap gap-3">
            {item.skills.map((skill, i) => (
              <h3
                key={i}
                className="cursor-default capitalize border px-7 py-1  rounded-full text-sm transition"
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
