import Logo from '@/shared/assets/Logo.svg';
import Image from 'next/image';

export const LogoImage = () => {
  return <Image src={Logo} className="h-[32px]" alt="logo" priority />;
};
