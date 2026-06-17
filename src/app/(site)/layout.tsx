import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";
import JsonLd from "@/components/seo/JsonLd";
import { siteGraphLd } from "@/lib/seo";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <JsonLd data={siteGraphLd()} />
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingContact />
    </>
  );
}
