'use client';
import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

export default function Button({ isLoading = false, disabled, children, ...props }: Props) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold focus-visible:ring-2 ${disabled || isLoading ? 'opacity-60 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
    >
      {isLoading ? (<span className="animate-pulse">لطفا صبر کنید ...</span>) : children}
    </button>
  );
}
