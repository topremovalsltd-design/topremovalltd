import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h2" | "h3";
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  tone = "dark",
  className = "",
  as: Tag = "h2",
}: Props) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = tone === "light" ? "text-white" : "text-brand-navy";
  const eyebrowColor = tone === "light" ? "text-white/80" : "text-brand-orange";

  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span className={`heading-eyebrow text-xs font-semibold ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <Tag
        className={`max-w-3xl text-2xl font-bold uppercase leading-tight tracking-wide sm:text-3xl md:text-4xl ${titleColor}`}
      >
        {title}
      </Tag>
      <span
        className={`mt-1 h-1 w-20 rounded-full bg-brand-orange ${
          align === "center" ? "self-center" : ""
        }`}
        aria-hidden="true"
      />
    </div>
  );
}
