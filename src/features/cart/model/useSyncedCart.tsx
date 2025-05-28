import { useEffect } from 'react';
import {
  CartItem,
  useStoreCartAtoms,
} from '@/features/cart/model/cartAtomsMap';
import { useAtom } from 'jotai';
import { syncCartWithProducts } from './syncCart';
import { useQuery } from '@tanstack/react-query';
import { ProductApi } from '@/features/product/api/productApi';
import { useUserStoreCategory } from '@/features/product/model/useUserStoreCategory';

export const useSyncedCart = () => {
  const { storeId, categoryId } = useUserStoreCategory();
  const { cartAtom } = useStoreCartAtoms(storeId);
  const [cart, setCart] = useAtom<CartItem[]>(cartAtom);

  const { data: products } = useQuery({
    queryKey: ['all-products', storeId],
    queryFn: () => ProductApi.getProducts(storeId, categoryId),
    enabled: !!storeId,
  });

  useEffect(() => {
    if (products) {
      const syncedCart = syncCartWithProducts(cart, products);
      if (JSON.stringify(syncedCart) !== JSON.stringify(cart)) {
        setCart(syncedCart);
      }
    }
  }, [products, cart, setCart]);

  return { data: products };
};
