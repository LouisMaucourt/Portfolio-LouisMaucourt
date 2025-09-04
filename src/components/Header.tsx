"use client";

import { Button } from "./assets/Button";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname(); // URL actuelle

  return (
    <header className="fixed bottom-10 left-0 w-full z-40">
      <nav className="flex justify-center items-center p-5">
        <ul className="flex justify-center bg-[#c4c4c4] rounded-full overflow-hidden">
          <li>
            <Button
              href="/projects"
              transition="right"
              className={`rounded-none border-0 ${
                pathname.startsWith("/projects") ? "bg-black text-white" : ""
              }`}
            >
              Projets
            </Button>
          </li>
          <li>
            <Button
              href="/"
              transition="down"
              className={`rounded-none border-0 ${
                pathname === "/" ? "bg-black text-white" : ""
              }`}
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              href="/about"
              transition="left"
              className={`rounded-none border-0 ${
                pathname === "/about" ? "bg-black text-white" : ""
              }`}
            >
              About
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
