import { Header } from '@/widgets/header/ui/Header';
import { Footer } from '@/widgets/footer/ui/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-21">
        <div className="mx-auto w-full px-4 sm:px-10 lg:px-0 lg:w-[1200px] ">
          {children}
        </div>
      </main>

      <div className="mx-auto w-full px-4 sm:px-10 lg:px-0 lg:w-[1200px] pb-8 pt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
