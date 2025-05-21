'use client';

import { useSetAtom } from 'jotai';
import { useDropzone } from 'react-dropzone';
import { updateImageBlockAtom } from '../lib/image-store';
import { Upload } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

type ImagePickerProps = {
  blockKey: string;
  className?: string;
  aspectRatio?: string;
};

export const ImagePicker = ({ blockKey, className }: ImagePickerProps) => {
  const updateBlock = useSetAtom(updateImageBlockAtom);
  // const clearBlock = useSetAtom(clearImageBlockAtom);

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
        'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
        isDragActive ? 'border-primary bg-primary/10' : 'border-muted',
        className,
      )}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center gap-2">
        <Upload className="w-8 h-8 text-muted-foreground" />
        <p className="font-medium">
          {isDragActive ? 'Отпустите изображение' : 'Перетащите или нажмите'}
        </p>
      </div>
    </div>
  );
};
