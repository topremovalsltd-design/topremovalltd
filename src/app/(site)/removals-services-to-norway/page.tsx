import type { Metadata } from "next";
import { buildMetadata, serviceH1, serviceLdFor } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/home/CtaBand";
import QuoteCtaRow from "@/components/services/QuoteCtaRow";
import CheckList from "@/components/services/CheckList";
import TipList, { type Tip } from "@/components/services/TipList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = buildMetadata("removals-to-norway");

const benefits = [
  "Personal move coordinator from first call to final delivery",
  "Free collections from anywhere in the UK",
  "Full customs clearance and documentation handled by us",
  "Road-trains carrying 110+ m³ — efficient and cost-effective",
  "Same-day quotes — phone or email",
  "Competitive insurance packages included",
  "Secure London warehouse and Oslo storage available",
  "Weekly summer departures, every 2–3 weeks in winter",
];

const destinations = [
  "Oslo — weekly departures",
  "Stavanger — bi-weekly departures",
  "Bergen — bi-weekly departures",
  "Trondheim — monthly departures",
  "Tromsø — by request",
  "Hamar, Horten, Ålesund and surrounding areas",
];

const faqs: FaqItem[] = [
  {
    question: "How long does the transit from London to Norway take?",
    answer:
      "Truck transit from London to Norway takes approximately 3–4 days. For a full door-to-door service, allow 2–3 days for packing, 3–4 days in transit and 1–2 days for unloading and delivery at destination. Part-load shipments sharing space with other customers can take up to 2 weeks depending on consolidation schedules.",
  },
  {
    question: "How much does it cost to move to Norway?",
    answer:
      "The cost depends on the volume of your goods. Single items typically range from £300 to £350. A full household load can cost between £10,000 and £12,000 per truck. Contact us for a same-day quote tailored to your specific move.",
  },
  {
    question: "Do you handle customs clearance?",
    answer:
      "Yes. Our team handles all customs documentation and clearance on your behalf. We will guide you through the paperwork required for moving personal effects to Norway, including any duty-exempt declarations for household goods.",
  },
  {
    question: "Can you collect from anywhere in the UK?",
    answer:
      "Yes. Collections are free from anywhere in the UK. Our vehicles cover England, Scotland and Wales. We will schedule a convenient collection date that aligns with your chosen departure.",
  },
  {
    question: "Do you offer storage in Norway?",
    answer:
      "Yes. We have storage facilities in Oslo and our London warehouse for flexibility at either end of your move. This is useful if your new Norwegian property is not ready to receive goods on arrival.",
  },
];

const tips: Tip[] = [
  {
    title: "Plan around Norway's extended daylight hours",
    body: "Norway experiences very long summer days and very short winter days depending on your destination. If you are moving to northern Norway such as Tromsø, be prepared for the midnight sun in summer and polar night in winter. This can affect your first weeks settling in, so plan your schedule and blackout blinds in advance.",
  },
  {
    title: "Pack warm clothing separately for easy access",
    body: "Norwegian winters are harsh, particularly outside the major cities. Pack warm coats, boots and thermals in a separate bag or accessible box rather than deep in a container. This ensures you have what you need immediately on arrival, even before the bulk of your belongings are unpacked.",
  },
  {
    title: "Consider winter storage for mountain road closures",
    body: "Some mountain passes and rural roads in Norway close seasonally due to heavy snowfall. If you are moving to a remote or highland area, check the expected road conditions for your destination. Our Oslo storage facility allows you to receive goods there first and arrange onward delivery once your road is accessible.",
  },
];

export default function RemovalsToNorwayPage() {
  return (
    <>
      <JsonLd data={serviceLdFor("removals-to-norway")} />
      <PageBanner
        title="Removals to Norway"
        subtitle="London to Oslo · Weekly Departures · Full Door-to-Door Service"
        h1={serviceH1["removals-to-norway"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Removals to Norway" },
        ]}
      />

      <QuoteCtaRow />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading align="left" eyebrow="Our service" title="Removals to Norway from London" />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              Top Removals provides regular, reliable door-to-door removals from London and the rest
              of the UK to Norway. Whether you are relocating to Oslo, Bergen, Stavanger or further
              north, our experienced international team manages every step — from packing and
              collection through customs clearance to final delivery at your Norwegian address.
            </p>
            <p>
              We operate large road-trains capable of carrying over 110 cubic metres, making your
              move efficient whether you are shipping a single item or an entire household. Every
              customer is assigned a personal move coordinator who remains your single point of
              contact throughout the entire process.
            </p>
            <p>
              With local partner teams across Norway — including Oslo, Hamar, Horten, Stavanger,
              Ålesund, Bergen, Trondheim and Tromsø — we can deliver right to your door, no matter
              where in Norway you are heading.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Where we go" title="Regular Departures to Norway" />
          <CheckList items={destinations} columns={2} className="mx-auto mt-12 max-w-3xl" />
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="What you get" title="What's Included in Your Norway Move" />
          <CheckList items={benefits} columns={2} className="mx-auto mt-12 max-w-5xl" />
        </div>
      </section>

      {/* Pricing info */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading align="left" eyebrow="Costs and timing" title="Pricing and Transit Times" />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              Costs vary based on the volume of goods you need to move. For a rough guide: single
              items typically cost between £300 and £350, while a full household load (one truck) is
              usually between £10,000 and £12,000. Call or email us for a same-day quote specific to
              your move.
            </p>
            <p>
              Transit from London to Norway takes 3–4 days by road. For a complete door-to-door
              service, total time from packing to final delivery is typically 6–9 days. Part-load
              shipments (sharing truck space) can take up to 2 weeks as we wait to consolidate loads.
            </p>
            <p>
              We depart weekly during summer months. In winter (typically November to March), the
              schedule is every 2–3 weeks due to reduced demand and road conditions in northern
              Norway. Your move coordinator will confirm the next available departure at the time of
              booking.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Good to know" title="Frequently Asked Questions" />
          <Faq items={faqs} className="mt-10" />
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="Helpful advice" title="Tips for Moving to Norway" />
          <TipList tips={tips} numbered className="mt-12" />
        </div>
      </section>

      <CtaBand
        heading="Ready to Move to Norway? Get a Same-Day Quote"
        buttonLabel="Get a Free Quote"
        buttonHref="/bookservice"
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
