import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'destructive' | 'success';
  label: string;
  className?: string;
}

export default function Button({ variant = 'default', label, className, ...props }: ButtonProps) {
  const buttonClass = clsx(
    'inline-flex items-center justify-center px-2 py-1 text-base cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 font-bold text-center rounded-lg transition duration-200 ease-in-out w-30 h-8',
    {
      'bg-primary text-white': variant === 'default',
      'bg-transparent text-black border border-gray-secondary': variant === 'outline',
      'bg-red text-white': variant === 'destructive',
      'bg-green text-white': variant === 'success',
    },
    className
  );

  return (
    <button type="button" className={buttonClass} {...props}>
      {label}
    </button>
  );
}
