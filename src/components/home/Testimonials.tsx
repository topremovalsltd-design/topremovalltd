"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { StarIcon, ChevronLeft, ChevronRight } from "@/components/ui/icons";

/**
 * PLACEHOLDER testimonials — to be replaced with the real ones from the
 * /testimonials page in a later prompt. Do not treat this copy as final.
 */
type Testimonial = {
  name: string;
  rating: number;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "PLACEHOLDER — Jane D.",
    rating: 5,
    quote:
      "PLACEHOLDER REVIEW: The team arrived on time, wrapped everything with real care and made our house move completely stress-free. Highly recommended.",
  },
  {
    name: "PLACEHOLDER — Michael R.",
    rating: 5,
    quote:
      "PLACEHOLDER REVIEW: Fantastic office relocation over the weekend. Professional, efficient and we were back up and running by Monday morning.",
  },
  {
    name: "PLACEHOLDER — Sara K.",
    rating: 4,
    quote:
      "PLACEHOLDER REVIEW: Great value man and van service. Friendly crew, clear pricing with no surprises, and nothing was too much trouble.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-brand-orange" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={`h-5 w-5 ${i < rating ? "" : "opacity-25"}`} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const go = (i: number) => setActive((i + testimonials.length) % testimonials.length);

  return (
    <section className="bg-brand-grey py-20">
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading eyebrow="What our customers say" title="Testimonials" />

        {/* Mobile: single-card carousel */}
        <div className="relative mt-12 md:hidden">
          <Card testimonial={testimonials[active]} />
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(active - 1)}
              className="rounded-full border border-brand-navy/20 p-2 text-brand-navy transition hover:bg-brand-navy hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => go(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === active ? "w-7 bg-brand-orange" : "w-2.5 bg-brand-navy/30"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(active + 1)}
              className="rounded-full border border-brand-navy/20 p-2 text-brand-navy transition hover:bg-brand-navy hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop: grid */}
        <div className="mt-12 hidden grid-cols-3 gap-8 md:grid">
          {testimonials.map((t) => (
            <Card key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm">
      <Stars rating={testimonial.rating} />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-brand-charcoal/80">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
          {testimonial.name.replace(/^PLACEHOLDER — /, "").charAt(0)}
        </span>
        <span className="text-sm font-semibold text-brand-navy">{testimonial.name}</span>
      </figcaption>
    </figure>
  );
}
