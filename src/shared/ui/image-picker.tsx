'use client';

import { useSetAtom } from 'jotai';
import { useDropzone } from 'react-dropzone';
import { clearImageBlockAtom, updateImageBlockAtom } from '../lib/image-store';
import { Upload } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { useEffect } from 'react';

type ImagePickerProps = {
  blockKey: string;
  className?: string;
  aspectRatio?: string;
  text?: string;
};

export const ImagePicker = ({
  blockKey,
  className,
  text,
}: ImagePickerProps) => {
  const updateBlock = useSetAtom(updateImageBlockAtom);
  const clearBlock = useSetAtom(clearImageBlockAtom);

  useEffect(() => {
    clearBlock(blockKey);
  }, [blockKey, clearBlock]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    maxFiles: 1,
    onDrop: (files) => {
      if (files[0]) {
        updateBlock({ blockKey, file: files[0] });
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        'bg-gray-100 rounded-lg py-2 px-4 text-center cursor-pointer transition-colors hover:bg-gray-200',
        isDragActive ? 'bg-gray-200' : '',
        className
      )}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center gap-2 h-full">
        {!text ? (
          <>
            <Upload className="w-8 h-8 text-muted-foreground" />
            <p className="font-medium">
              {isDragActive
                ? 'Отпустите изображение'
                : 'Перетащите или нажмите'}
            </p>
          </>
        ) : (
          <p className="font-medium text-S my-auto">
            {isDragActive ? 'Отпустите изображение' : text}
          </p>
        )}
      </div>
    </div>
  );
};
