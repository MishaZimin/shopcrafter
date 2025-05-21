import { ProfileForm } from '@/features/profile/ui/ProfileForm';
import { TariffPayCard } from '@/features/tariff/pay/ui/TariffPayCard';

export default function ProfileSection() {
  //   const { profile, isLoading } = useProfile();

  //   if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="w-[450px] mx-auto p-4 space-y-4 my-auto">
        <h1 className="text-2xl font-bold">Профиль</h1>

        <TariffPayCard />

        <div className="space-y-2">
          <ProfileForm
            initialData={{
              //   name: profile.name,
              //   email: profile.email,
              name: '',
              email: '',
            }}
          />
        </div>
      </div>
    </div>
  );
}
