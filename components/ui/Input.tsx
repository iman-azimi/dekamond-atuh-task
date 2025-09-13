'use client';
import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string | null;
};

export default function PhoneInput({ label, error, className = '', ...props }: Props) {
  // تابع جلوگیری از ورود غیرعدد
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <label className="block w-full">
      <div className="text-sm mb-1 font-medium">{label}</div>
      <input
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        onKeyPress={handleKeyPress}
        aria-invalid={!!error}
        aria-describedby={error ? 'phone-input-error' : undefined}
        className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1 ${error ? 'border-red-500' : 'border-gray-300'} ${className}`}
        {...props}
      />
      {error && (
        <p id="phone-input-error" className="text-red-600 text-sm mt-1">{error}</p>
      )}
    </label>
  );
}
