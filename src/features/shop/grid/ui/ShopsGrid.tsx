import { useShopsQuery } from '../api/queries/useShopsQuery';
import { ShopCardSkeleton } from '@/entities/shop/ui/ShopCardSkeleton';
import { ShopCardLink } from '@/features/shop/card/ui/ShopCardLink';

export default function ShopsGrid() {
  const { data: shops, isLoading, isError } = useShopsQuery();

  if (isError) return <div>Ошибка загрузки</div>;

  return (
    <div className="container">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <ShopCardSkeleton key={index} />
            ))
          : shops?.map((shop) => (
              <ShopCardLink key={shop.id} shopItem={shop} />
            ))}
      </div>
    </div>
  );
}
