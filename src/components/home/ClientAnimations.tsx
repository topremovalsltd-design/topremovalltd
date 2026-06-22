"use client";
import { useEffect } from "react";

export default function ClientAnimations() {
  useEffect(() => {
    // Enable JS-gated reveal animations
    document.documentElement.classList.add("js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );

    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
