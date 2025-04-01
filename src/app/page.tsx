'use client';

import { useAppRouter } from '@/shared/lib/navigation';
import { Button } from '@/shared/ui/buttons/Button';

export default function Home() {
  const { router } = useAppRouter();

  return (
    <>
      <div className="m-4">
        <Button
          text={'go lending'}
          onClick={() => {
            router.push('/info');
          }}
        />
      </div>
    </>
  );
}
