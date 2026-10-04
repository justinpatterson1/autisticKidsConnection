import { Hero } from "@/components/home/hero";
import { KeyInfoStrip } from "@/components/home/key-info-strip";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <KeyInfoStrip />
      </main>
    </>
  );
}
