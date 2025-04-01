import { useState, useEffect } from 'react';

export const useEmailVerification = (initialTime = 5) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [canRequestNewLink, setCanRequestNewLink] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      setCanRequestNewLink(true);
    }
  }, [timeLeft]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleRequestNewLink = () => {
    console.log('Запрос новой ссылки отправлен');
    setTimeLeft(initialTime);
    setCanRequestNewLink(false);
  };

  return {
    timeLeft,
    canRequestNewLink,
    formatTime,
    handleRequestNewLink,
  };
};
