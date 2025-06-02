'use client';

import { Footer } from '@/widgets/footer/ui/Footer';
import { AdminStoreHeader } from '@/widgets/header/ui/AdminStoreHeader';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminStoreHeader />
      <main className="flex-grow pt-21">
        <div className="mx-auto w-full px-4  lg:px-0 lg:max-w-[1200px] ">
          {children}
        </div>
      </main>
      <div className="mx-auto w-full px-4  lg:px-0 lg:max-w-[1200px] pb-8 pt-12">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
