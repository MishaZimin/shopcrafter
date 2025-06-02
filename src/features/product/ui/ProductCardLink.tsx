'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { AddCartButton } from './AddCartButton';
import { AdminPanelActionsProductCard } from './AdminPanelActionsProductCard';
import { IProductNew } from '@/entities/product/model/types';

interface ProductGridCardProps {
  product: IProductNew;
  isAdmin?: boolean;
}

export const ProductCardLink = ({ product, isAdmin }: ProductGridCardProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const slug = pathname.split('/')[1];

  const handleClick = () => {
    if (!isAdmin) router.push(`/${slug}/${product.id}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <ProductCard
        product={product}
        actionSlot={
          isAdmin ? (
            <AdminPanelActionsProductCard
              productId={product.id}
              imageUrl={product.imageUrls[product.imageUrls?.length - 1]}
            />
          ) : (
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
          )
        }
      />
    </div>
  );
};
