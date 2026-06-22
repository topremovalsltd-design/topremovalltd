import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { StarIcon } from "@/components/ui/icons";

const badges = [
  { src: "/badge-bar.svg", name: "British Association of Removers" },
  { src: "/badge-ctsi.svg", name: "CTSI Approved Code / Trading Standards" },
  { src: "/badge-ngrs.svg", name: "National Guild of Removers and Storers" },
  { src: "/badge-fors.svg", name: "Fleet Operator Recognition Scheme" },
  { src: "/badge-checkatrade.svg", name: "Checkatrade" },
  { src: "/badge-iam.svg", name: "International Association of Movers" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-brand-orange" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={`h-5 w-5 ${i < count ? "" : "opacity-25"}`} />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="bg-brand-grey py-20"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          eyebrow="Trustpilot, Google Reviews, Insurance"
          title="Reviews, Insurance and Accreditations"
        />

        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/80">
          Top Removals customers have left verified reviews across Google and Trustpilot.{" "}
          <Link
            href="https://uk.trustpilot.com/review/www.top-removals.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange underline underline-offset-2"
          >
            Read verified reviews on Trustpilot
          </Link>
          . Public liability insurance and goods-in-transit insurance are active on every job.
        </p>

        {/* CONFIRM: replace this placeholder with the real Trustpilot or Google Reviews widget */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 text-center" data-reveal>
          <div className="flex items-center justify-center gap-2">
            <Stars count={5} />
            <span className="text-base font-bold text-brand-navy">Excellent</span>
          </div>
          <Link
            href="https://uk.trustpilot.com/review/www.top-removals.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-brand-orange underline underline-offset-2"
          >
            View all reviews on Trustpilot
          </Link>
        </div>

        {/* Insurance statement */}
        <div className="mx-auto mt-8 max-w-3xl grid gap-4 sm:grid-cols-2" data-reveal>
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
              Public liability insurance
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
              Covers damage to property at your address caused by our crews during the move.
              Active on every job without exception.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
              Goods-in-transit insurance
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">
              Covers your belongings from loading to delivery. If items are damaged in transit,
              there is a clear claims process with a financial remedy.
            </p>
          </div>
        </div>

        {/* Accreditation badges */}
        <div className="mt-10">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-brand-charcoal/50">
            Trusted and certified by —{" "}
            <Link
              href="/certificates"
              className="normal-case text-brand-orange underline underline-offset-2 hover:text-brand-navy transition-colors"
            >
              view all certificates
            </Link>
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-5">
            {badges.map((badge) => (
              <li
                key={badge.name}
                className="flex items-center justify-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={badge.src}
                  alt={`${badge.name} accreditation badge`}
                  width={180}
                  height={90}
                  className="h-[72px] w-auto"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
