import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "@/components/ui/icons";

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  crumbs: Crumb[];
  /** Optional orange sub-line shown beneath the heading. */
  subtitle?: string;
  /** Optional background image placeholder layered behind the navy gradient. */
  image?: string;
};

/**
 * Reusable inner-page banner: navy gradient + optional background image,
 * breadcrumb trail and a large page heading. Used by /about and future pages.
 */
export default function PageBanner({
  title,
  crumbs,
  subtitle,
  image = "/banner-bg.svg",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <Image
        src={image}
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />

      <div className="relative mx-auto max-w-[88rem] px-4 py-16 md:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
            {crumbs.map((crumb, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {crumb.href && !last ? (
                    <Link href={crumb.href} className="transition hover:text-brand-orange">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={last ? "font-medium text-brand-orange" : ""}>
                      {crumb.label}
                    </span>
                  )}
                  {!last && <ChevronRight className="h-4 w-4 text-white/40" />}
                </li>
              );
            })}
          </ol>
        </nav>

        <h1 className="mt-4 text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-lg font-bold uppercase tracking-wide text-brand-orange sm:text-xl md:text-2xl">
            {subtitle}
          </p>
        )}
        <span className="mt-4 block h-1 w-20 rounded-full bg-brand-orange" aria-hidden="true" />
      </div>
    </section>
  );
}
