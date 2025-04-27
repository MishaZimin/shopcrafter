import ProductsGrid from '../../../features/product/ui/ProductsGrid';

export default function ProductSection() {
  return (
    <div className="flex flex-col gap-4 w-full pt-2">
      <h2 className="text-2xl font-bold">Товары</h2>
      <ProductsGrid />
    </div>
  );
}
