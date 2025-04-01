import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'rounded-[12px] text-center transition-all duration-200 disabled:bg-opacity-8 disabled:bg-graphite disabled:cursor-default disabled:border-none flex items-center justify-center cursor-pointer',
  {
    variants: {
      textColor: {
        dark: 'text-graphite',
        light: 'text-white',
      },
      type: {
        primary: 'bg-graphite hover:bg-graphite/90 active:bg-graphite/80',
        secondary:
          'bg-transparent border border-graphite/20 hover:bg-graphite/4 hover:border-opacity-0 active:bg-graphite/8 active:border-opacity-0',
      },
      size: {
        default: 'h-[42px] px-4',
        sm: 'h-[36px] px-4',
        lg: 'h-[60px] px-6',
      },
      position: {
        left: 'mr-auto',
        center: 'mx-auto',
        right: 'ml-auto !p-0',
      },
      disabled: {
        true: 'text-graphite opacity-40',
      },
    },
    defaultVariants: {
      textColor: 'light',
      type: 'primary',
      size: 'default',
    },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
  link?: string;
  text: string;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
};

export const Button = ({
  onClick,
  link,
  text,
  textColor,
  type,
  size,
  disabled,
  position,
  fullWidth,
  className,
}: ButtonProps) => {
  const content = <span>{text}</span>;

  const classes = buttonVariants({
    textColor,
    type,
    size,
    position,
    disabled,
    className: `${fullWidth ? 'w-full' : ''} ${className || ''}`,
  });

  return link ? (
    <Link href={link} className={classes}>
      {content}
    </Link>
  ) : (
    <button disabled={disabled} onClick={onClick} className={classes}>
      {content}
    </button>
  );
};
