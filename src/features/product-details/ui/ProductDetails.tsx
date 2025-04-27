'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { IProduct } from '@/entities/product/model/types';
import { AddCartButton } from '@/features/product/ui/AddCartButton';
import { getProductById } from '@/features/shop/api/api';
import Image from 'next/image';

export const ProductDetails = () => {
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    }
  }, [id]);

  if (!product) return <div>Загрузка...</div>;

  return (
    <div className=" bg-base1 rounded-[5px] flex flex-row gap-8 p-6 ">
      <div className="w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          className=" w-[560px] h-full"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <div className="flex flex-row w-full justify-between">
          <div className="flex-1 flex flex-col gap-y-2">
            <h4 className="text-h4 font-bold">{product.name}</h4>
            <p className="text-xl font-bold">{product.price}</p>
          </div>
          <AddCartButton productId={product.id} />
        </div>

        <div className="space-y-4 my-6">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Материал</h3>
            <h3 className="font-semibold">Вес</h3>
            <h3 className="font-semibold">Состав</h3>
            <h3 className="font-semibold">Царская шапка</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
