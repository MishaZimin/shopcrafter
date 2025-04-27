import { IProduct } from '@/entities/product/model/types';
import { MOCK_SHOPS } from '@/shared/api/mock';

export const getShopBySlug = async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const shop = MOCK_SHOPS.find((shop) => shop.slug === slug);
  return shop || null;
};

export const getProductsByShopSlug = async (
  slug: string,
): Promise<IProduct[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const shop = MOCK_SHOPS.find((shop) => shop.slug === slug);
  return shop ? shop.products : [];
};

export const getProductById = async (id: string): Promise<IProduct | null> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  for (const shop of MOCK_SHOPS) {
    const product = shop.products.find((p) => p.id === id);
    if (product) return product;
  }

  return null;
};
