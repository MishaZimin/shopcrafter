'use client';

import { IProduct } from '@/entities/product/model/types';
import { usePathname, useRouter } from 'next/navigation';
import { AddCartButton } from './AddCartButton';
import { ProductCard } from '@/entities/product/ui/ProductCard';

interface ProductGridCardProps {
  product: IProduct;
}

export const ProductCardLink = ({ product }: ProductGridCardProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.split('/')[1];

  const handleClick = () => {
    router.push(`/${slug}/${product.id}`);
    console.log('go card', product.id);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <ProductCard
        product={product}
        actionSlot={<AddCartButton productId={product.id} />}
      />
    </div>
  );
};
