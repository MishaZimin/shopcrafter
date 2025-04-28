'use client';

import { Button } from '@/shared/ui/button';
// import { useAppRouter } from '@/shared/lib/navigation';

export const ProceedOfCheckoutButton = () => {
  //   const { router } = useAppRouter();

  return (
    <Button
      onClick={() => {
        // router.push(`/`);
        console.log('ProceedOfCheckout click');
      }}
    >
      Перейти к оформлению
    </Button>
  );
};
