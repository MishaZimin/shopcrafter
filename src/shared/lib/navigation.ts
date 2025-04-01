'use client';

import { usePathname, useRouter } from 'next/navigation';

export const useAppRouter = () => {
  const router = useRouter();
  const pathname = usePathname();

  return {
    router,
    pathname,
  };
};
