import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

/* CONFIRM: replace "—" cells with real price ranges e.g. "£350–£450" once verified */
const costTable = [
  { size: "Studio / bedsit", range: "—" },
  { size: "1-bedroom flat", range: "—" },
  { size: "2-bedroom flat or house", range: "—" },
  { size: "3-bedroom house", range: "—" },
  { size: "4+ bedroom house", range: "—" },
];

const factors = [
  { label: "Property size and volume", detail: "Larger properties need more crew hours and bigger vehicles." },
  { label: "Distance between addresses", detail: "Local London moves cost less than Surrey, Home Counties or national relocations." },
  { label: "Floor level and lift access", detail: "A fourth-floor flat without a lift costs more to load than a ground-floor house." },
  { label: "Packing requirements", detail: "Full professional packing adds to the price but cuts time and reduces damage risk." },
  { label: "Parking suspensions", detail: "Borough permits are needed on most London streets and are arranged in advance." },
  { label: "Crew size and day of week", detail: "Weekends and end-of-month dates carry a premium due to demand." },
];

export default function CostSection() {
  return (
    <section
      id="cost"
      className="bg-brand-grey py-20"
      aria-labelledby="cost-heading"
    >
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          eyebrow="Removal Prices 2026"
          title="How Much Do Removals Cost in London in 2026?"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-brand-charcoal/85">
          Removal costs in London in 2026 depend on property size, access conditions and move
          complexity. Guide price ranges by property size are shown below — use the removal
          calculator or book a free survey for an exact fixed price.
        </p>

        {/* Cost table */}
        <div className="mx-auto mt-10 max-w-2xl" data-reveal>
          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full min-w-[420px] text-sm">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide sm:px-6 sm:py-4">
                    Property size
                  </th>
                  <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide sm:px-6 sm:py-4">
                    Estimated cost (2026)
                  </th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, i) => (
                  <tr
                    key={row.size}
                    className={i % 2 === 0 ? "bg-white" : "bg-brand-grey/60"}
                  >
                    <td className="px-4 py-3 font-medium text-brand-navy sm:px-6 sm:py-4">{row.size}</td>
                    <td className="px-4 py-3 text-brand-charcoal/80 sm:px-6 sm:py-4">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="bg-white px-4 py-3 text-xs text-brand-charcoal/60 sm:px-6">
              Figures for standard local London moves. Add-ons (packing, storage, parking suspensions) affect the final price.
            </p>
          </div>
        </div>

        {/* Cost factors */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((f, i) => (
            <div
              key={f.label}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              data-reveal
              data-delay={String((i % 3) + 1)}
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-brand-navy">
                {f.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/80">{f.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
          <p className="text-sm leading-relaxed text-brand-charcoal/85">
            <strong>A note on cheap quotes:</strong> The lowest quote rarely offers the safest
            move. Uninsured or unlicensed operators leave you with no financial remedy if items
            are damaged. Our fixed-price quotes include full public liability and goods-in-transit
            insurance. BAR{" "}
            <Link href="/certificates" className="text-brand-orange underline underline-offset-2">
              accreditation
            </Link>{" "}
            means there is an independent complaints and claims process if anything goes wrong.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/bookservice#quick-quote" variant="orange" size="lg">
            Get a Free Fixed Quote
          </Button>
          <Button href="/bookservice" variant="navy" size="lg">
            Removal Calculator
          </Button>
        </div>
      </div>
    </section>
  );
}
