import { useLogout } from '@/features/auth/api/useAuth';
import { Button } from '@/shared/ui/button';

export const LogoutButton = () => {
  const { mutate: logout, isPending } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <Button
      onClick={handleLogout}
      disabled={isPending}
      variant="outline"
      className="w-full mt-4"
    >
      {isPending ? 'Выход...' : 'Выйти'}
    </Button>
  );
};
