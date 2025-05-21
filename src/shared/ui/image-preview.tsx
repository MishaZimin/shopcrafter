'use client';
import Image from 'next/image';
import { useAtomValue } from 'jotai';
import { imageBlocksAtom } from '../lib/image-store';

type ImagePreviewProps = {
  blockKey: string;
  className?: string;
  alt?: string;
};

export const ImagePreview = ({
  blockKey,
  className,
  alt = '',
}: ImagePreviewProps) => {
  const blocks = useAtomValue(imageBlocksAtom);
  const block = blocks[blockKey];

  if (!block) return null;

  return (
    <Image
      src={block.url}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className={className + ' w-full h-full object-contain'}
      style={{ height: '100%', width: '100%' }}
    />
  );
};
