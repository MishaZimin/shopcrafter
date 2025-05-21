'use client';

import { ImagePicker } from '@/shared/ui/image-picker';
import { ImagePreview } from '@/shared/ui/image-preview';

export default function Page() {
  return (
    <div className="w-full mx-auto p-6 flex flex-row gap-6">
      <div className="flex-1 flex flex-col gap-4">
        <ImagePicker blockKey="header-logo" className="w-full h-auto" />
        <div className="h-80">
          <ImagePreview blockKey="header-logo" className="h-full" />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <ImagePicker blockKey="header-background" className="w-full h-auto" />
        <div className="h-80">
          <ImagePreview blockKey="header-background" className="h-full" />
        </div>
      </div>
    </div>
  );
}
