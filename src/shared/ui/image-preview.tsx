'use client';
import Image from 'next/image';
import { useAtomValue } from 'jotai';
import { imageBlocksAtom } from '../lib/image-store';
import { FileImage } from 'lucide-react';

type ImagePreviewProps = {
  blockKey: string;
  className?: string;
  alt?: string;
  showPlaceholder?: boolean;
};

export const ImagePreview = ({
  blockKey,
  className,
  alt = '',
  showPlaceholder = false,
}: ImagePreviewProps) => {
  const blocks = useAtomValue(imageBlocksAtom);
  const block = blocks[blockKey];

  if (!block) {
    if (!showPlaceholder) return null;

    return (
      <>
        <div
          className={
            className +
            ' flex items-center justify-center border-2 border-dashed border-gray-300 rounded aspect-square'
          }
        >
          <FileImage
            className="min-w-20 text-gray-400"
            width={'50px'}
            height={'50px'}
          />
        </div>
      </>
    );
  }

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
