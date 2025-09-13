'use client';
import React, { useEffect, useState } from 'react';
import { getUser, clearUser, User } from '../../lib/auth';
import Button from '../../components/ui/Button';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const u = getUser();
    if (!u) {
      router.replace('/');
      return;
    }
    setUser(u);
  }, [router]);

  const handleLogout = () => {
    clearUser();
    router.push('/');
  };

  if (!user) return null;

  return (
    <main className="p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img src={user.picture} alt={`عکس ${user.name}`} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h2 className="text-lg font-semibold">خوش آمدی، {user.name} 👋</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
          </div>
          <div className="ml-auto">
            <Button onClick={handleLogout}>خروج</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
