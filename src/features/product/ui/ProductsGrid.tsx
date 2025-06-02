/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { ProductCardLink } from '@/features/product/ui/ProductCardLink';
import { useStoreCategoryIds } from '../model/useStoreCategoryIds';
import { useUserStoreCategory } from '../model/useUserStoreCategory';
import { useProducts } from '../api/useProduct';
import { IProductNew } from '@/entities/product/model/types';
import { SkeletonGridLoader } from '@/shared/ui/SkeletonGridLoader/SkeletonGridLoader';

interface ProductGridProps {
  storeId?: number;
  isAdmin?: boolean;
}

export default function ProductGrid({ isAdmin = false }: ProductGridProps) {
  const { storeId, categoryId } = isAdmin
    ? useStoreCategoryIds()
    : useUserStoreCategory();
  console.log(storeId, categoryId);
  const {
    data: products,
    isLoading,
    isFetched,
  } = useProducts(storeId, categoryId);

  if (isLoading && !isFetched) {
    return (
      <div className="container min-w-full">
        <SkeletonGridLoader columns={4} itemHeight={456} rows={1} />
      </div>
    );
  }

  if (!products?.length && isFetched) {
    return <div className="text-center py-10">Товары не найдены</div>;
  }

  return (
    <div className="container min-w-full">
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {(products || []).map((product: IProductNew) => (
          <ProductCardLink
            key={product.id}
            product={product}
            isAdmin={isAdmin}
          />
        ))}
      </div>
    </div>
  );
}
