import clsx from 'clsx';
import { forwardRef } from 'react';

type ToggleProps = {
  isChecked: boolean;
  onToggle: () => void;
  disabled?: boolean;
  className?: string;
  label?: string;
};

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ isChecked, onToggle, disabled, className, label, ...props }, ref) => {
    return (
      <label
        className={clsx(
          'inline-flex  items-center',
          disabled && 'opacity-70',
          className,
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          className="peer sr-only"
          checked={isChecked}
          onChange={onToggle}
          disabled={disabled}
          aria-checked={isChecked}
          {...props}
        />

        <div
          className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} animation peer relative h-6 w-10 rounded-full border-[2px] border-graphite/0  bg-graphite/16  after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border-[2px] after:border-none after:bg-white after:transition-all after:content-[''] peer-checked:bg-graphite peer-checked:bg-opacity-[100%] peer-checked:after:translate-x-full peer-checked:after:bg-white`}
        ></div>
        {label && (
          <p className=" cursor-pointer ml-2 text-sm text-black">{label}</p>
        )}
      </label>
    );
  },
);

Toggle.displayName = 'Toggle';
