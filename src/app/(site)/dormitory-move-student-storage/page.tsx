import type { Metadata } from "next";
import { buildMetadata, serviceH1, serviceLdFor } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBand from "@/components/home/CtaBand";
import QuoteCtaRow from "@/components/services/QuoteCtaRow";
import CheckList from "@/components/services/CheckList";
import Faq, { type FaqItem } from "@/components/services/Faq";
import Testimonials from "@/components/home/Testimonials";
import Accreditations from "@/components/home/Accreditations";

export const metadata: Metadata = buildMetadata("dormitory-move-student-storage");

const services = [
  "Professional packing of all dormitory belongings",
  "Furniture disassembly and reassembly",
  "UK door-to-door delivery",
  "European and international shipping",
  "Secure 24/7 CCTV-monitored storage",
  "Short and long-term storage options",
  "Optional full insurance cover",
  "No hidden fees — fixed quotes",
  "Customers do not need to be present during the move",
];

const faqs: FaqItem[] = [
  {
    question: "Can you move just a few single items from a dormitory?",
    answer:
      "Yes. We can move a single item, a few boxes or an entire room. Contact us with the details of what you need moved and we will provide a fixed quote.",
  },
  {
    question: "How do you handle books and paper for a dormitory move?",
    answer:
      "Books and paper documents are best packed in plastic crates rather than cardboard boxes. Plastic crates are stronger, stackable and protect against moisture. We can provide crate hire as part of your dormitory move to keep your study materials safe in transit.",
  },
  {
    question: "Can I access my belongings while they are in storage?",
    answer:
      "Yes. We can arrange access to your stored items with advance notice. Our storage facilities are monitored 24/7 by CCTV and fully insured. Contact your move coordinator to schedule a visit.",
  },
  {
    question: "Do I need to be present during the collection?",
    answer:
      "You do not need to be present, but you will need to arrange access to your dormitory room. Most universities require written authorisation for a third party to access student accommodation — check with your university and provide us with any necessary documentation before collection day.",
  },
  {
    question: "Do you offer international delivery for students moving abroad?",
    answer:
      "Yes. We provide European and international shipping for students relocating overseas. Your belongings are packed with enhanced protection and shipped by road or container depending on the destination. We handle all documentation and customs clearance.",
  },
];

export default function DormitoryMoveStudentStoragePage() {
  return (
    <>
      <JsonLd data={serviceLdFor("dormitory-move-student-storage")} />
      <PageBanner
        title="Dormitory Move & Student Storage"
        subtitle="Professional Packing · UK & International Delivery · 24/7 Secure Storage"
        h1={serviceH1["dormitory-move-student-storage"]}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Dormitory Move & Student Storage" },
        ]}
      />

      <QuoteCtaRow />

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading align="left" eyebrow="Our service" title="Moving Your Dormitory, Sorted" />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              Top Removals offers a complete dormitory move and student storage service for university
              students in London and across the UK. Whether you are moving between terms, relocating
              to a new campus or heading abroad for a year, our team handles the packing, transport
              and storage so you can focus on your studies.
            </p>
            <p>
              Our movers will come to your dormitory, professionally pack all your belongings,
              disassemble any furniture and transport everything safely to your destination — whether
              that is another UK address, a storage unit, or an overseas location. You do not need to
              be present during the move, making it easy to fit around your schedule.
            </p>
            <p>
              All stored items are held in our fully insured, 24/7 CCTV-monitored facility. You can
              store between terms and retrieve your belongings when you need them, with no surprise
              fees and easy access by arrangement.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-grey py-20">
        <div className="mx-auto max-w-[88rem] px-4">
          <SectionHeading eyebrow="What's included" title="What We Offer for Dormitory Moves" />
          <CheckList items={services} columns={2} className="mx-auto mt-12 max-w-5xl" />
        </div>
      </section>

      {/* UK moves */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading align="left" eyebrow="Domestic moves" title="UK Dormitory Relocations" />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              For moves within the UK, our team collects from your dormitory, packs everything
              carefully and delivers directly to your new address. We cover all UK universities and
              student accommodation — London, Oxford, Cambridge, Manchester, Edinburgh and everywhere
              in between.
            </p>
            <p>
              If your new address is not yet ready, we can place your belongings in storage and
              deliver on a date of your choosing. This is ideal for the gap between terms when you
              need to vacate your room before your new accommodation is available.
            </p>
          </div>
        </div>
      </section>

      {/* International moves */}
      <section className="bg-brand-sand py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading align="left" eyebrow="Study abroad" title="International Student Relocations" />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-charcoal/85">
            <p>
              Heading to Europe or beyond for a year abroad or a postgraduate programme? Top Removals
              handles international student moves with the same care as a full household removal. We
              pack your belongings with enhanced protection, manage all shipping logistics and handle
              customs documentation at both ends.
            </p>
            <p>
              For international moves, we recommend contacting us at least 4–6 weeks before your
              departure date to allow time for packing assessment, shipping schedules and any customs
              requirements specific to your destination country.
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

      <CtaBand
        heading="Book Your Dormitory Move or Student Storage Today"
        buttonLabel="Get a Free Quote"
        buttonHref="/bookservice"
      />

      <Testimonials />
      <Accreditations />
    </>
  );
}
