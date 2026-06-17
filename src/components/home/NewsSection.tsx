import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "@/components/ui/icons";

type Article = {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  href: string;
};

const articles: Article[] = [
  {
    title: "Planning an Office Move Without Losing Productivity",
    date: "29/05/2026",
    image: "/news-1.svg",
    href: "/news/planning-an-office-move-without-losing-productivity",
    excerpt:
      "An office relocation can be an exciting milestone for a business Whether the company is expanding, relocating to a better-connected area, or moving into a workspace that better accommodates a hybrid...",
  },
  {
    title: "13 Tips for a Stress-Free Office Removal",
    date: "28/04/2026",
    image: "/news-2.svg",
    href: "/news/13-tips-for-a-stress-free-office-removal",
    excerpt:
      "Relocating an office rarely feels straightforward Even when everything appears organised on paper, the reality tends to involve tight deadlines, overlooked details and the challenge of keeping...",
  },
  {
    title: "Preparing Your London Office for a Weekend Move",
    date: "31/03/2026",
    image: "/news-3.svg",
    href: "/news/preparing-your-london-office-for-a-weekend-move",
    excerpt:
      "Moving office in London isn't just about packing boxes and hiring a van-it's a bit of a juggling act You've got staff to think about, clients who still expect business as usual, and the usual...",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-brand-grey py-20">
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading eyebrow="From our blog" title="Top Moving News" />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <Link href={article.href} className="relative block aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-md bg-brand-orange px-3 py-1 text-xs font-semibold text-white">
                  {article.date}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug text-brand-navy">
                  <Link href={article.href} className="transition hover:text-brand-orange">
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-charcoal/75">
                  {article.excerpt}
                </p>
                <Link
                  href={article.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-brand-orange transition group-hover:gap-2.5"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/news" variant="navy" size="lg">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
