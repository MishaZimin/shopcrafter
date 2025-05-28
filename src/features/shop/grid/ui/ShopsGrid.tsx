import { ShopCardSkeleton } from '@/entities/shop/ui/ShopCardSkeleton';
import { ShopCardLink } from '@/features/shop/card/ui/ShopCardLink';
import { useStores } from '../../api/useStores';
import { IShopCard } from '@/entities/shop/model/store.type';

export default function ShopsGrid() {
  const { data: stores, isLoading, error } = useStores();

  if (error) return <div>Error loading stores</div>;

  return (
    <div className="container">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <ShopCardSkeleton key={index} />
            ))
          : stores?.map((shop: IShopCard) => (
              <ShopCardLink key={shop.id} shopItem={shop} />
            ))}
      </div>
    </div>
  );
}
