'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getFromLocalStorage } from '@/shared/lib/local-storage';

const PUBLIC_PATHS = ['/auth', '/info'];
const PUBLIC_PATH_REGEX = /^\/\d+$/;

type Props = {
  children: React.ReactNode;
};

export const AuthGuard = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = getFromLocalStorage('accessToken');

    if (
      !token &&
      !PUBLIC_PATHS.includes(pathname) &&
      !PUBLIC_PATH_REGEX.test(pathname)
    ) {
      router.replace('/auth');
    } else {
      setChecked(true);
    }
  }, [pathname, router]);

  if (!checked) return null;

  return <>{children}</>;
};
