import { AudienceSection } from '@/features/landing/audience/ui/AudienceSection';
import { HeroSection } from '@/features/landing/hero/ui/HeroSection';
import { PricingSection } from '@/features/landing/pricing/ui/PricingSection';
import { WorkflowSection } from '@/features/landing/workflow/ui/WorkflowSection';

export default function Landing() {
  return (
    <>
      <HeroSection />
      <AudienceSection />
      <WorkflowSection />
      <PricingSection />
    </>
  );
}
