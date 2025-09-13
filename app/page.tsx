'use client';

import React, { useState } from 'react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { isValidIranMobile } from '../lib/phone';
import { fetchRandomUser } from '../utils/fetchUser';
import { saveUser } from '../lib/auth';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError(null);
    if (!isValidIranMobile(phone)) {
      setError('شماره موبایل معتبر نیست. فرمت‌های مجاز: 09xxxxxxxxx یا +989xxxxxxxxx یا 00989xxxxxxxxx');
      return;
    }
    setLoading(true);
    try {
      const user = await fetchRandomUser();
      saveUser(user);
      router.push('/dashboard');
    } catch (err) {
      setError('مشکلی رخ داده. لطفا مجددا تلاش کنید');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4">ورود با شماره موبایل</h1>
        <Input label="شماره موبایل" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="مثال: 09123456789" error={error} />
        <div className="mt-4 w-full">
          <Button type="submit" isLoading={loading}>ورود</Button>
        </div>
      </form>
    </main>
  );
}
