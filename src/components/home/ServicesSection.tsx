import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/home/ServiceCard";
import { featuredServices } from "@/lib/services";

export default function ServicesSection() {
  return (
    <section className="bg-white py-20" id="services">
      <div className="mx-auto max-w-[88rem] px-4">
        <SectionHeading
          eyebrow="Our Services"
          title="What Top Removals Can Do For You"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
