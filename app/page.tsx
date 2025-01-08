import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { ServicesSection } from "@/components/services-section"
import { PartnerSection } from "@/components/partner-section"
import { WorkspaceSection } from "@/components/workspace-section"
import { PartnersShowcase } from "@/components/partners-showcase"
import { ScrollingHeadline } from "@/components/scrolling-headline"
import { TeamSection } from "@/components/team-section"
import { ServicesListSection } from "@/components/services-list-section"
import { FeedbackSection } from "@/components/feedback-section"
import { SiteFooter } from "@/components/site-footer"
import { TeamSectionCrafting } from '@/components/team-section-crafting'

export default async function Page() {

  return (
    <>
      <SiteHeader />
        <HeroSection />
      <WorkSection />
        <ServicesSection />
      <PartnerSection />
      <WorkspaceSection />
        <PartnersShowcase />
      <ScrollingHeadline />
      <TeamSection />
         <TeamSectionCrafting />
        <ServicesListSection />
      <FeedbackSection />
      <SiteFooter />
    </>
  )
}



