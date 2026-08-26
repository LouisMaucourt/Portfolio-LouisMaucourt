"use client";

import { Button } from "./assets/Button";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const getTransition = (target: string): "forward" | "back" => {
    const order = ["/projects", "/", "/about"];
    const fromIndex = order.findIndex((p) => pathname.startsWith(p) && (p !== "/" || pathname === "/"));
    const toIndex = order.indexOf(target);
    return toIndex > fromIndex ? "forward" : "back";
  };

  return (
    <header
      className="fixed lg:bottom-10 bottom-5 left-0 w-full z-40"
      style={{ viewTransitionName: "site-header" }}
    >
      <nav className="flex justify-center items-center p-5">
        <ul className="flex justify-center bg-[#c4c4c4] rounded-full overflow-hidden">
          <li>
            <Button
              href="/projects"
              transition={getTransition("/projects")}
              className={`min-w-24 text-center rounded-none border-0 !no-underline ${pathname.startsWith("/projects") ? "bg-black text-white" : ""
                }`}
            >
              Projets
            </Button>
          </li>
          <li>
            <Button
              href="/"
              transition={getTransition("/")}
              className={`min-w-24 text-center  rounded-none border-0 !no-underline ${pathname === "/" ? "bg-black text-white" : ""
                }`}
            >
              Index
            </Button>
          </li>
          <li>
            <Button
              href="/about"
              transition={getTransition("/about")}
              className={`min-w-24 text-center  rounded-none border-0 !no-underline ${pathname === "/about" ? "bg-black text-white" : ""
                }`}
            >
              À Propos
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};