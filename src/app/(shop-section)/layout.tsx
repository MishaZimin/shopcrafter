import { Header } from '@/widgets/header/ui/Header';
import { Footer } from '@/widgets/footer/ui/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col">
        <div className="flex-1 mx-auto w-full px-4 sm:px-10 lg:px-0 lg:w-[1200px] pt-21">
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
