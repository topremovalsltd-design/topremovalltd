import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const badges = [
  { src: "/badge-bar.svg", name: "British Association of Removers" },
  { src: "/badge-ctsi.svg", name: "CTSI Approved Code / Trading Standards" },
  { src: "/badge-ngrs.svg", name: "National Guild of Removers & Storers" },
  { src: "/badge-fors.svg", name: "Fleet Operator Recognition Scheme" },
  { src: "/badge-checkatrade.svg", name: "Checkatrade" },
  { src: "/badge-iam.svg", name: "International Association of Movers" },
];

export default function Accreditations() {
  return (
    <section className="bg-brand-grey py-16">
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading eyebrow="Trusted & certified" title="We Are Proud Members Of" />
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-5">
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
    </section>
  );
}
