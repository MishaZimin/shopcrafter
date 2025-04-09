'use client';

import { useAppRouter } from '@/shared/lib/navigation';
import { Button } from '@/shared/ui/Buttons/Button';

export default function HomePage() {
  const { router } = useAppRouter();

  return (
    <div className="flex flex-row gap-8 flex-wrap p-4">
      <Button text="go lending" onClick={() => router.push('/info')} />
    </div>
  );
}
