import { Header } from '@/widgets/header/ui/Header';
import { Footer } from '@/widgets/footer/Footer';

const InfoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className={`mx-auto h-svh w-full lg:w-[1024px]`}>
        <div className="mx-4 sm:mx-10 lg:mx-0 pt-[96px] pb-[96px]">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default InfoLayout;
