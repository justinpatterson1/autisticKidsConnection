import { FamilyCommunity } from "@/components/home/family-community";
import { FeesPackages } from "@/components/home/fees-packages";
import { Hero } from "@/components/home/hero";
import { KeyInfoStrip } from "@/components/home/key-info-strip";
import { OurApproach } from "@/components/home/our-approach";
import { OurGoal } from "@/components/home/our-goal";
import { OurServices } from "@/components/home/our-services";
import { SchoolHours } from "@/components/home/school-hours";
import { SchoolPolicies } from "@/components/home/school-policies";
import { WhoWeSupport } from "@/components/home/who-we-support";
import { CompactHeader } from "@/components/layout/compact-header";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <CompactHeader watchId="site-header" />
      {/* Bottom padding keeps the sticky mobile bar off the last content; it moves to the footer when that ships. */}
      <main
        id="main"
        className="max-nav:pb-[calc(77px+env(safe-area-inset-bottom))]"
      >
        <Hero />
        <KeyInfoStrip />
        <WhoWeSupport />
        <OurApproach />
        <OurServices />
        <OurGoal />
        <FamilyCommunity />
        <FeesPackages />
        <SchoolHours />
        <SchoolPolicies />
      </main>
      <StickyMobileCta watchId="hero-actions" />
    </>
  );
}
