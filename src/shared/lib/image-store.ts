'use client';

import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export type ImageBlock = {
  id: string;
  file?: File;
  url: string;
};

export const imageBlocksAtom = atomWithStorage<Record<string, ImageBlock>>(
  'image-blocks',
  {},
);

export const updateImageBlockAtom = atom(
  null,
  (get, set, { blockKey, file }: { blockKey: string; file: File }) => {
    const url = URL.createObjectURL(file);
    set(imageBlocksAtom, {
      ...get(imageBlocksAtom),
      [blockKey]: { id: blockKey, file, url },
    });
  },
);

export const clearImageBlockAtom = atom(null, (get, set, blockKey: string) => {
  const blocks = { ...get(imageBlocksAtom) };
  if (blocks[blockKey]?.url.startsWith('blob:')) {
    URL.revokeObjectURL(blocks[blockKey].url);
  }
  delete blocks[blockKey];
  set(imageBlocksAtom, blocks);
});
