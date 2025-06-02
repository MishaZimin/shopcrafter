'use client';

import { atom } from 'jotai';

export type ImageBlock = {
  id: string;
  file?: File | null;
  url: string;
};

export const imageBlocksAtom = atom<Record<string, ImageBlock>>({});

export const updateImageBlockAtom = atom(
  null,
  (get, set, { blockKey, file }: { blockKey: string; file: File }) => {
    if (file) {
      const url = URL.createObjectURL(file);
      set(imageBlocksAtom, {
        ...get(imageBlocksAtom),
        [blockKey]: { id: blockKey, file, url },
      });
    }
  }
);

export const clearImageBlockAtom = atom(null, (get, set, blockKey: string) => {
  const blocks = { ...get(imageBlocksAtom) };
  if (blocks[blockKey]?.url.startsWith('blob:')) {
    URL.revokeObjectURL(blocks[blockKey].url);
  }
  delete blocks[blockKey];
  set(imageBlocksAtom, blocks);
});
