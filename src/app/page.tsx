import { Contact } from "@/components/home/contact";
import { FamilyCommunity } from "@/components/home/family-community";
import { FeesPackages } from "@/components/home/fees-packages";
import { Hero } from "@/components/home/hero";
import { KeyInfoStrip } from "@/components/home/key-info-strip";
import { MeetTheTeam } from "@/components/home/meet-the-team";
import { OurApproach } from "@/components/home/our-approach";
import { OurGoal } from "@/components/home/our-goal";
import { OurServices } from "@/components/home/our-services";
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
      {/* Order follows a parent's questions: is this for my child, how do you teach, what does a
          day look like, why, who, what does it cost and what's expected, then how do I start.
          Policies sit beside Fees, before the enquiry, so payment rules are read before
          committing and the page ends on the next step, not on fine print.
          Surfaces alternate (white · tint · white · sand · navy · white · sand · tint · white) so no
          two neighbours share a background, with or without the placeholder-only Team/Testimonials. */}
      <main id="main">
        <Hero />
        <KeyInfoStrip />
        <WhoWeSupport />
        <OurApproach />
        <OurServices />
        <SchoolHours />
        <OurGoal />
        <MeetTheTeam />
        <Testimonials />
        <FamilyCommunity />
        <FeesPackages />
        <SchoolPolicies />
        <Contact />
      </main>
      <SiteFooter />
      <StickyMobileCta watchId="hero-actions" hideWithinId="contact" />
    </>
  );
}
