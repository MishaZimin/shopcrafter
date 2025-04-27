import { useAppRouter } from '@/shared/lib/navigation';

export const useHero = () => {
  const { router } = useAppRouter();

  const handleCreateShopClick = () => {
    router.push('/my-shops');
  };

  return { handleCreateShopClick };
};
