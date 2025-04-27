import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const spinnerStyles = cva(
  'animate-spin rounded-full border-2 border-current border-t-transparent',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

interface SpinnerProps extends VariantProps<typeof spinnerStyles> {
  className?: string;
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={spinnerStyles({ size, className })}
        {...props}
      />
    );
  },
);

Spinner.displayName = 'Spinner';
