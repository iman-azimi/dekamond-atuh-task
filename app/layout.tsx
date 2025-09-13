import '../styles/globals.css'
import React from 'react';

export const metadata = {
  title: 'Dekomond - Auth Task',
  description: 'Sample auth task for Dekamond team'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
