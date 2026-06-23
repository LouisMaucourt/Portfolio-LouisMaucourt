import { ViewTransition } from 'react'
import { FullWidthText } from "@/components/assets/FullText";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      default="none"
    >
      <main>
        <FullWidthText text="Louis Maucourt" className="" />
        <Experience />
      </main>
    </ViewTransition>
  );
}