import type { Metadata } from "next";
import BoroughPage from "@/components/areas/BoroughPage";
import { islington } from "@/lib/boroughs";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: islington.metaTitle,
  description: islington.metaDescription,
  alternates: { canonical: `/areas/${islington.slug}` },
  openGraph: {
    title: islington.metaTitle,
    description: islington.metaDescription,
    url: `/areas/${islington.slug}`,
    siteName: SITE.name,
    type: "website",
  },
};

export default function IslingtonAreaPage() {
  return <BoroughPage borough={islington} />;
}
