'use client';

import { useParams } from 'next/navigation';

import { useProduct } from '@/features/product/api/useProduct';
import { AddCartButton } from '@/features/product/ui/AddCartButton';
import Image from 'next/image';
import { useUserStoreCategory } from '@/features/product/model/useUserStoreCategory';
import { SkeletonGridLoader } from '@/shared/ui/SkeletonGridLoader/SkeletonGridLoader';

export const ProductDetails = () => {
  const params = useParams();
  const productId = Number(params.id);
  const {
    storeId,
    categoryId,
    isLoading: isStoreLoading,
  } = useUserStoreCategory();

  const {
    data: product,
    isLoading: isProductLoading,
    error,
  } = useProduct(storeId!, categoryId!, productId, {
    enabled: !!storeId && !!categoryId && !!productId,
  });
  // interface SkeletonGridLoaderProps {
  //   columns?: number;
  //   rows?: number;
  //   itemHeight?: number;
  //   total?: number;
  //   className?: string;
  // }
  if (isStoreLoading || isProductLoading)
    return (
      <div className="w-full">
        <SkeletonGridLoader rows={1} columns={2} itemHeight={560} total={2} />
      </div>
    );
  if (!product || error) return <div>Ошибка загрузки товара</div>;

  return (
    <div className=" rounded-[5px] flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2">
        <Image
          src={product.imageUrls[product.imageUrls.length - 1]}
          alt={product.name}
          className="w-[560px] h-full object-cover rounded-[5px]"
          width={560}
          height={560}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-8">
        <div className="flex flex-row w-full justify-between">
          <div className="flex-1 flex flex-col gap-y-2">
            <h4 className="text-h4 font-bold">{product.name}</h4>
            <p className="text-xl font-bold">{product.price} ₽</p>
          </div>
          <AddCartButton
            product={{
              id: String(product.id),
              name: product.name,
              price: product.price,
              imageUrl: product.imageUrls[product.imageUrls.length - 1],
              description: product.description,
              stock: product.stock,
            }}
          />
        </div>
        <p className="text-M">{product.description}</p>
      </div>
    </div>
  );
};
