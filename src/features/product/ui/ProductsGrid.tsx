'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { IProduct } from '@/entities/product/model/types';
import { ProductCardLink } from '@/features/product/ui/ProductCardLink';
import { getProductsByShopSlug } from '@/features/shop/api/api';

export default function ProductGrid() {
  const pathname = usePathname();
  const slug = pathname.split('/')[1];
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductsByShopSlug(slug);
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, [slug]);

  if (loading) {
    return <div className="text-center py-10">Загрузка товаров...</div>;
  }

  if (!products.length) {
    return <div className="text-center py-10">Товары не найдены</div>;
  }

  return (
    <div className="container">
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCardLink key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
