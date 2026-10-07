import { Contact } from "@/components/home/contact";
import { FamilyCommunity } from "@/components/home/family-community";
import { FeesPackages } from "@/components/home/fees-packages";
import { Hero } from "@/components/home/hero";
import { KeyInfoStrip } from "@/components/home/key-info-strip";
import { MeetTheTeam } from "@/components/home/meet-the-team";
import { OurApproach } from "@/components/home/our-approach";
import { OurGoal } from "@/components/home/our-goal";
import { OurServices } from "@/components/home/our-services";
import { OurVision } from "@/components/home/our-vision";
import { SchoolHours } from "@/components/home/school-hours";
import { SchoolPolicies } from "@/components/home/school-policies";
import { Testimonials } from "@/components/home/testimonials";
import { WhoWeSupport } from "@/components/home/who-we-support";
import { CompactHeader } from "@/components/layout/compact-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StickyMobileCta } from "@/components/layout/sticky-mobile-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <CompactHeader watchId="site-header" />
      <main id="main">
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
        <MeetTheTeam />
        <Testimonials />
        <OurVision />
        <Contact />
      </main>
      <SiteFooter />
      <StickyMobileCta watchId="hero-actions" />
    </>
  );
}
