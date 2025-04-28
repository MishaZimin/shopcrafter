'use client';

import { NewsDetailContent } from '@/features/new/ui/NewsDetailContent';
import { Button } from '@/shared/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const NewsDetails = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="relative py-8">
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-4 rounded-full w-10 h-10 "
        onClick={handleBackClick}
      >
        <ArrowLeft className="w-5 h-5" />
      </Button>

      <div className="w-full max-w-[600px] mx-auto px-4">
        <NewsDetailContent />
      </div>
    </div>
  );
};
