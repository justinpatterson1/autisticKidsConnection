import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      {/* Placeholder backdrop until the Hero section (01) is built. */}
      <main id="main" className="relative min-h-[clamp(640px,90vh,880px)] bg-navy" />
    </>
  );
}
