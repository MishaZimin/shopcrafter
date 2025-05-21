'use client';

import { useAppRouter } from '@/shared/lib/navigation';
import { Button } from '@/shared/ui/button';

export default function Page() {
  const { router } = useAppRouter();

  return (
    <div className="flex flex-row gap-4 flex-wrap p-4">
      <Button onClick={() => router.push('/info')}>landing</Button>
      <Button onClick={() => router.push('/my-shops')}>my shops</Button>
      <Button onClick={() => router.push('/auth')}>auth</Button>
    </div>
  );
}
