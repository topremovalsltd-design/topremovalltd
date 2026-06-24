"use client";
import { useEffect } from "react";

/** Page-scoped reveal observer for the /storage route. */
export default function StorageAnimations() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}
