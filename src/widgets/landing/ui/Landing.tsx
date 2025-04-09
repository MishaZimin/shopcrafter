import { AudienceSection } from '@/features/landing/audience/ui/AudienceSection';
import { HeroSection } from '@/features/landing/hero/ui/HeroSection';
import { PricingSection } from '@/features/landing/pricing/ui/PricingSection';
import { WorkflowSection } from '@/features/landing/workflow/ui/WorkflowSection';

export default function Landing() {
  return (
    <div>
      <HeroSection />
      <AudienceSection />
      <WorkflowSection />
      <PricingSection />
      {/* 
      <section id="questions" className="pb-16">
        <h1 className="pb-2 text-h2">Частые вопросы</h1>
        <div className="w-full flex flex-row gap-4  rounded-xl">
          <div className=" bg-gray-100 rounded-xl flex-1 h-[300px]" />
        </div>
      </section>

      <section id="price" className="pb-16">
        <h1 className="pb-2 text-h2">Цены</h1>
        <div className="w-full flex flex-row gap-4  rounded-xl">
          <div className=" bg-gray-100 rounded-xl flex-1 h-[600px]" />
          <div className=" bg-gray-100 rounded-xl h-[600px] flex-1" />
          <div className=" bg-gray-100 rounded-xl h-[600px] flex-1" />
        </div>
      </section> */}
    </div>
  );
}
