'use client';

import { Dialog, DialogContent } from '@/shared/ui/dialog';

interface BaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'xl';
}

export const BaseModal = ({
  open,
  onOpenChange,
  children,
  size = 'md',
}: BaseModalProps) => {
  const sizeClasses = {
    sm: '!max-w-[384px]',
    md: '!max-w-[600px]',
    xl: '!max-w-[800px]',
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={` p-6 rounded-[5px] max-h-[calc(100dvh-64px)] overflow-y-auto ${sizeClasses[size]}`}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};
