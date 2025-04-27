'use client';

import { Card, CardContent } from '@/shared/ui/card';
import { INew } from '../model/types';

interface INewCardProps {
  newItem: INew;
}

export const NewCard = ({ newItem }: INewCardProps) => {
  return (
    <Card className="w-full max-w-md cursor-pointer h-full">
      <CardContent>
        <h3 className="text-L font-semibold mb-2">{newItem.name}</h3>
        <p className=" text-S">{newItem.description}</p>
      </CardContent>
    </Card>
  );
};
