import { FamilyCommunity } from "@/components/home/family-community";
import { Hero } from "@/components/home/hero";
import { KeyInfoStrip } from "@/components/home/key-info-strip";
import { OurApproach } from "@/components/home/our-approach";
import { OurGoal } from "@/components/home/our-goal";
import { OurServices } from "@/components/home/our-services";
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
        <OurApproach />
        <OurServices />
        <OurGoal />
        <FamilyCommunity />
      </main>
    </>
  );
}
