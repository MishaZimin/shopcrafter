/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
  stock: number;
}

const createCartAtomsForStore = (storeId: number) => {
  const storageKey = `cart-${storeId}`;

  const cartAtom = atomWithStorage<CartItem[]>(storageKey, []);

  const availableItemsAtom = atom((get) =>
    get(cartAtom).filter((item) => item.stock > 0)
  );

  const totalItemsAtom = atom((get) =>
    get(availableItemsAtom).reduce((sum, item) => sum + item.quantity, 0)
  );

  const totalPriceAtom = atom((get) =>
    get(availableItemsAtom).reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
  );

  const allItemsAtom = atom((get) => get(cartAtom));

  const addToCartAtom = atom(
    null,
    (get, set, item: Omit<CartItem, 'quantity' | 'stock'>, stock: number) => {
      if (stock < 1) return;

      const cart = get(cartAtom);
      const existing = cart.find((i) => i.id === item.id);

      if (existing) {
        const newQuantity = existing.quantity + 1;
        if (newQuantity > stock) return;

        set(
          cartAtom,
          cart.map((i) =>
            i.id === item.id ? { ...i, quantity: newQuantity } : i
          )
        );
      } else {
        if (stock < 1) return;
        set(cartAtom, [...cart, { ...item, quantity: 1, stock }]);
      }
    }
  );

  const removeFromCartAtom = atom(null, (get, set, id: string) => {
    set(
      cartAtom,
      get(cartAtom).filter((item) => item.id !== id)
    );
  });

  const updateQuantityAtom = atom(
    null,
    (
      get,
      set,
      { id, quantity, stock }: { id: string; quantity: number; stock: number }
    ) => {
      if (quantity < 1) return;
      if (quantity > stock) return;

      set(
        cartAtom,
        get(cartAtom).map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  );

  return {
    cartAtom,
    totalItemsAtom,
    totalPriceAtom,
    addToCartAtom,
    removeFromCartAtom,
    updateQuantityAtom,
    allItemsAtom,
  };
};

const globalCache =
  typeof window !== 'undefined'
    ? ((window as any).__CART_ATOMS_CACHE__ ??
      ((window as any).__CART_ATOMS_CACHE__ = new Map()))
    : new Map<number, ReturnType<typeof createCartAtomsForStore>>();

export const useStoreCartAtoms = (storeId: number) => {
  if (!globalCache.has(storeId)) {
    globalCache.set(storeId, createCartAtomsForStore(storeId));
  }

  return globalCache.get(storeId)!;
};
