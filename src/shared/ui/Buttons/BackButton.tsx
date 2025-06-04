'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../button';

type BackButtonProps = {
  href?: string;
  className?: string;
  iconClassName?: string;
};

export const BackButton = ({
  href,
  className = 'left-4 top-4 rounded-full w-9 h-9',
  iconClassName = 'w-4 h-4',
}: BackButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className={className}
      onClick={handleClick}
    >
      <ArrowLeft className={iconClassName} />
    </Button>
  );
};
