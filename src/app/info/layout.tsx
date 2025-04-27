import { Footer } from '@/widgets/footer/ui/Footer';
import { LandingHeader } from '@/widgets/header/ui/LandingHeader';

const InfoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LandingHeader />
      <div className={`mx-auto h-svh w-full lg:w-[800px]`}>
        <div className="mx-4 sm:mx-10 lg:mx-0 pt-[96px] pb-[96px]">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default InfoLayout;
