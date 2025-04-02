import clsx from 'clsx';
import { forwardRef } from 'react';

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  text?: string;
  className?: string;
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<'button'>;

export const Radio = forwardRef<HTMLButtonElement, Props>(
  ({ checked, onChange, text, className, disabled, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2 cursor-pointer">
        <button
          ref={ref}
          type="button"
          role="radio"
          aria-checked={checked}
          disabled={disabled}
          onClick={() => !disabled && onChange(!checked)}
          className={clsx(
            'flex h-4 w-4 cursor-pointer items-center justify-center rounded-full border p-[2px] transition-colors',
            checked
              ? 'border-graphite'
              : 'border-gray-300 hover:border-graphite',
            disabled && 'cursor-not-allowed opacity-50 hover:border-gray-300',
            className,
          )}
          {...props}
        >
          {checked && <div className="h-2 w-2 rounded-full bg-graphite" />}
        </button>

        {text && (
          <span
            className={clsx(
              'text-sm cursor-pointer',
              disabled ? 'text-gray-400' : 'text-black',
            )}
            onClick={() => !disabled && onChange(!checked)}
          >
            {text}
          </span>
        )}
      </div>
    );
  },
);

Radio.displayName = 'Radio';
