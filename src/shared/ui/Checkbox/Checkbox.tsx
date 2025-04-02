import { FC } from 'react';
import clsx from 'clsx';
import CheckboxIcon from '@/shared/assets/Checkbox.svg';
import Image from 'next/image';

type Props = {
  text?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
};

export const Checkbox: FC<Props> = ({
  checked,
  onChange,
  text,
  className,
  disabled,
  ...props
}) => {
  return (
    <label
      className={clsx(
        'flex items-center gap-2 cursor-pointer',
        className,
        disabled && 'opacity-50 cursor-not-allowed',
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
        disabled={disabled}
        {...props}
      />
      <div
        className={clsx(
          'flex h-4 w-4 cursor-pointer items-center justify-center rounded border transition-colors',
          checked
            ? 'border-graphite bg-graphite'
            : 'border-graphite/20 hover:border-graphite',
          disabled && 'hover:border-graphite/20',
        )}
      >
        {checked && (
          <Image
            src={CheckboxIcon}
            alt="checked"
            className="h-2 w-3 "
            aria-hidden
          />
        )}
      </div>
      <span className="text-sm text-black cursor-pointer">{text}</span>
    </label>
  );
};
