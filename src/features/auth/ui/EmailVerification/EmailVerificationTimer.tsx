'use client';

import { useEmailVerification } from '@/features/auth/model/useEmailVerification';

export const EmailVerificationTimer = () => {
  const { timeLeft, canRequestNewLink, formatTime, handleRequestNewLink } =
    useEmailVerification();

  if (canRequestNewLink) {
    return (
      <button onClick={handleRequestNewLink}>
        <p className="text-[14px] text-graphite cursor-pointer">
          Запросить новую ссылку
        </p>
      </button>
    );
  }

  return (
    <p className="text-[14px] opacity-40">
      Запросить новую ссылку можно через {formatTime(timeLeft)}
    </p>
  );
};
