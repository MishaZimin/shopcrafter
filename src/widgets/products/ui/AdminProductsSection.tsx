import ProductsGrid from '../../../features/product/ui/ProductsGrid';
import { AddProductButton } from '@/features/product/ui/AddProductButton';

export default function AdminProductsSection() {
  return (
    <div className="flex flex-col gap-4 w-full pt-2">
      <div className="flex flex-row justify-between gap-4 w-full">
        <h2 className="text-2xl font-bold">Товары</h2>
        <AddProductButton />
      </div>

      <ProductsGrid isAdmin={true} />
    </div>
  );
}
