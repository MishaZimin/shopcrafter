'use client';

import { useAppRouter } from '@/shared/lib/navigation';
import { Button } from '@/shared/ui/button';

export const ProfileButton = () => {
  const { router } = useAppRouter();

  const handleClick = () => {
    router.push('/profile');
  };

  return (
    <Button variant="ghost" onClick={handleClick}>
      Профиль
    </Button>
  );
};
