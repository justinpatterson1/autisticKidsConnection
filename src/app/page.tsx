import { Hero } from "@/components/home/hero";
import { KeyInfoStrip } from "@/components/home/key-info-strip";
import { WhoWeSupport } from "@/components/home/who-we-support";
import { SiteHeader } from "@/components/layout/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <KeyInfoStrip />
        <WhoWeSupport />
      </main>
    </>
  );
}
