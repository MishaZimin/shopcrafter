'use client';

import { EmailVerificationTimer } from './EmailVerificationTimer';

export const EmailVerification = () => {
  return (
    <div className="flex flex-col gap-[16px] text-center">
      <p className="text-center text-[20px] font-semibold">Проверьте почту</p>
      <p className="font-normal">
        Ссылка для входа отправлена
        <br /> на почту
      </p>
      <EmailVerificationTimer />
    </div>
  );
};
