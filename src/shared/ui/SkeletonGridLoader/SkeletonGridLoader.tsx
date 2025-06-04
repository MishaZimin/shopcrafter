'use client';

import { cn } from '@/shared/lib/utils';
import { Skeleton } from '../skeleton';

interface SkeletonGridLoaderProps {
  columns?: number;
  rows?: number;
  itemHeight?: number;
  total?: number;
  className?: string;
}

export const SkeletonGridLoader = ({
  columns = 2,
  rows = 4,
  itemHeight = 200,
  total,
  className,
}: SkeletonGridLoaderProps) => {
  const skeletonCount = total ?? rows * columns;

  return (
    <div
      className={cn(
        'grid gap-6',
        `grid-cols-1 lg:grid-cols-${columns}`,
        className
      )}
    >
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <Skeleton
          key={index}
          className="w-full"
          style={{ height: `${itemHeight}px` }}
        />
      ))}
    </div>
  );
};
