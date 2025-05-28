import { CartItem } from '../model/cartAtomsMap';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrls: string[];
}

export const syncCartWithProducts = (
  cart: CartItem[],
  products: Product[]
): CartItem[] => {
  return cart
    .map((cartItem) => {
      const product = products.find((p) => p.id === Number(cartItem.id));

      if (!product) return null;

      return {
        ...cartItem,
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        imageUrl: product.imageUrls[0],
        quantity: Math.min(cartItem.quantity, product.stock),
      };
    })
    .filter(Boolean) as CartItem[];
};
