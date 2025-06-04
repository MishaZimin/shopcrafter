// app/last-store/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LastStorePage() {
  const router = useRouter();

  useEffect(() => {
    const lastStoreDescription = localStorage.getItem('lastVisitedStore');

    if (lastStoreDescription) {
      router.push(`/${lastStoreDescription}`);
    } else {
      router.push('/');
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Перенаправляем вас в магазин...</p>
    </div>
  );
}
