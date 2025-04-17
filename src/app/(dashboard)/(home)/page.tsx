"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import { StartView } from "./components/StartView";

export default function Dashboard() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#123262] lg:bg-[#07234E] p-2 relative flex w-full lg:w-[500px] lg:mx-auto items-center flex-col min-h-screen max-h-screen">
      <StartView />
    </div>
  );
}
